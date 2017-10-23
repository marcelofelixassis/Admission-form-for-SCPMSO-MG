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

	$sql = "INSERT INTO avaliacao_perceptivo(`fk_finalidade`, `qev_7_0`, `gda_7_0`, `ggdd_7_1`, `spr_7_1`, `tns_7_1`, `rug_7_1`, `ast_7_1`, `inst_7_1`, `cpfe_7_2`, `cpfd_7_2`, `atve_7_3`, `atvd_7_3`, `pit_7_4`, `lns_7_4`, `rnc_7_5`, `tlg_7_5`, `rcv_7_7`, `tmdf_7_9`, `a_7_10`, `cb_a_7_10`, `i_7_10`, `cb_i_7_10`, `u_7_10`, `cb_u_7_10`, `s_7_11`, `z_7_11`, `rsz_7_11`, `laf_7_13`, `vel_7_13`, `art_7_13`, `aud_7_14`) 
	VALUES (:fkfinalidade, :qev, :gda, :ggdd, :spr, :tns, :rug, :ast, :inst, :cpfe, :cpfd, :atve, :atvd, :pit, :lns, :rnc, :tlg, :rcv, :tmdf, :a, :cb_a, :i, :cb_i, :u, :cb_u, :s, :z, :rsz, :laf, :vel, :art, :aud)";

	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':fkfinalidade', $myvar[24] );
	$stmt->bindParam( ':qev', $myvar[0] );
	$stmt->bindParam( ':gda', $myvar[1] );
	$stmt->bindParam( ':ggdd', $myvar[22][0] );
	$stmt->bindParam( ':spr', $myvar[22][2] );
	$stmt->bindParam( ':tns', $myvar[22][4] );
	$stmt->bindParam( ':rug', $myvar[22][1] );
	$stmt->bindParam( ':ast', $myvar[22][3] );
	$stmt->bindParam( ':inst', $myvar[22][5] );
	$stmt->bindParam( ':cpfe', $myvar[2] );
	$stmt->bindParam( ':cpfd', $myvar[3] );
	$stmt->bindParam( ':atve', $myvar[4] );
	$stmt->bindParam( ':atvd', $myvar[5] );
	$stmt->bindParam( ':pit', $myvar[6] );
	$stmt->bindParam( ':lns', $myvar[7] );
	$stmt->bindParam( ':rnc', $myvar[8] );
	$stmt->bindParam( ':tlg', $myvar[9] );
	$stmt->bindParam( ':rcv', $myvar[10] );
	$stmt->bindParam( ':tmdf', $myvar[11] );
	$stmt->bindParam( ':a', $myvar[12] );
	$stmt->bindParam( ':cb_a', $myvar[23][0] );
	$stmt->bindParam( ':i', $myvar[13] );
	$stmt->bindParam( ':cb_i', $myvar[23][1] );
	$stmt->bindParam( ':u', $myvar[14] );
	$stmt->bindParam( ':cb_u', $myvar[23][2] );
	$stmt->bindParam( ':s', $myvar[15] );
	$stmt->bindParam( ':z', $myvar[16] );
	$stmt->bindParam( ':rsz', $myvar[17] );
	$stmt->bindParam( ':laf', $myvar[18] );
	$stmt->bindParam( ':vel', $myvar[19] );
	$stmt->bindParam( ':art', $myvar[20] );
	$stmt->bindParam( ':aud', $myvar[21] );
	
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

