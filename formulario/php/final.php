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
    
    $sql = "INSERT INTO `concluidos`(`fk_parecer_fon`, `cb_fnl_11_0`, `dias_11_1`, `com_11_1`, `cb_fnl_11_2`, `lcl_11_3`, `dt_11_3`) 
    VALUES (:fkparecerfon, :cbfnl, :dias, :com, :cbfnl2, :lcl, :dt)";
    
    $stmt = $PDO->prepare( $sql );
    
	$stmt->bindParam( ':fkparecerfon', $myvar[6] );
	$stmt->bindParam( ':cbfnl', $myvar[4] );
	$stmt->bindParam( ':dias', $myvar[0] );
    $stmt->bindParam( ':com', $myvar[1] );
    $stmt->bindParam( ':cbfnl2', $myvar[5] );
    $stmt->bindParam( ':lcl', $myvar[2] );
    $stmt->bindParam( ':dt', $myvar[3] );
	
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