<?php
	define( 'MYSQL_HOST', '10.16.90.76' );
	define( 'MYSQL_USER', 'fonos' );
	define( 'MYSQL_PASSWORD', 'mabs008' );
	define( 'MYSQL_DB_NAME', 'fono' );

    $myvar = json_decode($_GET['data'], true);

    $myvar[0] = explode('/', $myvar[0]);    // transforma em array
    $myvar[0] = array_reverse($myvar[0]);   // inverte posicoes do array
    $myvar[0] = implode('-', $myvar[0]);    // transforma em string novamente
    
    $myvar[2] = explode('/', $myvar[2]);    // transforma em array
	$myvar[2] = array_reverse($myvar[2]); 	// inverte posicoes do array
	$myvar[2] = implode('-', $myvar[2]);   	// transforma em string novamente
	
	try{
		$PDO = new PDO( 'mysql:host=' . MYSQL_HOST . ';dbname=' . MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD );
	}catch (PDOException $e){
		$return = array();
		$return["success"] = false; 
		echo json_encode($return);
		exit;
	}

	$sql = "INSERT INTO `parecer_fon_retorno`(`fk_finalidade`, `epe`, `exa`, `dexa`, `mnome`, `crm`, `tipg`, `loea`, `cb_agl_9_2`, `prv`, `agpv`, `ede`, `cb_ede_0`, `cb_ede_1`, `hip`, `cb_hip_0`, `cb_hip_1`, `cb_hip_2`, `ava`, `cb_ava_0`, `cb_ava_1`, `cb_ava_2`, `bli`, `ibi`, `cb_ibi_0`, `cb_ibi_1`, `iud`, `cb_iud_0`, `cb_iud_1`, `iue`, `cb_iue_0`, `cb_iue_1`, `rco`, `dep`, `cb_dep_0`, `cb_dep_1`, `hipe`, `cgl`, `cb_cgl_0`, `cb_cgl_1`, `mmo`, `cb_mmo_0`, `obs_parecer_fon_retorno`) 
    VALUES(:fkfinalidade, :epe, :exa, :dexa, :mnome, :crm, :tipg, :loea, :cb_agl, :prv, :agpv, :ede, :cb_ede0, :cd_ede1, :hip, :cb_hip0,
    :cb_hip1, :cb_hip2, :ava, :cb_ava0, :cb_ava1, :cb_ava2, :bli, :ibi, :cb_ibi0, :cb_ibi1, :iud, :cb_iud0, :cb_iud1, :iue,
    :cb_iue0, :cb_iue1, :rco, :dep, :cb_dep0, :cb_dep1, :hipe, :cgl, :cb_cgl0, :cb_cgl1, :mmo, :cb_mmo0, :obs_parecer_fon_retorno)";
    
    $stmt = $PDO->prepare( $sql );
    
	$stmt->bindParam( ':fkfinalidade', $myvar[42] );
    $stmt->bindParam( ':epe', $myvar[0] );
	$stmt->bindParam( ':exa', $myvar[1] );
	$stmt->bindParam( ':dexa', $myvar[2] );
    $stmt->bindParam( ':mnome', $myvar[3] );
	$stmt->bindParam( ':crm', $myvar[4] );
	$stmt->bindParam( ':tipg', $myvar[5] );
    $stmt->bindParam( ':loea', $myvar[6] );

    $stmt->bindParam( ':cb_agl', $myvar[8] );
    
    $stmt->bindParam( ':prv', $myvar[7] );
    
    $stmt->bindParam( ':agpv', $myvar[9] );
    
	$stmt->bindParam( ':ede', $myvar[10] );
	$stmt->bindParam( ':cb_ede0', $myvar[11] );
    $stmt->bindParam( ':cd_ede1', $myvar[12] );
    
	$stmt->bindParam( ':hip', $myvar[13] );
	$stmt->bindParam( ':cb_hip0', $myvar[14] );
    $stmt->bindParam( ':cb_hip1', $myvar[15] );
    $stmt->bindParam( ':cb_hip2', $myvar[16] );

    $stmt->bindParam( ':ava', $myvar[17] );
    $stmt->bindParam( ':cb_ava0', $myvar[18] );
    $stmt->bindParam( ':cb_ava1', $myvar[19] );
    $stmt->bindParam( ':cb_ava2', $myvar[20] );

    $stmt->bindParam( ':bli', $myvar[21] );

    $stmt->bindParam( ':ibi', $myvar[22] );
    $stmt->bindParam( ':cb_ibi0', $myvar[23] );
    $stmt->bindParam( ':cb_ibi1', $myvar[24] );

    $stmt->bindParam( ':iud', $myvar[25] );
    $stmt->bindParam( ':cb_iud0', $myvar[26] );
    $stmt->bindParam( ':cb_iud1', $myvar[27] );

    $stmt->bindParam( ':iue', $myvar[28] );
    $stmt->bindParam( ':cb_iue0', $myvar[29] );
    $stmt->bindParam( ':cb_iue1', $myvar[30] );

    $stmt->bindParam( ':rco', $myvar[31] );

    $stmt->bindParam( ':dep', $myvar[32] );
    $stmt->bindParam( ':cb_dep0', $myvar[33] );
    $stmt->bindParam( ':cb_dep1', $myvar[34] );

    $stmt->bindParam( ':hipe', $myvar[35] );

    $stmt->bindParam( ':cgl', $myvar[36] );
    $stmt->bindParam( ':cb_cgl0', $myvar[37] );
    $stmt->bindParam( ':cb_cgl1', $myvar[38] );

    $stmt->bindParam( ':mmo', $myvar[39] );
    $stmt->bindParam( ':cb_mmo0', $myvar[40] );
    $stmt->bindParam( ':obs_parecer_fon_retorno', $myvar[41] );
    
   

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