function Banner(){
	this.titulo = "";
	this.link = "";
}

Banner.prototype = {
	exibir:function(){
		var img = document.querySelector("#imagens-slide").children;
		var i = 0;
		for(i; i < img.length; i++){
			img[i].classList.remove("ativado");
		}

		img[id].classList.add("ativado");
		console.log(img);

		var title = document.querySelector("#titulo");
		title.textContent = this.titulo;
		
		var link = document.querySelector("#linkBanner");
		link.href = this.link;
	}
}

var id = 0;

var slide1 = new Banner();
slide1.titulo = "Folder - campanha WTT Active";
slide1.link = "projetos-wtt.php";

var slide2 = new Banner();
slide2.titulo = "Projeto APP - Partiu Cultura";
slide2.link = "projetos-partiu-cultura.php";

var slide3 = new Banner();
slide3.titulo = "Site e-commerce - Quem Dá Menos";
slide3.link = "projetos-quem-da-menos.php";

var meusBanners = [slide1, slide2, slide3];



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

function carregou(){
	meusBanners[id].exibir();
}

window.addEventListener("load", carregou);
