function randint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNumber(a=false) {
	let num = randint(-5, 5);

	if (num == 0 || num == 1)
		return "";
	if (num == -1)
		return "-" + a ? "" : "1";
	return num.toString();
}

var functions = [
	["(", ")^2"],
	["(", ")^3"],
	["\\sqrt{", "}"],
	["\\vert ", " \\vert"],
	["\\frac{1}{", "}"],
];


function updateMathContent(s) {
   var math = MathJax.Hub.getAllJax("content")[0];
   MathJax.Hub.Queue(["Text", math, s]);
}


document.addEventListener("click", () => {
	let new_text = "f(x)=";
	new_text += getNumber();

	let HT = getNumber();
	let inside = getNumber() + "(x" + (HT >= 0 ? (HT == 0 ? "" : "+" + HT) : HT) + ")";

	let funct = randint(0, functions.length - 1);
	new_text += functions[funct][0] + inside + functions[funct][1];

	let VT = getNumber(true);
	new_text += VT > 0 ? "+" + VT : VT;

	updateMathContent(new_text);


});