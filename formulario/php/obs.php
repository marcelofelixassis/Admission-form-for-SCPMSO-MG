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

	$sql = "INSERT INTO obs(`fk_finalidade`, `obs_finalidade`, `obs_complementares`, `obs_saude_geral`, `obs_habitos`, `obs_saude_vocal`, `obs_avaliacao_percep`, `obs_avaliacao_especto`, `obs_parecer_fon`, `obs_conclcuido`, `obs_pendente`) 
	VALUES (:fkfinalidade, :finalidade, :complementares, :saude_geral, :habitos, :saude_vocal, :avaliacao_perceptivo, :avaliacao_especto, :parecer_fon, :conclcuido, :pendente)";


	$stmt = $PDO->prepare( $sql );
	$stmt->bindParam( ':fkfinalidade', $myvar[10] );
	$stmt->bindParam( ':finalidade', $myvar[0] );
	$stmt->bindParam( ':complementares', $myvar[1] );
	$stmt->bindParam( ':saude_geral', $myvar[2] );
	$stmt->bindParam( ':habitos', $myvar[3] );
	$stmt->bindParam( ':saude_vocal', $myvar[4] );
	$stmt->bindParam( ':avaliacao_perceptivo', $myvar[5] );
	$stmt->bindParam( ':avaliacao_especto', $myvar[6] );
	$stmt->bindParam( ':parecer_fon', $myvar[7] );
	$stmt->bindParam( ':conclcuido', $myvar[9] );
	$stmt->bindParam( ':pendente', $myvar[8] );
	
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