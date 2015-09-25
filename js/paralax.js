var imgParalax = document.querySelector("#imgParalax");
var tituloParalax = document.querySelector("#tituloParalax");

var img = imgParalax;
var titulo = tituloParalax;

var content = document.querySelector("#content");

var posTranslate = 0;

function atualizar(){
	var scroll = content.scrollTop;
	img.style.transform = "translate("+ 0 +"px,"+ -scroll/2 +"px)";
	titulo.style.transform = "translate("+ 0 +"px,"+ -scroll/5 +"px)";
}

content.addEventListener("scroll", atualizar);