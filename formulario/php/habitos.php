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

	$sql = "INSERT INTO habitos(`fk_finalidade`, `taba_5_0`, `hqt_5_0`, `qcd_5_0`, `extaba_5_1`, `fpqt_5_1`, `phqt_5_1`, `dril_5_2`, `cb_dril_5_2`, `otr_5_2`, `etil_5_3`, `cb_qtb_5_3`, `qaf_5_3`, `ohvi_5_4`, `cb_ohvi_5_4`) 
	VALUES (:fkfinalidade, :taba, :hqt, :qcd, :extaba, :fpqt, :phqt, :dril, :cb_dril, :otr, :etil, :cb_qtb, :qaf, :ohvi, :cb_ohvi)";

	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':fkfinalidade', $myvar[14] );
	$stmt->bindParam( ':taba', $myvar[0] );
	$stmt->bindParam( ':hqt', $myvar[1] );
	$stmt->bindParam( ':qcd', $myvar[2] );
	$stmt->bindParam( ':extaba', $myvar[3] );
	$stmt->bindParam( ':fpqt', $myvar[4] );
	$stmt->bindParam( ':phqt', $myvar[5] );
	$stmt->bindParam( ':dril', $myvar[6] );
	$stmt->bindParam( ':cb_dril', $myvar[11] );
	$stmt->bindParam( ':otr', $myvar[7] );
	$stmt->bindParam( ':etil', $myvar[8] );
	$stmt->bindParam( ':cb_qtb', $myvar[12] );
	$stmt->bindParam( ':qaf', $myvar[9] );
	$stmt->bindParam( ':ohvi', $myvar[10] );
	$stmt->bindParam( ':cb_ohvi', $myvar[13] );

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