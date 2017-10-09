<?php
	define( 'MYSQL_HOST', '10.16.90.76' );
	define( 'MYSQL_USER', 'fonos' );
	define( 'MYSQL_PASSWORD', 'mabs008' );
	define( 'MYSQL_DB_NAME', 'fono' );

	$myvar = json_decode($_GET['data'], true);

	$myvar[8] = explode('/', $myvar[8]);     // transforma em array
	$myvar[8] = array_reverse($myvar[8]); // inverte posicoes do array
	$myvar[8] = implode('-', $myvar[8]);     // transforma em string novamente

	$myvar[9] = explode('/', $myvar[9]);     // transforma em array
	$myvar[9] = array_reverse($myvar[9]); // inverte posicoes do array
	$myvar[9] = implode('-', $myvar[9]);     // transforma em string novamente
	
	try{
		$PDO = new PDO( 'mysql:host=' . MYSQL_HOST . ';dbname=' . MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD );
	}catch (PDOException $e){
		$return = array();
		$return["success"] = false; 
		echo json_encode($return);
		exit;
	}

	$sql = "INSERT INTO cargos_atuais(`fk_complementares`, `numero`, `est`, `efet`, `tdr`, `ad`, `ap`, `as`, `ndl`, `nddda`, `idpl`, `tdpl`, `jtlp`) 
	VALUES (:fkcomplementares , :numero, :est, :efet, :tdr, :ad , :ap, :ass, :ndl, :nddda, :idpl, :tdpl, :jtlp)";

	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':fkcomplementares', $myvar[11] );
	$stmt->bindParam( ':numero', $myvar[12] );
	$stmt->bindParam( ':est', $myvar[0] );
	$stmt->bindParam( ':efet', $myvar[1] );
	$stmt->bindParam( ':tdr', $myvar[2] );
	$stmt->bindParam( ':ad', $myvar[3] );
	$stmt->bindParam( ':ap', $myvar[4] );
	$stmt->bindParam( ':ass', $myvar[5] );
	$stmt->bindParam( ':ndl', $myvar[6] );
	$stmt->bindParam( ':nddda', $myvar[7] );
	$stmt->bindParam( ':idpl', $myvar[8] );
	$stmt->bindParam( ':tdpl', $myvar[9] );
	$stmt->bindParam( ':jtlp', $myvar[10] );
		
	$result = $stmt->execute();
		
	if ( ! $result ){
		$return = array();
		$return["success"] = false; 
		echo json_encode($return);
	    exit;
	}

	$return = array();
	$return["success"] = true; 
	echo json_encode($return);
	exit;					
?>