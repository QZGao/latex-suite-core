import esbuild from "esbuild";
import inlineImportPlugin from "esbuild-plugin-inline-import";

const prod = process.argv.includes("--prod");

const common = {
  entryPoints: ["demo/index.ts"],
  bundle: true,
  platform: "browser",
  target: "es2018",
  format: "esm",
  sourcemap: prod ? false : "inline",
  outfile: "demo/dist/app.js",
  logLevel: "info",
  plugins: [inlineImportPlugin()],
};

await esbuild.build(common);
