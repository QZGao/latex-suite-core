import { EditorView } from "@codemirror/view";
import { Extension, Prec } from "@codemirror/state";
import { snippetExtensions } from "./snippets/codemirror/extensions";
import { getLatexSuiteConfigExtension } from "./snippets/codemirror/config";
import { DEFAULT_SETTINGS, LatexSuiteCMSettings, LatexSuitePluginSettings, processLatexSuiteSettings } from "./settings/settings";
import { parseSnippetVariables, parseSnippets } from "./snippets/parse";
import { handleUpdate, onKeydown } from "./latex_suite";
import { colorPairedBracketsPluginLowestPrec, highlightCursorBracketsPlugin } from "./editor_extensions/highlight_brackets";

// CM6 entry point: build the LaTeX Suite extension array (no Obsidian API).
export async function latexSuiteWithDefaults(overrides?: Partial<LatexSuitePluginSettings>): Promise<Extension[]> {
	const pluginSettings: LatexSuitePluginSettings = {
		...DEFAULT_SETTINGS,
		...(overrides ?? {}),
	};

	const snippetVariables = await parseSnippetVariables(pluginSettings.snippetVariables);
	const snippets = await parseSnippets(pluginSettings.snippets, snippetVariables);
	const cmSettings = processLatexSuiteSettings(snippets, pluginSettings);

	return latexSuite(cmSettings);
}

export function latexSuite(settings: LatexSuiteCMSettings): Extension[] {
	const extensions: Extension[] = [];

	// Base configuration + listeners
	extensions.push([
		getLatexSuiteConfigExtension(settings),
		Prec.highest(EditorView.domEventHandlers({ keydown: onKeydown })),
		EditorView.updateListener.of(handleUpdate),
		snippetExtensions,
	]);

	// Optional CM-only extras
	if (settings.colorPairedBracketsEnabled)
		extensions.push(colorPairedBracketsPluginLowestPrec);
	if (settings.highlightCursorBracketsEnabled)
		extensions.push(highlightCursorBracketsPlugin.extension);

	// Note: Conceal and math preview were tied to Obsidian; intentionally excluded here.
	return extensions;
}

export default latexSuite;
