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

	$sql = "INSERT INTO saude_vocal(`fk_finalidade`, `sinp_6_0`, `cb_sinp_6_1`, `spqt_6_2`, `cfmp_6_2`, `pslc_6_3`, `qnd_6_3`, `cb_pslc_6_4`, `alfa_6_5`, `tfjr_6_6`, `qnd_6_6`, `alfa_6_7`, `etfo_6_8`, `ndse_6_8`, `frse_6_9`, 
	`fdfo_6_9`, `lfea_6_10`, `crvc_6_11`, `qnd_6_11`, `fudm_6_12`, `hqnt_6_12`, `oqmd_6_12`) 
	VALUES (:fkfinalidade, :sinp, :cb_sinp, :spqt, :cfmp, :pslc, :qnd, :cb_pslc, :alfa, :tfjr, :qnd2, :alfa2, :etfo, :ndse, :frse, :fdfo, :lfea, :crvc, :qnd3, :fudm, :hqnt, :oqmd)";

	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':fkfinalidade', $myvar[21] );
	$stmt->bindParam( ':sinp', $myvar[0] );
	$stmt->bindParam( ':cb_sinp', $myvar[19] );
	$stmt->bindParam( ':spqt', $myvar[1] );
	$stmt->bindParam( ':cfmp', $myvar[2] );
	$stmt->bindParam( ':pslc', $myvar[3] );
	$stmt->bindParam( ':qnd', $myvar[4] );
	$stmt->bindParam( ':cb_pslc', $myvar[20] );
	$stmt->bindParam( ':alfa', $myvar[5] );
	$stmt->bindParam( ':tfjr', $myvar[6] );
	$stmt->bindParam( ':qnd2', $myvar[7] );
	$stmt->bindParam( ':alfa2', $myvar[8] );
	$stmt->bindParam( ':etfo', $myvar[9] );
	$stmt->bindParam( ':ndse', $myvar[10] );
	$stmt->bindParam( ':frse', $myvar[11] );
	$stmt->bindParam( ':fdfo', $myvar[12] );
	$stmt->bindParam( ':lfea', $myvar[13] );
	$stmt->bindParam( ':crvc', $myvar[14] );
	$stmt->bindParam( ':qnd3', $myvar[15] );

	$stmt->bindParam( ':fudm', $myvar[16] );
	$stmt->bindParam( ':hqnt', $myvar[17] );
	$stmt->bindParam( ':oqmd', $myvar[18] );

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