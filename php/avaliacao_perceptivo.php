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

	$sql = "INSERT INTO cargos_anteriores(`fk_finalidade`, `qev_7_0`, `gda_7_0`, `ggdd_7_1`, `spr_7_1`, `tns_7_1`, `rug_7_1`, `ast_7_1`, `inst_7_1`, `cpfe_7_2`, `cpfd_7_2`, `atve_7_3`, `atvd_7_3`, `pit_7_4`, `lns_7_4`, `rnc_7_5`, `tlg_7_5`, `rcv_7_7`, `tmdf_7_9`, `a_7_10`, `cb_a_7_10`, `i_7_10`, `cb_i_7_10`, `u_7_10`, `cb_u_7_10`, `s_7_11`, `z_7_11`, `rsz_7_11`, `laf_7_13`, `vel_7_13`, `art_7_13`, `aud_7_14`) 
	VALUES (:fkcomplementares, :numero, :est, :peri)";

	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':fkfinalidade', $myvar[] );
	$stmt->bindParam( ':qev', $myvar[] );
	$stmt->bindParam( ':gda', $myvar[] );
	$stmt->bindParam( ':ggdd', $myvar[] );
	$stmt->bindParam( ':spr', $myvar[] );
	$stmt->bindParam( ':tns', $myvar[] );
	$stmt->bindParam( ':rug', $myvar[] );
	$stmt->bindParam( ':ast', $myvar[] );
	$stmt->bindParam( ':inst', $myvar[] );
	$stmt->bindParam( ':cpfe', $myvar[] );
	$stmt->bindParam( ':cpfd', $myvar[] );
	$stmt->bindParam( ':atve', $myvar[] );
	$stmt->bindParam( ':atvd', $myvar[] );
	$stmt->bindParam( ':pit', $myvar[] );
	$stmt->bindParam( ':lns', $myvar[] );
	$stmt->bindParam( ':rnc', $myvar[] );
	$stmt->bindParam( ':tlg', $myvar[] );
	$stmt->bindParam( ':rsz', $myvar[] );
	$stmt->bindParam( ':ggdd', $myvar[] );
	$stmt->bindParam( ':ggdd', $myvar[] );
	$stmt->bindParam( ':ggdd', $myvar[] );

		
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

