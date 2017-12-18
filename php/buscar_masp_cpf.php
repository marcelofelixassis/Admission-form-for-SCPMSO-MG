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
    
    switch ($_GET["type"]) {
        //MASP
        case '2':
            $sql = "SELECT fi.id_finalidade, id.id_pessoa, id.nome_1_0, id.cpf_1_1, id.masp_1_1, fi.dt_2_0, fi.state FROM finalidade AS fi INNER JOIN identificacao AS id ON fi.fk_pessoa = id.id_pessoa WHERE id.masp_1_1 = '$number'";
            $result = $PDO->query( $sql );
            $rows = $result->fetchAll( PDO::FETCH_ASSOC );

            if ( ! $result ){
                $return = array();
                $return["success"] = false; 
                echo json_encode($return);
                exit;
            }

            $return = array();
            $return["success"] = true; 
            $return["data"] = $rows;
            echo json_encode($return);
            exit;
        break;
        
        //CPF
        default:
            $sql = "SELECT fi.id_finalidade, id.id_pessoa, id.nome_1_0, id.cpf_1_1, id.masp_1_1, fi.dt_2_0, fi.state FROM finalidade AS fi INNER JOIN identificacao AS id ON fi.fk_pessoa = id.id_pessoa WHERE  id.cpf_1_1 = '$number'";
            $result = $PDO->query( $sql );
            $rows = $result->fetchAll( PDO::FETCH_ASSOC );

            if ( ! $result ){
                $return = array();
                $return["success"] = false; 
                echo json_encode($return);
                exit;
            }

            $return = array();
            $return["success"] = true; 
            $return["data"] = $rows;
            echo json_encode($return);
            exit;
        break;
    }
					
?>

