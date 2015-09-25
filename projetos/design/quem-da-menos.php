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
			<?php slideProjeto("design", "quem-da-menos", 8)?>
		</ul>
	</div>
		
	<figcaption>
		<div>
			<h1>Quem dá menos</h1>
			<p>Projeto acadêmico realizado em dupla, a proposta era criar um modelo de negócios inovador, escalável e autosutentável.
O projeto funcinaria como uma plataforma de leilão reverso em grupo, onde o cliente registra uma solicitação e empresas do ramo dariam seus lances para realizar a venda.</p>
		</div>
	</figcaption>
</figure>

<?php incluirJS("slide-projetos");?>