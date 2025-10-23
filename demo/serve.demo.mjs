import esbuild from "esbuild";
import inlineImportPlugin from "esbuild-plugin-inline-import";

const ctx = await esbuild.context({
  entryPoints: ["demo/index.ts"],
  bundle: true,
  platform: "browser",
  target: "es2018",
  format: "esm",
  sourcemap: true,
  outfile: "demo/dist/app.js",
  plugins: [inlineImportPlugin()],
});

await ctx.watch();

const { host, port } = await ctx.serve({
  servedir: "demo",
  host: "localhost",
  port: 8000,
});

const h = host && host !== "" ? host : "localhost";
console.log(`Demo server running at http://${h}:${port}/index.html`);

// Keep the process alive so the server and watch mode continue running
await new Promise(() => {});
