[
    // Math mode
	// {trigger: "mk", replacement: "$$0$", options: "tA"},
	// {trigger: "dm", replacement: "$$\n$0\n$$", options: "tAw"},
	{trigger: "beg", replacement: "\\begin{$0}\n$1\n\\end{$0}", options: "tA"},

    // Dashes
	// {trigger: "--", replacement: "–", options: "tA"},
	// {trigger: "–-", replacement: "—", options: "tA"},
	// {trigger: "—-", replacement: "---", options: "tA"},

    // Greek letters
	{trigger: "@a", replacement: "\\alpha", options: "tA"},
	{trigger: "@b", replacement: "\\beta", options: "tA"},
	{trigger: "@g", replacement: "\\gamma", options: "tA"},
	{trigger: "@G", replacement: "\\Gamma", options: "tA"},
	{trigger: "@d", replacement: "\\delta", options: "tA"},
	{trigger: "@D", replacement: "\\Delta", options: "tA"},
	{trigger: "@e", replacement: "\\epsilon", options: "tA"},
	{trigger: ":e", replacement: "\\varepsilon", options: "tA"},
	{trigger: "@z", replacement: "\\zeta", options: "tA"},
	{trigger: "@t", replacement: "\\theta", options: "tA"},
	{trigger: "@T", replacement: "\\Theta", options: "tA"},
	{trigger: ":t", replacement: "\\vartheta", options: "tA"},
	{trigger: "@i", replacement: "\\iota", options: "tA"},
	{trigger: "@k", replacement: "\\kappa", options: "tA"},
	{trigger: "@l", replacement: "\\lambda", options: "tA"},
	{trigger: "@L", replacement: "\\Lambda", options: "tA"},
	{trigger: "@s", replacement: "\\sigma", options: "tA"},
	{trigger: "@S", replacement: "\\Sigma", options: "tA"},
	{trigger: "@u", replacement: "\\upsilon", options: "tA"},
	{trigger: "@U", replacement: "\\Upsilon", options: "tA"},
	{trigger: "@o", replacement: "\\omega", options: "tA"},
	{trigger: "@O", replacement: "\\Omega", options: "tA"},
	{trigger: "ome", replacement: "\\omega", options: "tA"},
	{trigger: "Ome", replacement: "\\Omega", options: "tA"},

    // Text environment
    {trigger: "text", replacement: "\\text{$0}$1", options: "tA"},
    {trigger: "\"", replacement: "\\text{$0}$1", options: "tA"},

    // Basic operations
    {trigger: "sr", replacement: "^{2}", options: "tA"},
	{trigger: "cb", replacement: "^{3}", options: "tA"},
	{trigger: "rd", replacement: "^{$0}$1", options: "tA"},
	{trigger: "_", replacement: "_{$0}$1", options: "tA"},
	{trigger: "sts", replacement: "_\\text{$0}", options: "tA"},
	{trigger: "sq", replacement: "\\sqrt{ $0 }$1", options: "tA"},
	{trigger: "//", replacement: "\\frac{$0}{$1}$2", options: "tA"},
	{trigger: "ee", replacement: "e^{ $0 }$1", options: "tA"},
    {trigger: "invs", replacement: "^{-1}", options: "tA"},
    {trigger: /([A-Za-z])(\d)/, replacement: "[[0]]_{[[1]]}", options: "rtA", description: "Auto letter subscript", priority: -1},

    {trigger: /([^\\])(exp|log|ln)/, replacement: "[[0]]\\[[1]]", options: "rtA"},
    {trigger: "conj", replacement: "^{*}", options: "tA"},
    {trigger: "Re", replacement: "\\mathrm{Re}", options: "tA"},
	{trigger: "Im", replacement: "\\mathrm{Im}", options: "tA"},
    {trigger: "bf", replacement: "\\mathbf{$0}", options: "tA"},
	{trigger: "rm", replacement: "\\mathrm{$0}$1", options: "tA"},

    // Linear algebra
    {trigger: /([^\\])(det)/, replacement: "[[0]]\\[[1]]", options: "rtA"},
    {trigger: "trace", replacement: "\\mathrm{Tr}", options: "tA"},

    // More operations
	{trigger: "([a-zA-Z])hat", replacement: "\\hat{[[0]]}", options: "rtA"},
    {trigger: "([a-zA-Z])bar", replacement: "\\bar{[[0]]}", options: "rtA"},
	{trigger: "([a-zA-Z])dot", replacement: "\\dot{[[0]]}", options: "rtA", priority: -1},
	{trigger: "([a-zA-Z])ddot", replacement: "\\ddot{[[0]]}", options: "rtA", priority: 1},
	{trigger: "([a-zA-Z])tilde", replacement: "\\tilde{[[0]]}", options: "rtA"},
	{trigger: "([a-zA-Z])und", replacement: "\\underline{[[0]]}", options: "rtA"},
	{trigger: "([a-zA-Z])vec", replacement: "\\vec{[[0]]}", options: "rtA"},
    {trigger: "([a-zA-Z]),\\.", replacement: "\\mathbf{[[0]]}", options: "rtA"},
	{trigger: "([a-zA-Z])\\.,", replacement: "\\mathbf{[[0]]}", options: "rtA"},
	{trigger: "\\\\(${GREEK}),\\.", replacement: "\\boldsymbol{\\[[0]]}", options: "rtA"},
	{trigger: "\\\\(${GREEK})\\.,", replacement: "\\boldsymbol{\\[[0]]}", options: "rtA"},

	{trigger: "hat", replacement: "\\hat{$0}$1", options: "tA"},
    {trigger: "bar", replacement: "\\bar{$0}$1", options: "tA"},
	{trigger: "dot", replacement: "\\dot{$0}$1", options: "tA", priority: -1},
	{trigger: "ddot", replacement: "\\ddot{$0}$1", options: "tA"},
	{trigger: "cdot", replacement: "\\cdot", options: "tA"},
	{trigger: "tilde", replacement: "\\tilde{$0}$1", options: "tA"},
	{trigger: "und", replacement: "\\underline{$0}$1", options: "tA"},
	{trigger: "vec", replacement: "\\vec{$0}$1", options: "tA"},

    // More auto letter subscript
    {trigger: /([A-Za-z])_(\d\d)/, replacement: "[[0]]_{[[1]]}", options: "rtA"},
	{trigger: /\\hat{([A-Za-z])}(\d)/, replacement: "\\hat{[[0]]}_{[[1]]}", options: "rtA"},
	{trigger: /\\vec{([A-Za-z])}(\d)/, replacement: "\\vec{[[0]]}_{[[1]]}", options: "rtA"},
	{trigger: /\\mathbf{([A-Za-z])}(\d)/, replacement: "\\mathbf{[[0]]}_{[[1]]}", options: "rtA"},

    {trigger: "xnn", replacement: "x_{n}", options: "tA"},
	{trigger: "\\xii", replacement: "x_{i}", options: "tA", priority: 1},
	{trigger: "xjj", replacement: "x_{j}", options: "tA"},
	{trigger: "xp1", replacement: "x_{n+1}", options: "tA"},
	{trigger: "ynn", replacement: "y_{n}", options: "tA"},
	{trigger: "yii", replacement: "y_{i}", options: "tA"},
	{trigger: "yjj", replacement: "y_{j}", options: "tA"},

    // Symbols
    {trigger: "ooo", replacement: "\\infty", options: "tA"},
	{trigger: "sum", replacement: "\\sum", options: "tA"},
	{trigger: "prod", replacement: "\\prod", options: "tA"},
	{trigger: "\\sum", replacement: "\\sum_{${0:i}=${1:1}}^{${2:N}} $3", options: "m"},
	{trigger: "\\prod", replacement: "\\prod_{${0:i}=${1:1}}^{${2:N}} $3", options: "m"},
    {trigger: "lim", replacement: "\\lim_{ ${0:n} \\to ${1:\\infty} } $2", options: "tA"},
    {trigger: "+-", replacement: "\\pm", options: "tA"},
	{trigger: "-+", replacement: "\\mp", options: "tA"},
    {trigger: "...", replacement: "\\dots", options: "tA"},
    {trigger: "nabl", replacement: "\\nabla", options: "tA"},
    // The operator nabla is also called del, but using "del" as a trigger conflicts with the greek letter delta.
	// {trigger: "del", replacement: "\\nabla", options: "tA"},
	{trigger: "xx", replacement: "\\times", options: "tA"},
    {trigger: "**", replacement: "\\cdot", options: "tA"},
    {trigger: "para", replacement: "\\parallel", options: "tA"},

	{trigger: "===", replacement: "\\equiv", options: "tA"},
    {trigger: "!=", replacement: "\\neq", options: "tA"},
	{trigger: ">=", replacement: "\\geq", options: "tA"},
	{trigger: "<=", replacement: "\\leq", options: "tA"},
	{trigger: ">>", replacement: "\\gg", options: "tA"},
	{trigger: "<<", replacement: "\\ll", options: "tA"},
	{trigger: "simm", replacement: "\\sim", options: "tA"},
	{trigger: "sim=", replacement: "\\simeq", options: "tA"},
    {trigger: "prop", replacement: "\\propto", options: "tA"},


    {trigger: "<->", replacement: "\\leftrightarrow ", options: "tA"},
	{trigger: "->", replacement: "\\to", options: "tA"},
	{trigger: "!>", replacement: "\\mapsto", options: "tA"},
    {trigger: "=>", replacement: "\\implies", options: "tA"},
	{trigger: "=<", replacement: "\\impliedby", options: "tA"},

	{trigger: "and", replacement: "\\cap", options: "tA"},
	{trigger: "orr", replacement: "\\cup", options: "tA"},
	{trigger: "inn", replacement: "\\in", options: "tA"},
	{trigger: "notin", replacement: "\\not\\in", options: "tA"},
    {trigger: "\\\\\\", replacement: "\\setminus", options: "tA"},
    {trigger: "sub=", replacement: "\\subseteq", options: "tA"},
    {trigger: "sup=", replacement: "\\supseteq", options: "tA"},
	{trigger: "eset", replacement: "\\emptyset", options: "tA"},
	{trigger: "set", replacement: "\\{ $0 \\}$1", options: "tA"},
	{trigger: "e\\xi sts", replacement: "\\exists", options: "tA", priority: 1},

	{trigger: "LL", replacement: "\\mathcal{L}", options: "tA"},
	{trigger: "HH", replacement: "\\mathcal{H}", options: "tA"},
	{trigger: "CC", replacement: "\\mathbb{C}", options: "tA"},
	{trigger: "RR", replacement: "\\mathbb{R}", options: "tA"},
	{trigger: "ZZ", replacement: "\\mathbb{Z}", options: "tA"},
	{trigger: "NN", replacement: "\\mathbb{N}", options: "tA"},

    // Handle spaces and backslashes

    // Snippet variables can be used as shortcuts when writing snippets.
    // For example, ${GREEK} below is shorthand for "alpha|beta|gamma|Gamma|delta|..."
    // You can edit snippet variables under the Advanced snippet settings section.

	{trigger: "([^\\\\])(${GREEK})", replacement: "[[0]]\\[[1]]", options: "rtA", description: "Add backslash before Greek letters"},
	{trigger: "([^\\\\])(${SYMBOL})", replacement: "[[0]]\\[[1]]", options: "rtA", description: "Add backslash before symbols"},

    // Insert space after Greek letters and symbols
	{trigger: "\\\\(${GREEK}|${SYMBOL}|${MORE_SYMBOLS})([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rtA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) sr", replacement: "\\[[0]]^{2}", options: "rtA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) cb", replacement: "\\[[0]]^{3}", options: "rtA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) rd", replacement: "\\[[0]]^{$0}$1", options: "rtA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) hat", replacement: "\\hat{\\[[0]]}", options: "rtA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) dot", replacement: "\\dot{\\[[0]]}", options: "rtA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) bar", replacement: "\\bar{\\[[0]]}", options: "rtA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) vec", replacement: "\\vec{\\[[0]]}", options: "rtA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) tilde", replacement: "\\tilde{\\[[0]]}", options: "rtA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) und", replacement: "\\underline{\\[[0]]}", options: "rtA"},


    // Derivatives and integrals
    {trigger: "par", replacement: "\\frac{ \\partial ${0:y} }{ \\partial ${1:x} } $2", options: "m"},
    {trigger: /pa([A-Za-z])([A-Za-z])/, replacement: "\\frac{ \\partial [[0]] }{ \\partial [[1]] } ", options: "rm"},
    {trigger: "ddt", replacement: "\\frac{d}{dt} ", options: "tA"},

    {trigger: /([^\\])int/, replacement: "[[0]]\\int", options: "tA", priority: -1},
    {trigger: "\\int", replacement: "\\int $0 \\, d${1:x} $2", options: "m"},
    {trigger: "dint", replacement: "\\int_{${0:0}}^{${1:1}} $2 \\, d${3:x} $4", options: "tA"},
    {trigger: "oint", replacement: "\\oint", options: "tA"},
	{trigger: "iint", replacement: "\\iint", options: "tA"},
    {trigger: "iiint", replacement: "\\iiint", options: "tA"},
    {trigger: "oinf", replacement: "\\int_{0}^{\\infty} $0 \\, d${1:x} $2", options: "tA"},
	{trigger: "infi", replacement: "\\int_{-\\infty}^{\\infty} $0 \\, d${1:x} $2", options: "tA"},


    // Trigonometry
    {trigger: /([^\\])(arcsin|sin|arccos|cos|arctan|tan|csc|sec|cot)/, replacement: "[[0]]\\[[1]]", options: "rtA", description: "Add backslash before trig funcs"},

    {trigger: /\\(arcsin|sin|arccos|cos|arctan|tan|csc|sec|cot)([A-Za-gi-z])/,
     replacement: "\\[[0]] [[1]]", options: "rtA",
     description: "Add space after trig funcs. Skips letter h to allow sinh, cosh, etc."},

    {trigger: /\\(sinh|cosh|tanh|coth)([A-Za-z])/,
     replacement: "\\[[0]] [[1]]", options: "rtA",
     description: "Add space after hyperbolic trig funcs"},


    // Visual operations
	{trigger: "U", replacement: "\\underbrace{ ${VISUAL} }_{ $0 }", options: "tA"},
	{trigger: "O", replacement: "\\overbrace{ ${VISUAL} }^{ $0 }", options: "tA"},
	{trigger: "B", replacement: "\\underset{ $0 }{ ${VISUAL} }", options: "tA"},
	{trigger: "C", replacement: "\\cancel{ ${VISUAL} }", options: "tA"},
	{trigger: "K", replacement: "\\cancelto{ $0 }{ ${VISUAL} }", options: "tA"},
	{trigger: "S", replacement: "\\sqrt{ ${VISUAL} }", options: "tA"},


    // Physics
	{trigger: "kbt", replacement: "k_{B}T", options: "tA"},
	{trigger: "msun", replacement: "M_{\\odot}", options: "tA"},

    // Quantum mechanics
    {trigger: "dag", replacement: "^{\\dagger}", options: "tA"},
	{trigger: "o+", replacement: "\\oplus ", options: "tA"},
	{trigger: "ox", replacement: "\\otimes ", options: "tA"},
    {trigger: "bra", replacement: "\\bra{$0} $1", options: "tA"},
	{trigger: "ket", replacement: "\\ket{$0} $1", options: "tA"},
	{trigger: "brk", replacement: "\\braket{ $0 | $1 } $2", options: "tA"},
    {trigger: "outer", replacement: "\\ket{${0:\\psi}} \\bra{${0:\\psi}} $1", options: "tA"},

    // Chemistry
	{trigger: "pu", replacement: "\\pu{ $0 }", options: "tA"},
	{trigger: "cee", replacement: "\\ce{ $0 }", options: "tA"},
	{trigger: "he4", replacement: "{}^{4}_{2}He ", options: "tA"},
	{trigger: "he3", replacement: "{}^{3}_{2}He ", options: "tA"},
	{trigger: "iso", replacement: "{}^{${0:4}}_{${1:2}}${2:He}", options: "tA"},


    // Environments
	{trigger: "pmat", replacement: "\\begin{pmatrix}\n$0\n\\end{pmatrix}", options: "tA"},
	{trigger: "bmat", replacement: "\\begin{bmatrix}\n$0\n\\end{bmatrix}", options: "tA"},
	{trigger: "Bmat", replacement: "\\begin{Bmatrix}\n$0\n\\end{Bmatrix}", options: "tA"},
	{trigger: "vmat", replacement: "\\begin{vmatrix}\n$0\n\\end{vmatrix}", options: "tA"},
	{trigger: "Vmat", replacement: "\\begin{Vmatrix}\n$0\n\\end{Vmatrix}", options: "tA"},
	{trigger: "matrix", replacement: "\\begin{matrix}\n$0\n\\end{matrix}", options: "tA"},

	{trigger: "pmat", replacement: "\\begin{pmatrix}$0\\end{pmatrix}", options: "nA"},
	{trigger: "bmat", replacement: "\\begin{bmatrix}$0\\end{bmatrix}", options: "nA"},
	{trigger: "Bmat", replacement: "\\begin{Bmatrix}$0\\end{Bmatrix}", options: "nA"},
	{trigger: "vmat", replacement: "\\begin{vmatrix}$0\\end{vmatrix}", options: "nA"},
	{trigger: "Vmat", replacement: "\\begin{Vmatrix}$0\\end{Vmatrix}", options: "nA"},
	{trigger: "matrix", replacement: "\\begin{matrix}$0\\end{matrix}", options: "nA"},

	{trigger: "cases", replacement: "\\begin{cases}\n$0\n\\end{cases}", options: "tA"},
	{trigger: "align", replacement: "\\begin{align}\n$0\n\\end{align}", options: "tA"},
	{trigger: "array", replacement: "\\begin{array}\n$0\n\\end{array}", options: "tA"},


    // Brackets
	{trigger: "avg", replacement: "\\langle $0 \\rangle $1", options: "tA"},
	{trigger: "norm", replacement: "\\lvert $0 \\rvert $1", options: "tA", priority: 1},
	{trigger: "Norm", replacement: "\\lVert $0 \\rVert $1", options: "tA", priority: 1},
	{trigger: "ceil", replacement: "\\lceil $0 \\rceil $1", options: "tA"},
	{trigger: "floor", replacement: "\\lfloor $0 \\rfloor $1", options: "tA"},
	{trigger: "mod", replacement: "|$0|$1", options: "tA"},
	{trigger: "(", replacement: "(${VISUAL})", options: "tA"},
	{trigger: "[", replacement: "[${VISUAL}]", options: "tA"},
	{trigger: "{", replacement: "{${VISUAL}}", options: "tA"},
	{trigger: "(", replacement: "($0)$1", options: "tA"},
	{trigger: "{", replacement: "{$0}$1", options: "tA"},
	{trigger: "[", replacement: "[$0]$1", options: "tA"},
	{trigger: "lr(", replacement: "\\left( $0 \\right) $1", options: "tA"},
	{trigger: "lr{", replacement: "\\left\\{ $0 \\right\\} $1", options: "tA"},
	{trigger: "lr[", replacement: "\\left[ $0 \\right] $1", options: "tA"},
	{trigger: "lr|", replacement: "\\left| $0 \\right| $1", options: "tA"},
	{trigger: "lra", replacement: "\\left< $0 \\right> $1", options: "tA"},


    // Misc

    // Automatically convert standalone letters in text to math (except a, A, I).
    // (Un-comment to enable)
    // {trigger: /([^'])\b([B-HJ-Zb-z])\b([\n\s.,?!:'])/, replacement: "[[0]]$[[1]]$[[2]]", options: "tA"},

    // Automatically convert Greek letters in text to math.
    // {trigger: "(${GREEK})([\\n\\s.,?!:'])", replacement: "$\\[[0]]$[[1]]", options: "rtAw"},

    // Automatically convert text of the form "x=2" and "x=n+1" to math.
    // {trigger: /([A-Za-z]=\d+)([\n\s.,?!:'])/, replacement: "$[[0]]$[[1]]", options: "rtAw"},
    // {trigger: /([A-Za-z]=[A-Za-z][+-]\d+)([\n\s.,?!:'])/, replacement: "$[[0]]$[[1]]", options: "tAw"},


    // Snippet replacements can have placeholders.
	{trigger: "tayl", replacement: "${0:f}(${1:x} + ${2:h}) = ${0:f}(${1:x}) + ${0:f}'(${1:x})${2:h} + ${0:f}''(${1:x}) \\frac{${2:h}^{2}}{2!} + \\dots$3", options: "tA", description: "Taylor expansion"},

    // Snippet replacements can also be JavaScript functions.
    // See the documentation for more information.
	{trigger: /iden(\d)/, replacement: (match) => {
		const n = match[1];

		let arr = [];
		for (let j = 0; j < n; j++) {
			arr[j] = [];
			for (let i = 0; i < n; i++) {
				arr[j][i] = (i === j) ? 1 : 0;
			}
		}

		let output = arr.map(el => el.join(" & ")).join(" \\\\\n");
		output = `\\begin{pmatrix}\n${output}\n\\end{pmatrix}`;
		return output;
	}, options: "tA", description: "N x N identity matrix"},
]
