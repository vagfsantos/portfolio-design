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
			<?php slideProjeto("design", "r-consultoria", 11)?>
		</ul>
	</div>
		
	<figcaption>
		<div>
			<h1>Projeto empresarial</h1>
			<p>Projeto criado para a empresa R-consultoria - Serviços de consultoria para pequenas empresas. Uma identidade visual como proposta, com seu logotipo representando os valores da empresa de forma limpa e sofisticada e materiais promocinais seguindo o mesmo conceito.</p>
		</div>
	</figcaption>
</figure>

<?php incluirJS("slide-projetos");?>