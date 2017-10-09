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

	$sql = "INSERT INTO saude_geral(`fk_finalidade`, `dfl4-0`, `cb_dfl4-0`, `doa4-1`, `cb_doa4-1`, `da4-2`, `cb_da4-2`,
	 `dnsf4-3`, `cb_dnsf4-3`, `sdrg4-4`, `cb_sdrg4-4`, `oasg4-5`, `cb_oasg4-5`, `fudm4-6`, `cb_fudm4-6`, `ccag4-7`, `tire4-8`) 
	VALUES (:fkfinalidade, :dfl, :cb_dfl, :doa, :cb_doa, :da, :cb_da, :dnsf, :cb_dnsf, :sdrg, :cb_sdrg, :oasg, :cb_oasg, :fudm, :cb_fudm, :ccag, :tire)";

	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':fkfinalidade', $myvar[16] );
	$stmt->bindParam( ':dfl', $myvar[0] );
	$stmt->bindParam( ':cb_dfl', $myvar[9] );
	$stmt->bindParam( ':doa', $myvar[1] );
	$stmt->bindParam( ':cb_doa', $myvar[10] );
	$stmt->bindParam( ':da', $myvar[2] );
	$stmt->bindParam( ':cb_da', $myvar[11] );
	$stmt->bindParam( ':dnsf', $myvar[3] );
	$stmt->bindParam( ':cb_dnsf', $myvar[12] );
	$stmt->bindParam( ':sdrg', $myvar[4] );
	$stmt->bindParam( ':cb_sdrg', $myvar[13] );
	$stmt->bindParam( ':oasg', $myvar[5] );
	$stmt->bindParam( ':cb_oasg', $myvar[14] );
	$stmt->bindParam( ':fudm', $myvar[6] );
	$stmt->bindParam( ':cb_fudm', $myvar[15] );
	$stmt->bindParam( ':ccag', $myvar[7] );
	$stmt->bindParam( ':tire', $myvar[8] );

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