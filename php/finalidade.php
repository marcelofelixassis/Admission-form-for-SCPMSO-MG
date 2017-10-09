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

	$sql = "INSERT INTO finalidade(`fk_pessoa`, `dt2-0`, `apfd2-0`, `dias2-0`, `ad2-0`, `as2-1`, `ap2-1`) 
	VALUES (:fkpessoa , :dt, :apfd, :dias, :ad, :as2 , :ap)";

	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':fkpessoa', $myvar[6] );
	$stmt->bindParam( ':dt', $myvar[0] );
	$stmt->bindParam( ':apfd', $myvar[1] );
	$stmt->bindParam( ':dias', $myvar[2] );
	$stmt->bindParam( ':ad', $myvar[3] );
	$stmt->bindParam( ':as2', $myvar[4] );
	$stmt->bindParam( ':ap', $myvar[5] );
		
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