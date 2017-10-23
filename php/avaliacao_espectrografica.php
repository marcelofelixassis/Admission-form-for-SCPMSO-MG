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

	$sql = "INSERT INTO avaliacao_espectrografica(`fk_finalidade`, `sfu_8_0`, `fdf_8_1`, `qdf_8_1`, `rui_8_1`, `qds_8_1`, `fdi_8_1`, `sbh_8_1`, `avb_8_1`, `avs_8_1`) VALUES (:fkfinalidade, :sfu, :fdf, :dqf, :rui, :qds, :fdi, :sbh, :avb, :avs)";

	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':fkfinalidade', $myvar[2] );
	$stmt->bindParam( ':sfu', $myvar[0] );
	$stmt->bindParam( ':fdf', $myvar[1][0] );
	$stmt->bindParam( ':dqf', $myvar[1][1] );
	$stmt->bindParam( ':rui', $myvar[1][2] );
	$stmt->bindParam( ':qds', $myvar[1][3] );
	$stmt->bindParam( ':fdi', $myvar[1][4] );
	$stmt->bindParam( ':sbh', $myvar[1][5] );
	$stmt->bindParam( ':avb', $myvar[1][6] );
	$stmt->bindParam( ':avs', $myvar[1][7] );
	
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

