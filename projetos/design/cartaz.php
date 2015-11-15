<?php incluirCSS("pagina-projetos");?>
</head>
<body>
	<div id="loading" class="carregando"></div>	
<figure>
	<div class="slide-projetos">
		
		<!-- Banner - imagens - slideshow -->
		<ul id="slide-cabecalho">
			<?php slideProjeto("design", "cartaz", 12)?>
		</ul>

		<!-- Setas controladoras -->
		<div id="controladores-img">
			<p id="setaProximo" class="setas">&#xe094</p>
			<p id="setaAnterior" class="setas">&#xe095</p>
		</div>
	</div>
		
	<figcaption>
		<div>
			<h1>Cartazes Institucionais</h1>
			<p>Cartazes comemorativos e informativos, criados para diversas empresas para serem divulgados internamente. 
Neles são utilizados a identidade visual de cada empresa, levando em conta o briefing e as sugestões dos clientes.</p>
		</div>
	</figcaption>
</figure>

<?php incluirJS("slide-projetos");?>