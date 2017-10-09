<?php
	define( 'MYSQL_HOST', '10.16.90.76' );
	define( 'MYSQL_USER', 'fonos' );
	define( 'MYSQL_PASSWORD', 'mabs008' );
	define( 'MYSQL_DB_NAME', 'fono' );

	$myvar = json_decode($_GET['data'], true);
	
	try{
		$PDO = new PDO( 'mysql:host=' . MYSQL_HOST . ';dbname=' . MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD );
	}catch (PDOException $e){
		$return = array();
		$return["success"] = false; 
		echo json_encode($return);
		exit;
	}

	$sql = "INSERT INTO cargos_anteriores(`fk_complementares`, `numero`, `est`, `peri`) 
	VALUES (:fkcomplementares, :numero, :est, :peri)";

	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':fkcomplementares', $myvar[2] );
	$stmt->bindParam( ':numero', $myvar[3] );
	$stmt->bindParam( ':est', $myvar[0] );
	$stmt->bindParam( ':peri', $myvar[1] );
		
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