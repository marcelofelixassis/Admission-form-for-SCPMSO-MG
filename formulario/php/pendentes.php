<?php
	define( 'MYSQL_HOST', '10.16.90.76' );
	define( 'MYSQL_USER', 'fonos' );
	define( 'MYSQL_PASSWORD', 'mabs008' );
	define( 'MYSQL_DB_NAME', 'fono' );

    $myvar = json_decode($_GET['data'], true);
    
    $myvar[0] = explode('/', $myvar[0]);    // transforma em array
	$myvar[0] = array_reverse($myvar[0]); 	// inverte posicoes do array
	$myvar[0] = implode('-', $myvar[0]);   	// transforma em string novamente
	
	try{
		$PDO = new PDO( 'mysql:host=' . MYSQL_HOST . ';dbname=' . MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD );
	}catch (PDOException $e){
		$return = array();
		$return["success"] = false; 
		echo json_encode($return);
		exit;
    }
    
    $sql = "INSERT INTO `pendentes`(`fk_parecer_fon`, `cb_mdp_10_0`, `cb_cfo_10_1`, `exs_10_2`, `dt_10_2`) 
    VALUES (:fkparecerfon, :cbmdp, :cbcfo, :exs, :dt)";
    
    $stmt = $PDO->prepare( $sql );
    
	$stmt->bindParam( ':fkparecerfon', $myvar[4] );
	$stmt->bindParam( ':cbmdp', $myvar[2] );
	$stmt->bindParam( ':cbcfo', $myvar[3] );
	$stmt->bindParam( ':exs', $myvar[0] );
	$stmt->bindParam( ':dt', $myvar[1] );
	
	$result = $stmt->execute();
		
	if ( ! $result ){
		$return = array();
		$return["success"] = false; 
		echo json_encode($return);
	    exit;
	}
	
	$sql = "UPDATE `finalidade`SET `state` = 'PENDENTE' WHERE id_finalidade = :id";
	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':id', $myvar[5] );
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