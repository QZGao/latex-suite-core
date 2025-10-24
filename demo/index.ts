import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { latexSuite } from "../src/main";
import { DEFAULT_SETTINGS, processLatexSuiteSettings } from "../src/settings/settings";
import { parseSnippets, parseSnippetVariables } from "../src/snippets/parse";

async function start() {
  // Build settings manually so we can add a simple demo alias: ff + Tab -> \\frac{}{}}
  const snippetVars = await parseSnippetVariables(DEFAULT_SETTINGS.snippetVariables);
  const defaultSnips = await parseSnippets(DEFAULT_SETTINGS.snippets, snippetVars);
  // Make 'ff' work anywhere (text mode) in the demo so Tab expansion is easy to test
  const demoExtraSnipsSrc = "export default [ { trigger: \"ff\", replacement: \"\\\\frac{$0}{$1}$2\", options: \"tA\" } ];";
  const demoExtraSnips = await parseSnippets(demoExtraSnipsSrc, snippetVars);
  const cmSettings = processLatexSuiteSettings([...defaultSnips, ...demoExtraSnips], {
    ...DEFAULT_SETTINGS,
    concealEnabled: false,     // core build excludes conceal implementation
    mathPreviewEnabled: false, // core build excludes inline preview
  });
  const ext = latexSuite(cmSettings);

  const initialDoc = "\\text{Attention}(Q,K,V)= \\text{softmax}\\!\\left( \\dfrac{Q K^\\top}{\\sqrt{d_k}} \\right) V";
  const previewEl = document.getElementById("preview");

  const previewExtension = (el: HTMLElement) => {
    let timer: number | null = null;
    const schedule = (view: EditorView) => {
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const text = view.state.doc.toString();
        // Render the entire editor content as a single display-mode KaTeX formula
        const katex = (window as unknown as { katex?: { render: (expr: string, el: HTMLElement, opts?: unknown) => void } }).katex;
        if (katex && typeof katex.render === "function") {
          try {
            katex.render(text, el, { displayMode: true, throwOnError: false, strict: "warn" });
          } catch (e) {
            // Fallback: show raw text if KaTeX bails for any reason
            el.textContent = text;
          }
        } else {
          el.textContent = text;
        }
      }, 120);
    };
    return EditorView.updateListener.of((u) => {
      if (u.docChanged || u.selectionSet) schedule(u.view);
    });
  };

  const state = EditorState.create({
    doc: initialDoc,
    selection: { anchor: 1 },
    extensions: [basicSetup, ...ext, ...(previewEl ? [previewExtension(previewEl)] : [])],
  });

  const parent = document.getElementById("editor");
  if (!parent) throw new Error("Missing #editor container");
  const view = new EditorView({ state, parent });
  view.focus();
  // Initial preview render
  if (previewEl) {
    const katex = (window as unknown as { katex?: { render: (expr: string, el: HTMLElement, opts?: unknown) => void } }).katex;
    const text = view.state.doc.toString();
    if (katex && typeof katex.render === "function") {
      try {
        katex.render(text, previewEl, { displayMode: true, throwOnError: false, strict: "warn" });
      } catch {
        previewEl.textContent = text;
      }
    } else {
      previewEl.textContent = text;
    }
  }
}

start();
