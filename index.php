<!Doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-widht, initial-scale=1">

		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>

		<link rel="stylesheet" href="./formulario/css/bootstrap.css">
		<link rel="stylesheet" href="./painel.css">
	</head>

	<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand title" href="http://10.16.90.76">PROTOCOLO DE AVALIAÇÃO FONOAUDIOLÓGICA PERIÓDICA DA VOZ DO PROFESSOR</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a href="http://10.16.90.76/formulario">
        <button type="button" class="btn btn-primary" >
          <span class="glyphicon glyphicon-plus"></span> Novo Formulário
        </button>
      </a>
      </ul>
        <div class="col-md-8" style="float: right;">
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-btn">
                <select class="btn" id="maspcpf">
                    <option value="1">CPF</option>
                    <option value="2">MASP</option>
                </select>
              </span>

              <input type="text" class="form-control" id="inp_buscar" maxlength="14" onkeypress="mascara(this,cpf)">
                  
              <span class="input-group-btn">
                <button class="btn btn-danger" type="button" onclick="buscar()">Buscar</button>
              </span>
            </div>
          </div>
        </div>
    </div>
  </nav>

   
    <div class="container">	
      
		  

      <table class="table table-active table-hover" style="margin-top: 10px;" id="tabela_ultimos_registros">
    		<thead>
      		<tr>
    				<th>Nome</th>
    				<th>CPF</th>
    				<th>MASP</th>
    				<th>Data</th>
    				<th>Estado</th>
    				<th>Ação</th>
  				</tr>
    		</thead>
    		<tbody></tbody>
  		</table>
    </div>
	</body>
  <script src="./formulario/js/jquery.js"></script>
  <script src="./formulario/js/bootstrap.min.js"></script>

  <!-- FUNÇÕES DE CONFIGURAÇÃO DO INDEX -->
  <script src="./js/scripts_painel/painel.js"></script>
</html>


