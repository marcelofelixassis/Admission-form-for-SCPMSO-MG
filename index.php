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
    <div class="toolbar">
      <h3>PROTOCOLO DE AVALIAÇÃO FONOAUDIOLOGICA PERIODICA DA VOZ DO PROFESSOR</h3>
      <h4>SCMPSO/SEPLAG</h4>
    </div>
    <div class="container">	
      <a href="http://10.16.90.76/formulario">
			  <button type="button" class="btn btn-primary" style="margin-top: 10px;">
			    <span class="glyphicon glyphicon-plus"></span> Novo Formulário
			  </button>
			</a>
		  
  		<div class="col-md-4" style="float: right; margin-top: 10px;">
  			<div class="form-group">
    			<div class="input-group">
						<span class="input-group-btn">
    					<select class="btn" id="maspcpf">
      						<option value="1">CPF</option>
      						<option value="2">MASP</option>
    					</select>
      			</span>

      			<input type="text" class="form-control" id="inp_buscar">
      					
        		<span class="input-group-btn">
        			<button class="btn btn-primary" type="button" onclick="buscar()">Buscar</button>
      			</span>
    			</div>
  			</div>
  		</div>


      <table class="table table-dark table-hover" style="margin-top: 10px;" id="tabela_ultimos_registros">
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


