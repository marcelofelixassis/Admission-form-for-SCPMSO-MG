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
    
    $sql = "INSERT INTO `pendentes`(`fk_parecer_fon`, `cb_mdp_10_0`, `cb_cfo_10_1`, `dt_10_2`) 
    VALUES ([value-1],[value-2],[value-3],[value-4],[value-5])"
    
    $stmt = $PDO->prepare( $sql );
    
	$stmt->bindParam( ':fkfinalidade', $myvar[39] );
	$stmt->bindParam( ':exa', $myvar[0] );
	$stmt->bindParam( ':dexa', $myvar[1] );
	$stmt->bindParam( ':crm', $myvar[2] );
	$stmt->bindParam( ':tipg', $myvar[3] );
    $stmt->bindParam( ':loea', $myvar[4] );

    $stmt->bindParam( ':cb_agl', $myvar[6] );
    
    $stmt->bindParam( ':prv', $myvar[5] );
    
    $stmt->bindParam( ':agpv', $myvar[7] );
    
	$stmt->bindParam( ':ede', $myvar[8] );
	$stmt->bindParam( ':cb_ede0', $myvar[9] );
    $stmt->bindParam( ':cd_ede1', $myvar[10] );
    
	$stmt->bindParam( ':hip', $myvar[11] );
	$stmt->bindParam( ':cb_hip0', $myvar[12] );
    $stmt->bindParam( ':cb_hip1', $myvar[13] );
    $stmt->bindParam( ':cb_hip2', $myvar[14] );

    $stmt->bindParam( ':ava', $myvar[15] );
    $stmt->bindParam( ':cb_ava0', $myvar[16] );
    $stmt->bindParam( ':cb_ava1', $myvar[17] );
    $stmt->bindParam( ':cb_ava2', $myvar[18] );

    $stmt->bindParam( ':bli', $myvar[19] );

    $stmt->bindParam( ':ibi', $myvar[20] );
    $stmt->bindParam( ':cb_ibi0', $myvar[21] );
    $stmt->bindParam( ':cb_ibi1', $myvar[22] );

    $stmt->bindParam( ':iud', $myvar[23] );
    $stmt->bindParam( ':cb_iud0', $myvar[24] );
    $stmt->bindParam( ':cb_iud1', $myvar[25] );

    $stmt->bindParam( ':iue', $myvar[26] );
    $stmt->bindParam( ':cb_iue0', $myvar[27] );
    $stmt->bindParam( ':cb_iue1', $myvar[28] );

    $stmt->bindParam( ':rco', $myvar[29] );

    $stmt->bindParam( ':dep', $myvar[30] );
    $stmt->bindParam( ':cb_dep0', $myvar[31] );
    $stmt->bindParam( ':cb_dep1', $myvar[32] );

    $stmt->bindParam( ':hipe', $myvar[33] );

    $stmt->bindParam( ':cgl', $myvar[34] );
    $stmt->bindParam( ':cb_cgl0', $myvar[35] );
    $stmt->bindParam( ':cb_cgl1', $myvar[36] );

    $stmt->bindParam( ':mmo', $myvar[37] );
    $stmt->bindParam( ':cb_mmo0', $myvar[38] );
   

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