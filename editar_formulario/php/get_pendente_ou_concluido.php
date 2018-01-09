<?php
	define( 'MYSQL_HOST', '10.16.90.76' );
	define( 'MYSQL_USER', 'fonos' );
	define( 'MYSQL_PASSWORD', 'mabs008' );
    define( 'MYSQL_DB_NAME', 'fono' );
    
    $number = $_GET["number"];
	
	try{
		$PDO = new PDO( 'mysql:host=' . MYSQL_HOST . ';dbname=' . MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD );
	}catch (PDOException $e){
		$return = array();
		$return["success"] = false; 
		echo json_encode($return);
		exit;
	}

    $sql = "SELECT pe.* FROM pendentes AS pe WHERE pe.fk_parecer_fon = '$number'";
    $result = $PDO->query( $sql );
    $rows = $result->fetchAll( PDO::FETCH_ASSOC );

    if ( ! $result ){
		$return = array();
		$return["success"] = false; 
		echo json_encode($return);
	    exit;
	}

	if ( ! $rows ){
        $sql = "SELECT co.* FROM concluidos AS co WHERE co.fk_parecer_fon = '$number'";
        $result = $PDO->query( $sql );
        $rows = $result->fetchAll( PDO::FETCH_ASSOC );

        if ( ! $result ){
            $return = array();
            $return["success"] = false;  
            echo json_encode($return);
            exit;
        }

        if ( ! $rows ) {
            $return = array();
            $return["success"] = false;  
            echo json_encode($return);
            exit;
        }

        $return = array();
        $return["success"] = true; 
        $return["tipo"] = "concluido";
        $return["data"] = $rows;
        echo json_encode($return);
        exit;	
    
	}else {
        $return = array();
        $return["success"] = true; 
        $return["tipo"] = "pendente";
        $return["data"] = $rows;
        echo json_encode($return);
        exit;	
    }					
?>