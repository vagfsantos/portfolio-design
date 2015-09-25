// Faz banner das páginas funcionarem
// autor Vagner Santos

var SETA_DIREITA = 39;
var SETA_ESQUERDA = 37;

var divSlide = document.querySelectorAll(".slide-projetos");
var areaMouseOver = divSlide[0];
var mouseAtivo = false;


// direcao do clique
var direita = 1;

// lista das imagens da pagina
var lista = document.querySelector("#slide-cabecalho"); 
var itens = lista.children;

// marcando a primeira imagem da página
itens[0].classList.add("ativo");

// contando quantidade de imagens e imagem atual
var numeroImagens = itens.length;
var imagemAtual = 1;

// Trocando as imagens pelas setas do teclado
function trocar(e){
	if(e == SETA_DIREITA)trocarProximo();
	if(e == SETA_ESQUERDA) trocarAnterior();
}


// Trocando a imagem para proxima
function trocarProximo(){
	if(mouseAtivo) return; // se mouse esta dentro do slide NAO MUDE
	
	var ativo = document.getElementsByClassName("ativo");
	
	// "SE" > for a ultima imagem volte para a primeira, "SENAO" > vá para a proxima img
	if(imagemAtual >= numeroImagens){
		itens[0].classList.add("ativo");
		itens[numeroImagens -1].classList.toggle("ativo");
		imagemAtual = 1;
	} else{
		var proximo = ativo[0].nextElementSibling;
		ativo[0].classList.toggle("ativo");
		proximo.classList.toggle("ativo");
		imagemAtual++;
	}
}


// Trocando a imagem para anterior
function trocarAnterior(){
	var ativo = document.getElementsByClassName("ativo");
	
	// "SE" > for a primeira imagem vá para a ultima, "SENAO" > Volte para a anterior
	if(imagemAtual <= 1){
		itens[numeroImagens -1].classList.add("ativo");
		itens[0].classList.toggle("ativo");
		imagemAtual = numeroImagens;
	} else{
		var anterior = ativo[0].previousElementSibling;
		ativo[0].classList.toggle("ativo");
		anterior.classList.toggle("ativo");
		imagemAtual--;
	}
}

// Definindo botoes de entrada e ativando as funcoes
var anterior = document.getElementById("setaAnterior");
var proximo = document.getElementById("setaProximo");

anterior.addEventListener("click", trocarProximo);
proximo.addEventListener("click", trocarAnterior);

// se mouse esta dentro do slide NAO MUDE
areaMouseOver.addEventListener("mouseover", function(){
	mouseAtivo = true;
});
areaMouseOver.addEventListener("mouseout", function(){
	mouseAtivo = false;
});

//recebendo setas do teclado
window.addEventListener("keydown", function(e){
	if(e.keyCode == SETA_DIREITA) trocarProximo();
	if(e.keyCode == SETA_ESQUERDA) trocarAnterior();
});

// contagem para troca de banner
var contagem = setInterval(trocarProximo, 5000);