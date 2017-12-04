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

	$sql = "INSERT INTO complementares(`fk_finalidade`, `pqccp_3_0`, `jacp_3_4`, `oada_3_9`, `cb_oada_3_9`, `oadu_3_10`, `cb_oadu_3_10`) 
	VALUES (:fkpessoa , :pqccp, :jacp, :oada , :cb_oada, :oadu, :cb_oadu)";

	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':fkpessoa', $myvar[6] );
	$stmt->bindParam( ':pqccp', $myvar[0] );
	$stmt->bindParam( ':jacp', $myvar[1] );
	$stmt->bindParam( ':oada', $myvar[2] );
	$stmt->bindParam( ':cb_oada', $myvar[4] );
	$stmt->bindParam( ':oadu', $myvar[3] );
	$stmt->bindParam( ':cb_oadu', $myvar[5] );
	
		
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