<?php
	// Incluir fotos no slide das paginas de projeto
	function slideProjeto($categoria, $pasta, $quantidadeFotos){
		$qtd = $quantidadeFotos;
		
		for($i = 1; $i <= $qtd; $i++): ?>
			<li><img src="imagens/fotos/<?=$categoria?>/<?=$pasta?>/<?=$i?>.jpg"/></li>
		<?php endfor;
	} 
?>



<?php
	// Incluir arquivo javaScript na pagina
	function incluirJS($arquivo){ ?>
		<script src="js/<?=$arquivo?>.js" type="text/javascript"></script>
	<?php }
?>

<?php
	// Incluir arquivo CSS na pagina
	function incluirCSS($arquivo){ ?>
		<link href="css/<?=$arquivo?>.css" rel="stylesheet" type="text/css"/>
	<?php }
?>