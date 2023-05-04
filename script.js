var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
function rndHex() {
	return Math.floor(Math.random()*16).toString(16);
}
function randomColor () {
	let color = [];
	for (let i=0; i<6; i++){
		color.push(rndHex());
	}
	return "#"+color.join('');
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color1.value=randomColor();
color2.value=randomColor();
setGradient();