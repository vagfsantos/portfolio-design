<?php incluirCSS("pagina-projetos");?>
</head>
<body>
			
			

<figure>
	<div class="slide-projetos">
		<!-- Setas controladoras -->
		<div id="controladores-img">
			<p id="setaProximo" class="setas">&#xe094</p>
			<p id="setaAnterior" class="setas">&#xe095</p>
		</div>
		
		<!-- Banner - imagens - slideshow -->
		<ul id="slide-cabecalho">
			<?php slideProjeto("design", "folhetos", 6)?>
		</ul>
	</div>
		
	<figcaption>
		<div>
			<h1>Folhetos Promocionais</h1>
			<p>Folhetos promocionais criados para divulgar produtos e serviços de algumas empresas, respeitando sua identidade visual e utilizando recursos gráficos próprios de cada marca.
Com o intuito de serem distribuídos em feiras e eventos.</p>
		</div>
	</figcaption>
</figure>

<?php incluirJS("slide-projetos");?>