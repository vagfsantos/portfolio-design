
function Banner(){
	this.img = "";
	this.titulo = "";
	this.link = "";
}

Banner.prototype = {
	exibir:function(){
		var img = document.querySelector("#imgBanner");
		img.classList.remove(img.classList[0]);
		img.classList.add(this.img);
		
		var title = document.querySelector("#titulo");
		title.textContent = this.titulo;
		
		var link = document.querySelector("#linkBanner");
		link.href = this.link;
	}
}

var id = 0;

var slide1 = new Banner();
slide1.img = "foto1";
slide1.titulo = "Folder - campanha WTT Active";
slide1.link = "projetos-wtt.php";

var slide2 = new Banner();
slide2.img = "foto2";
slide2.titulo = "Projeto APP - Partiu Cultura";
slide2.link = "projetos-partiu-cultura.php";

var slide3 = new Banner();
slide3.img = "foto3";
slide3.titulo = "Site e-commerce - Quem Dá Menos";
slide3.link = "projetos-quem-da-menos.php";

var meusBanners = [slide1, slide2, slide3];

window.onload = function(){
	meusBanners[id].exibir();
}



var anterior = document.querySelector("#anterior");
var proximo = document.querySelector("#proximo");

function prevBanner(){
	if(id == 0) id = meusBanners.length -1;
	else id--;
	meusBanners[id].exibir();
}

function nextBanner(){
	if(id >= meusBanners.length - 1) id = 0;
	else id++;
	
	meusBanners[id].exibir();
}

anterior.addEventListener("click", prevBanner);
proximo.addEventListener("click", nextBanner);
