<?php
	define( 'MYSQL_HOST', '10.16.90.76' );
	define( 'MYSQL_USER', 'fonos' );
	define( 'MYSQL_PASSWORD', 'mabs008' );
	define( 'MYSQL_DB_NAME', 'fono' );

    $myvar = json_decode($_GET['data'], true);
    
    $myvar[1] = explode('/', $myvar[1]);    // transforma em array
	$myvar[1] = array_reverse($myvar[1]); 	// inverte posicoes do array
	$myvar[1] = implode('-', $myvar[1]);   	// transforma em string novamente
	
	try{
		$PDO = new PDO( 'mysql:host=' . MYSQL_HOST . ';dbname=' . MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD );
	}catch (PDOException $e){
		$return = array();
		$return["success"] = false; 
		echo json_encode($return);
		exit;
	}

	$sql = "INSERT INTO `parecer_fon`(`fk_finalidade`, `exa_9_0`, `dexa_9_0`, `mnome_9_0`, `crm_9_0`, `tipg_9_1`, `loea_9_1`, 
    `cb_agl_9_2`, `prv_9_3`, `agpv_9_4`, `ede_9_5`, `cb_ede_9_5_0`, `cb_ede_9_5_1`, `hip_9_6`, `cb_hip_9_6_0`, 
    `cb_hip_9_6_1`, `cb_hip_9_6_2`, `ava_9_7`, `cb_ava_9_7_0`, `cb_ava_9_7_1`, `cb_ava_9_7_2`, `bli_9_8`, `ibi_9_9`, 
    `cb_ibi_9_9_0`, `cb_ibi_9_9_1`, `iud_9_10`, `cb_iud_9_10_0`, `cb_iud_9_10_1`, `iue_9_11`, `cb_iue_9_11_0`, 
    `cb_iue_9_11_1`, `rco_9_12`, `dep_9_13`, `cb_dep_9_13_0`, `cb_dep_9_13_1`, `hipe_9_14`, `cgl_9_15`, `cb_cgl_9_15_0`, 
    `cb_cgl_9_15_1`, `mmo_9_16`, `cb_mmo_9_16_0`) 
    VALUES(:fkfinalidade, :exa, :dexa, :mnome, :crm, :tipg, :loea, :cb_agl, :prv, :agpv, :ede, :cb_ede0, :cd_ede1, :hip, :cb_hip0,
    :cb_hip1, :cb_hip2, :ava, :cb_ava0, :cb_ava1, :cb_ava2, :bli, :ibi, :cb_ibi0, :cb_ibi1, :iud, :cb_iud0, :cb_iud1, :iue,
    :cb_iue0, :cb_iue1, :rco, :dep, :cb_dep0, :cb_dep1, :hipe, :cgl, :cb_cgl0, :cb_cgl1, :mmo, :cb_mmo0)";
    
    $stmt = $PDO->prepare( $sql );
    
	$stmt->bindParam( ':fkfinalidade', $myvar[40] );
	$stmt->bindParam( ':exa', $myvar[0] );
	$stmt->bindParam( ':dexa', $myvar[1] );
    $stmt->bindParam( ':mnome', $myvar[2] );
	$stmt->bindParam( ':crm', $myvar[3] );
	$stmt->bindParam( ':tipg', $myvar[4] );
    $stmt->bindParam( ':loea', $myvar[5] );

    $stmt->bindParam( ':cb_agl', $myvar[7] );
    
    $stmt->bindParam( ':prv', $myvar[6] );
    
    $stmt->bindParam( ':agpv', $myvar[8] );
    
	$stmt->bindParam( ':ede', $myvar[9] );
	$stmt->bindParam( ':cb_ede0', $myvar[10] );
    $stmt->bindParam( ':cd_ede1', $myvar[11] );
    
	$stmt->bindParam( ':hip', $myvar[12] );
	$stmt->bindParam( ':cb_hip0', $myvar[13] );
    $stmt->bindParam( ':cb_hip1', $myvar[14] );
    $stmt->bindParam( ':cb_hip2', $myvar[15] );

    $stmt->bindParam( ':ava', $myvar[16] );
    $stmt->bindParam( ':cb_ava0', $myvar[17] );
    $stmt->bindParam( ':cb_ava1', $myvar[18] );
    $stmt->bindParam( ':cb_ava2', $myvar[19] );

    $stmt->bindParam( ':bli', $myvar[20] );

    $stmt->bindParam( ':ibi', $myvar[21] );
    $stmt->bindParam( ':cb_ibi0', $myvar[22] );
    $stmt->bindParam( ':cb_ibi1', $myvar[23] );

    $stmt->bindParam( ':iud', $myvar[24] );
    $stmt->bindParam( ':cb_iud0', $myvar[25] );
    $stmt->bindParam( ':cb_iud1', $myvar[26] );

    $stmt->bindParam( ':iue', $myvar[27] );
    $stmt->bindParam( ':cb_iue0', $myvar[28] );
    $stmt->bindParam( ':cb_iue1', $myvar[29] );

    $stmt->bindParam( ':rco', $myvar[30] );

    $stmt->bindParam( ':dep', $myvar[31] );
    $stmt->bindParam( ':cb_dep0', $myvar[32] );
    $stmt->bindParam( ':cb_dep1', $myvar[33] );

    $stmt->bindParam( ':hipe', $myvar[34] );

    $stmt->bindParam( ':cgl', $myvar[35] );
    $stmt->bindParam( ':cb_cgl0', $myvar[36] );
    $stmt->bindParam( ':cb_cgl1', $myvar[37] );

    $stmt->bindParam( ':mmo', $myvar[38] );
    $stmt->bindParam( ':cb_mmo0', $myvar[39] );
   

	$result = $stmt->execute();
		
	if ( ! $result ){
		$return = array();
		$return["success"] = false; 
		echo json_encode($return);
	    exit;
    }
    
    $id = $PDO->lastInsertId();//pega o id da inserção

	$return = array();
    $return["success"] = true; 
    $return["id"] = $id;//retorna o id da inserção para ser usado nas proximas fases
	echo json_encode($return);
	exit;					
?>