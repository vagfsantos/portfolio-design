function RequestAjax(link){
	this.link = link;
}

RequestAjax.prototype = {
	buscaConteudo: function(){
		var link = this.link;
		var xhr = new XMLHttpRequest();
		
		if(!xhr){ alert("ERROR!"); return false;}
		
		xhr.onreadystatechange = avisaUsuario;
		xhr.open("GET", link, true);
		xhr.send();
		
		
		function avisaUsuario(){
			if(xhr.readyState === 1){
				var content = document.querySelector("#content");
				content.classList.toggle("carregando");
			}
			
			if(xhr.readyState === 4){
				if(xhr.status === 200){
					carregaNaPagina(xhr.responseText);
				} else{
					alert("ERROR");
				}
			}
		}
	}
}


function chamaAJAX(url){
	var conteudo = new RequestAjax(url);
	conteudo.buscaConteudo();
};

// EVENTOS PÁGINAS ONCLICK AJAX
window.addEventListener("load", eventosAjax);

function eventosAjax(){
	var meusLinks = document.getElementsByClassName("btn-ajax");
	for(var i in meusLinks){
		meusLinks[i].onclick = quandoClick;
	}
}

function quandoClick(event){
	event.preventDefault();
	var link = this.href;
	chamaAJAX(link);
}

function carregaNaPagina(conteudo){
	var content = document.querySelector("#content");
	content.classList.toggle("carregando");
	content.innerHTML = conteudo;
}