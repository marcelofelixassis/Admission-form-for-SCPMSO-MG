<?php
	define( 'MYSQL_HOST', '10.16.90.76' );
	define( 'MYSQL_USER', 'fonos' );
	define( 'MYSQL_PASSWORD', 'mabs008' );
	define( 'MYSQL_DB_NAME', 'fono' );

    $myvar = json_decode($_GET['data'], true);
    
    $myvar[3] = explode('/', $myvar[3]);    // transforma em array
	$myvar[3] = array_reverse($myvar[3]); 	// inverte posicoes do array
	$myvar[3] = implode('-', $myvar[3]);   	// transforma em string novamente
	
	try{
		$PDO = new PDO( 'mysql:host=' . MYSQL_HOST . ';dbname=' . MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD );
	}catch (PDOException $e){
		$return = array();
		$return["success"] = false; 
		echo json_encode($return);
		exit;
    }
    
    $sql = "INSERT INTO `concluidos_retorno`(`fk_parecer_fon_retorno`, `cb_fnl_0`, `dias`, `com`, `cb_fnl_1`, `lcl`, `dt`, `obs_concluido_retorno`) 
    VALUES (:fkparecerfonretorno, :cbfnl0, :dias, :com, :cbfnl1, :lcl, :dt, :obs)";
    
    $stmt = $PDO->prepare( $sql );
    
	$stmt->bindParam( ':fkparecerfonretorno', $myvar[7] );
	$stmt->bindParam( ':cbfnl0', $myvar[4] );
	$stmt->bindParam( ':dias', $myvar[0] );
    $stmt->bindParam( ':com', $myvar[1] );
    $stmt->bindParam( ':cbfnl1', $myvar[5] );
    $stmt->bindParam( ':lcl', $myvar[2] );
    $stmt->bindParam( ':dt', $myvar[3] );
    $stmt->bindParam( ':obs', $myvar[6] );
	
	$result = $stmt->execute();
		
	if ( ! $result ){
		$return = array();
		$return["success"] = false; 
		echo json_encode($return);
	    exit;
	}
	
	$sql = "UPDATE `finalidade`SET `state` = 'CONCLUIDO' WHERE id_finalidade = :id";
	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':id', $myvar[8] );
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