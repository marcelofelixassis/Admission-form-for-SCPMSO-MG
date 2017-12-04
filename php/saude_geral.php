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

	$sql = "INSERT INTO saude_geral(`fk_finalidade`, `dnsf_4_0`, `cb_dnsf_4_0`, `da_4_1`, `cb_da_4_1`, `dfl_4_2`, `cb_dfl_4_2`, 
	`doa_4_3`, `cb_doa_4_3`, `sdrg_4_4`, `cb_sdrg_4_4`, `oasg_4_5`, `cb_oasg_4_5`, `fudm_4_6`, `cb_fudm_4_6`, `ccag_4_7`, 
	`tire_4_8`) 
	VALUES (:fkfinalidade, :dnsf, :cb_dnsf, :da, :cb_da, :dfl, :cb_dfl, :doa, :cb_doa, :sdrg, :cb_sdrg, :oasg, :cb_oasg, :fudm, :cb_fudm, :ccag, :tire)";


	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':fkfinalidade', $myvar[16] );
	$stmt->bindParam( ':dnsf', $myvar[0] );
	$stmt->bindParam( ':cb_dnsf', $myvar[9] );
	$stmt->bindParam( ':da', $myvar[1] );
	$stmt->bindParam( ':cb_da', $myvar[10] );
	$stmt->bindParam( ':dfl', $myvar[2] );
	$stmt->bindParam( ':cb_dfl', $myvar[11] );
	$stmt->bindParam( ':doa', $myvar[3] );
	$stmt->bindParam( ':cb_doa', $myvar[12] );
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