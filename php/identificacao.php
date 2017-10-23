<?php
	define( 'MYSQL_HOST', '10.16.90.76' );
	define( 'MYSQL_USER', 'fonos' );
	define( 'MYSQL_PASSWORD', 'mabs008' );
	define( 'MYSQL_DB_NAME', 'fono' );

	$myvar = json_decode($_GET['data'], true);
	$zero = 0;

	$myvar[2] = explode('/', $myvar[2]);     // transforma em array
	$myvar[2] = array_reverse($myvar[2]); // inverte posicoes do array
	$myvar[2] = implode('-', $myvar[2]);     // transforma em string novamente

	try{
		$PDO = new PDO( 'mysql:host=' . MYSQL_HOST . ';dbname=' . MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD );
	}catch (PDOException $e){
		$return = array();
		$return["success"] = false; 
		echo json_encode($return);
		exit;
	}

	if($myvar[4] == 1){
		$sql = "SELECT * FROM `identificacao` WHERE `cpf_1_1` = '{$myvar[5]}'";
		$result = $PDO->query( $sql );
		$rows = $result->fetch( PDO::FETCH_ASSOC );
		
		if(!$rows){
			$sql = "INSERT INTO identificacao(`nome_1_0`, `sexo_1_0`, `dt_1_1`, `ec_1_1`, `cpf_1_1`, `masp_1_1`) 
				VALUES (:nome , :sexo, :dt, :ec, :cpf, :masp)";
			$stmt = $PDO->prepare( $sql );
			$stmt->bindParam( ':nome', $myvar[0] );
			$stmt->bindParam( ':sexo', $myvar[1] );
			$stmt->bindParam( ':dt', $myvar[2] );
			$stmt->bindParam( ':ec', $myvar[3] );
			$stmt->bindParam( ':cpf', $myvar[5] );
			$stmt->bindParam( ':masp', $zero );

			$result = $stmt->execute();
			
			if ( ! $result ){
				$return = array();
				$return["success"] = false; 
				echo json_encode($return);
		    	exit;
			}

			$id = $PDO->lastInsertId();

			$return = array();
			$return["success"] = true; 
			$return["id"] = $id;
			echo json_encode($return);
			exit;					
		}else{
			$sql = "UPDATE identificacao SET `nome_1_0` = :nome, `sexo_1_0` = :sexo, `dt_1_1` = :dt, `ec_1_1` = :ec
			WHERE `cpf_1_1` = '{$myvar[5]}'";
			$stmt = $PDO->prepare( $sql );
			$stmt->bindParam( ':nome', $myvar[0] );
			$stmt->bindParam( ':sexo', $myvar[1] );
			$stmt->bindParam( ':dt', $myvar[2] );
			$stmt->bindParam( ':ec', $myvar[3] );
			$result = $stmt->execute();

			if ( ! $result ){
				$return = array();
				$return["success"] = false; 
				echo json_encode($return);
		    	exit;
			}	

			$return = array();
			$return["success"] = true; 
			$return["id"] = $rows["id_pessoa"];
			echo json_encode($return);
			exit;
		}
	}



	if($myvar[4] == 2){
		$sql = "SELECT * FROM `identificacao` WHERE `masp_1_1` = '{$myvar[5]}'";
		$result = $PDO->query( $sql );
		$rows = $result->fetch( PDO::FETCH_ASSOC );
		
		if(!$rows){
			$sql = "INSERT INTO identificacao(`nome_1_0`, `sexo_1_0`, `dt_1_1`, `ec_1_1`, `cpf_1_1`, `masp_1_1`) 
				VALUES (:nome , :sexo, :dt, :ec, :cpf, :masp)";
			$stmt = $PDO->prepare( $sql );
			$stmt->bindParam( ':nome', $myvar[0] );
			$stmt->bindParam( ':sexo', $myvar[1] );
			$stmt->bindParam( ':dt', $myvar[2] );
			$stmt->bindParam( ':ec', $myvar[3] );
			$stmt->bindParam( ':cpf', $zero );
			$stmt->bindParam( ':masp', $myvar[5] );

			$result = $stmt->execute();
			
			if ( ! $result ){
				$return = array();
				$return["success"] = false; 
				echo json_encode($return);
		    	exit;
			}

			$id = $PDO->lastInsertId();

			$return = array();
			$return["success"] = true; 
			$return["id"] = $id;
			echo json_encode($return);
			exit;					
		}else{
			$sql = "UPDATE identificacao SET `nome_1_0` = :nome, `sexo_1_0` = :sexo, `dt_1_1` = :dt, `ec_1_1` = :ec
			WHERE `masp_1_1` = '{$myvar[5]}'";
			$stmt = $PDO->prepare( $sql );
			$stmt->bindParam( ':nome', $myvar[0] );
			$stmt->bindParam( ':sexo', $myvar[1] );
			$stmt->bindParam( ':dt', $myvar[2] );
			$stmt->bindParam( ':ec', $myvar[3] );
			$result = $stmt->execute();

			if ( ! $result ){
				$return = array();
				$return["success"] = false; 
				echo json_encode($return);
		    	exit;
			}	

			$return = array();
			$return["success"] = true; 
			$return["id"] = $rows["id_pessoa"];
			echo json_encode($return);
			exit;
		}
	}
?>