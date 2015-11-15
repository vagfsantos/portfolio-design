<?php incluirCSS("pagina-projetos");?>
</head>
<body>
			
			

<figure>
	<div class="slide-projetos">
		
		<!-- Banner - imagens - slideshow -->
		<ul id="slide-cabecalho">
			<?php slideProjeto("design", "partiu-cultura", 8)?>
		</ul>

		<!-- Setas controladoras -->
		<div id="controladores-img">
			<p id="setaProximo" class="setas">&#xe094</p>
			<p id="setaAnterior" class="setas">&#xe095</p>
		</div>
	</div>
		
	<figcaption>
		<div>
			<h1>Partiu Cultura</h1>
			<p>Projeto acadêmico realizado em grupo. A proposta era criar um tipo de serviço com o tema <strong>Mobilidade</strong>, e seguindo as diretrizes apresentadas nasce o partiu cultura, um aplicativo gamificado que incentiva os jovens a consumirem mais cultura de modo geral.</p>
		</div>
	</figcaption>
</figure>

<?php incluirJS("slide-projetos");?>