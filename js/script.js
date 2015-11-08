window.onload=function(){
	var btn_menu = document.querySelector("#btn-menu");

	function menuMobile(){
		var menu = document.querySelector("#navbar");
		menu.classList.toggle('menu-ativo');
	}

	btn_menu.addEventListener("click", menuMobile);
}