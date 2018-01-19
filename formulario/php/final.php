<?php
	define( 'MYSQL_HOST', '10.16.90.76' );
	define( 'MYSQL_USER', 'fonos' );
	define( 'MYSQL_PASSWORD', 'mabs008' );
	define( 'MYSQL_DB_NAME', 'fono' );

    $myvar = json_decode($_GET['data'], true);
    
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
    
    $sql = "INSERT INTO `concluidos`(`fk_parecer_fon`, `cb_fnl_11_0`, `dias_11_1`, `cb_fnl_11_2`, `lcl_11_3`, `dt_11_3`) 
    VALUES (:fkparecerfon, :cbfnl, :dias, :cbfnl2, :lcl, :dt)";
    
    $stmt = $PDO->prepare( $sql );
    
	$stmt->bindParam( ':fkparecerfon', $myvar[5] );
	$stmt->bindParam( ':cbfnl', $myvar[3] );
	$stmt->bindParam( ':dias', $myvar[0] );
    $stmt->bindParam( ':cbfnl2', $myvar[4] );
    $stmt->bindParam( ':lcl', $myvar[1] );
    $stmt->bindParam( ':dt', $myvar[2] );
	
	$result = $stmt->execute();
		
	if ( ! $result ){
		$return = array();
		$return["success"] = false; 
		echo json_encode($return);
	    exit;
	}
	
	$sql = "UPDATE `finalidade`SET `state` = 'CONCLUIDO' WHERE id_finalidade = :id";
	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':id', $myvar[6] );
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