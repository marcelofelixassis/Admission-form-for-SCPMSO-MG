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

	$sql = "INSERT INTO saude_vocal(`fk_finalidade`, `sinp6-0`, `cb_sinp6-0`, `spqt6-2`, `cfmp6-2`, `pslc6-3`, `qnd6-3`,
	 `cb_pslc6-4`, `etfo6-5`, `ndse6-5`, `frse6-6`, `fdfo6-6`, `tfjr6-7`, `qnd6-7`, `alfa6-8`, `crvc6-10`, `qnd6-10`,
	 `fudm6-12`, `hqnt6-12`, `oqmd6-12`) 
	VALUES (:fkfinalidade, :sinp, :cb_sinp, :spqt, :cfmp, :pslc, :qnd, :cb_pslc, :etfo, :ndse, :frse, :fdfo, :tfjr, :qnd1,
	 :alfa, :crvc, :qnd2, :fudm, :hqnt, :oqmd)";

	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':fkfinalidade', $myvar[19] );
	$stmt->bindParam( ':sinp', $myvar[0] );
	$stmt->bindParam( ':cb_sinp', $myvar[17] );
	$stmt->bindParam( ':spqt', $myvar[1] );
	$stmt->bindParam( ':cfmp', $myvar[2] );
	$stmt->bindParam( ':pslc', $myvar[3] );
	$stmt->bindParam( ':qnd', $myvar[4] );
	$stmt->bindParam( ':cb_pslc', $myvar[18] );
	$stmt->bindParam( ':etfo', $myvar[5] );
	$stmt->bindParam( ':ndse', $myvar[6] );
	$stmt->bindParam( ':frse', $myvar[7] );
	$stmt->bindParam( ':fdfo', $myvar[8] );
	$stmt->bindParam( ':tfjr', $myvar[9] );
	$stmt->bindParam( ':qnd1', $myvar[10] );
	$stmt->bindParam( ':alfa', $myvar[11] );
	$stmt->bindParam( ':crvc', $myvar[12] );
	$stmt->bindParam( ':qnd2', $myvar[13] );
	$stmt->bindParam( ':fudm', $myvar[14] );
	$stmt->bindParam( ':hqnt', $myvar[15] );
	$stmt->bindParam( ':oqmd', $myvar[16] );

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