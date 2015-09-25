
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
slide1.titulo = "Um banner ae irmao";
slide1.link = "paginas/design.html";

var slide2 = new Banner();
slide2.img = "foto2";
slide2.titulo = "Muydeisdjsiahdiuas";
slide2.link = "teste.php";

var meusBanners = [slide1, slide2];

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
