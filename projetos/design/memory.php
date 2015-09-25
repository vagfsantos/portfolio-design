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
			<?php slideProjeto("design", "memory", 8)?>
		</ul>
	</div>
		
	<figcaption>
		<div>
			<h1>Tipografia Experimental</h1>
			<p>Tipografia criada de forma acadêmica como um experimento artístico e livre. A proposta era mergulhar em um determinado tema e propor uma tipografia que a representasse de maneira totalmente livre e abstrata. Neste caso o tema foi <strong>Hardware</strong></p>
		</div>
	</figcaption>
</figure>

<?php incluirJS("slide-projetos");?>