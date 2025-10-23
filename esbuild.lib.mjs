import esbuild from "esbuild";
import inlineImportPlugin from "esbuild-plugin-inline-import";
import process from "process";

const prod = process.argv[2] === "production";

const common = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  external: [
    // Keep CM6 and friends external for consumers to manage versions
    "@codemirror/autocomplete",
    "@codemirror/closebrackets",
    "@codemirror/collab",
    "@codemirror/commands",
    "@codemirror/comment",
    "@codemirror/fold",
    "@codemirror/gutter",
    "@codemirror/highlight",
    "@codemirror/history",
    "@codemirror/language",
    "@codemirror/lint",
    "@codemirror/matchbrackets",
    "@codemirror/panel",
    "@codemirror/rangeset",
    "@codemirror/rectangular-selection",
    "@codemirror/search",
    "@codemirror/state",
    "@codemirror/stream-parser",
    "@codemirror/text",
    "@codemirror/tooltip",
    "@codemirror/view",
    "@lezer/highlight",
  ],
  target: "es2019",
  sourcemap: prod ? false : "inline",
  plugins: [inlineImportPlugin()],
};

await esbuild.build({
  ...common,
  format: "esm",
  outfile: "dist/index.js",
});
