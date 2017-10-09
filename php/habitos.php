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

	$sql = "INSERT INTO habitos(`fk_finalidade`, `taba5-0`, `hqt5-0`, `qcd5-0`, `extaba5-1`, `fpqt5-1`, `phqt5-1`, `dril5-2`,
	 `cb_dril5-2`, `otr5-2`, `etil5-3`, `qtb5-3`, `qaf5-3`, `ohvi5-4`) 
	VALUES (:fkfinalidade, :taba, :hqt, :qcd, :extaba, :fpqt, :phqt, :dril, :cb_dril, :otr, :etil, :qtb, :qaf, :ohvi)";

	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':fkfinalidade', $myvar[13] );
	$stmt->bindParam( ':taba', $myvar[0] );
	$stmt->bindParam( ':hqt', $myvar[1] );
	$stmt->bindParam( ':qcd', $myvar[2] );
	$stmt->bindParam( ':extaba', $myvar[3] );
	$stmt->bindParam( ':fpqt', $myvar[4] );
	$stmt->bindParam( ':phqt', $myvar[5] );
	$stmt->bindParam( ':dril', $myvar[6] );
	$stmt->bindParam( ':cb_dril', $myvar[12] );
	$stmt->bindParam( ':otr', $myvar[7] );
	$stmt->bindParam( ':etil', $myvar[8] );
	$stmt->bindParam( ':qtb', $myvar[9] );
	$stmt->bindParam( ':qaf', $myvar[10] );
	$stmt->bindParam( ':ohvi', $myvar[11] );

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