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

	$sql = "INSERT INTO avaliacao_perceptivo(`fk_finalidade`, `qev_7_0`, `gda_7_0`, `ggdd_7_1`, `spr_7_1`, `tns_7_1`, `rug_7_1`, `ast_7_1`, `inst_7_1`, `cpfe_7_2`, `cpfd_7_2`, `atve_7_3`, `atvd_7_3`, `pit_7_4`, `lns_7_4`, `rnc_7_5`, `tlg_7_5`, `rcv_7_6`, `tmdf_7_7`, `a_7_8`, `cb_a_7_8`, `i_7_8`, `cb_i_7_8`, `u_7_8`, `cb_u_7_8`, `tmdf_7_9`, `s_7_10`, `z_7_10`, `rsz_7_10`, `rst_7_11`, `flu_7_12`, `vel_7_13`, `art_7_14`, `dist_7_15`, `aud_7_16`) 
	VALUES (:fkfinalidade, :qev, :gda, :ggdd, :spr, :tns, :rug, :ast, :inst, :cpfe, :cpfd, :atve, :atvd, :pit, :lns, :rnc, :tlg, :rcv, :tmdf, :a, :cb_a, :i, :cb_i, :u, :cb_u, :tmdf2, :s, :z, :rsz, :rst, :flu, :vel, :art, :dist, :aud)";

	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':fkfinalidade', $myvar[27] );
	$stmt->bindParam( ':qev', $myvar[0] );
	$stmt->bindParam( ':gda', $myvar[1] );
	$stmt->bindParam( ':ggdd', $myvar[25][0] );
	$stmt->bindParam( ':spr', $myvar[25][2] );
	$stmt->bindParam( ':tns', $myvar[25][4] );
	$stmt->bindParam( ':rug', $myvar[25][1] );
	$stmt->bindParam( ':ast', $myvar[25][3] );
	$stmt->bindParam( ':inst', $myvar[25][5] );
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
	$stmt->bindParam( ':cb_a', $myvar[26][0] );
	$stmt->bindParam( ':i', $myvar[13] );
	$stmt->bindParam( ':cb_i', $myvar[26][1] );
	$stmt->bindParam( ':u', $myvar[14] );
	$stmt->bindParam( ':cb_u', $myvar[26][2] );
	$stmt->bindParam( ':tmdf2', $myvar[15] );
	$stmt->bindParam( ':s', $myvar[16] );
	$stmt->bindParam( ':z', $myvar[17] );
	$stmt->bindParam( ':rsz', $myvar[18] );
	$stmt->bindParam( ':rst', $myvar[19] );
	$stmt->bindParam( ':flu', $myvar[20] );
	$stmt->bindParam( ':vel', $myvar[21] );
	$stmt->bindParam( ':art', $myvar[22] );
	$stmt->bindParam( ':dist', $myvar[23] );
	$stmt->bindParam( ':aud', $myvar[24] );
	
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

