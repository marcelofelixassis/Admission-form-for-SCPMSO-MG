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

	$sql = "INSERT INTO complementares(`fk_finalidade`, `pqccp3-0`, `jacp3-4`, `oadu3-9`, `cb_oadu3-9`, `oada3-10`, `cb_oada3-10`) 
	VALUES (:fkpessoa , :pqccp, :jacp, :oadu, :cb_oadu, :oada , :cb_oada)";

	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':fkpessoa', $myvar[6] );
	$stmt->bindParam( ':pqccp', $myvar[0] );
	$stmt->bindParam( ':jacp', $myvar[1] );
	$stmt->bindParam( ':oadu', $myvar[2] );
	$stmt->bindParam( ':cb_oadu', $myvar[4] );
	$stmt->bindParam( ':oada', $myvar[3] );
	$stmt->bindParam( ':cb_oada', $myvar[5] );
		
	$result = $stmt->execute();
		
	if ( ! $result ){
		$return = array();
		$return["success"] = false; 
		echo json_encode($return);
	    exit;
	}

	$id = $PDO->lastInsertId();

	$return = array();
	$return["success"] = true; 
	$return["id"] = $id;
	echo json_encode($return);
	exit;					
?>