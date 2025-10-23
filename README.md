# (WIP) latex-suite-core

[Obsidian Latex Suite](https://github.com/artisticat1/obsidian-latex-suite) core functionality extracted as a CodeMirror 6 (CM6) extension, to be used as a dependency in other projects.

## Build

Build the CM6 bundle (`main.js`, CommonJS) at the repository root.

- Prerequisite: Node.js 18+
- Install deps: `npm i`
- Build (type-check + production bundle): `npm run build` → outputs `main.js`
- Develop with watch: `npm run dev`

## Demo

Local, git-ignored browser demo with live KaTeX preview. The entire editor content is rendered as one display-mode formula — no `$`/`$$` needed.

- Prerequisite: Node.js 18+
- Run:
	- `npm i`
	- `npm run demo:serve` and open http://localhost:8000
- Try:
	- Type `ff` then Tab to expand to `\frac{…}{…}` (demo-only snippet)
	- Make sure the editor is focused if Tab doesn’t expand
- Optional: bundle without server: `npm run demo:build` (outputs `demo/dist/app.js`)
- Notes: KaTeX is loaded from a CDN (no SRI). Change host/port in `demo/serve.demo.mjs`.

## Support

Buy [artisticat](https://github.com/artisticat1), the original author of [Obsidian Latex Suite](https://github.com/artisticat1/obsidian-latex-suite), a coffee:

<a href='https://ko-fi.com/J3J6BBZAW' target='_blank'><img height='42' style='border:0px;height:42px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
