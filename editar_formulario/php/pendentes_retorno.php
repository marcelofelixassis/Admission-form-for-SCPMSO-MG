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
    
    $sql = "INSERT INTO `pendentes_retorno`(`fk_parecer_fon_retorno`, `cb_mdp`, `cb_cfo`, `exs`, `dt`, `obs_pendente_retorno`) 
    VALUES (:fkparecerfonretorno, :cbmdp, :cbcfo, :exs, :dt, :obs)";
    
    $stmt = $PDO->prepare( $sql );
    
	$stmt->bindParam( ':fkparecerfonretorno', $myvar[5] );
	$stmt->bindParam( ':cbmdp', $myvar[2] );
	$stmt->bindParam( ':cbcfo', $myvar[3] );
	$stmt->bindParam( ':exs', $myvar[0] );
	$stmt->bindParam( ':dt', $myvar[1] );
	$stmt->bindParam( ':obs', $myvar[4] );
	
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