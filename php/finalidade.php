<?php
	define( 'MYSQL_HOST', '10.16.90.76' );
	define( 'MYSQL_USER', 'fonos' );
	define( 'MYSQL_PASSWORD', 'mabs008' );
	define( 'MYSQL_DB_NAME', 'fono' );

	$myvar = json_decode($_GET['data'], true);

	$myvar[0] = explode('/', $myvar[0]);     // transforma em array
	$myvar[0] = array_reverse($myvar[0]); // inverte posicoes do array
	$myvar[0] = implode('-', $myvar[0]);     // transforma em string novamente
	
	try{
		$PDO = new PDO( 'mysql:host=' . MYSQL_HOST . ';dbname=' . MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD );
	}catch (PDOException $e){
		$return = array();
		$return["success"] = false; 
		echo json_encode($return);
		exit;
	}

	$sql = "INSERT INTO finalidade(`fk_pessoa`, `dt_2_0`, `apfd_2_0`, `dias_2_0`, `ad_2_0`, `as_2_1`, `org_2_1`, `ap_2_1`) 
	VALUES (:fkpessoa , :dt, :apfd, :dias, :ad, :as2 , :org, :ap)";

	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':fkpessoa', $myvar[7] );
	$stmt->bindParam( ':dt', $myvar[0] );
	$stmt->bindParam( ':apfd', $myvar[1] );
	$stmt->bindParam( ':dias', $myvar[2] );
	$stmt->bindParam( ':ad', $myvar[3] );
	$stmt->bindParam( ':as2', $myvar[4] );
	$stmt->bindParam( ':org', $myvar[5] );
	$stmt->bindParam( ':ap', $myvar[6] );
		
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