<?php incluirCSS("contato"); ?>
<?php incluirCSS("responsivo");?>
	</head>
		<body>

		<header id="header_contato" class="categoria_header">
			<div class="thumbnail-secao">
				<img class="thumbnail-icon" src="imagens/fotos/design/_capa/thumbnail-01.svg"/>
			</div>
			<h1>Contato</h1>
			<a id="volta_home" class="setas" href="index.php">&#xe094</a>
		</header>

					
		<!-- SOBRE -->			
		<section class="contato">
			<h1>Envie sua mensagem</h1>
			<br/>
			<form action="#" method="post">
				<p>Nome:</p>
				<input class="formulario" type="text" name="nome" placeholder="Digite seu nome" />

				<p>E-mail:</p>
				<input class="formulario" type="email" name="email" placeholder="Digite seu e-mail" />

				<p>Mensagem:</p>
				<textarea class="formulario" name="mensagem" rows="10" placeholder="Deixe sua mensagem" max="500"></textarea>
				<input class="formulario botao botao-form" type="submit" name="email" placeholder="Seu e-mail" />
			</form>

		</section>