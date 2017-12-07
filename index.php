<!Doctype html>
<html>
	<head>
		<title> PROTOCOLO DE AVALIAÇÃO FONOAUDIOLOGICA PERIODICA DA VOZ DO PROFESSOR - SCMPSO/SEPLAG </title>

		<meta charset="utf-8">
		<meta name="viewport" content="width=device-widht, initial-scale=1">

		<link rel="stylesheet" href="css/bootstrap.css">
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/loading.css">
		<link rel="stylesheet" href="css/jquery.datetimepicker.css">
	</head>

	<body>
		<!--######################################################################################################################
		##################################################      SESSAO 1     #####################################################
		##########################################################################################################################
		##########################################################################################################################-->

		<!-- INICIO CABEÇALHO -->
		<img src="imagens/cabecalho1.png" class="col-md-10 cabecalho col-md-offset-1">






		<!-- NAME = SESSAO1 || LINHA 1.0 (NOME_1_0, SEXO_1_0)-->
		<div class="row col-md-10 col-md-offset-1">
	  	<div class="col-md-10 col-md-print-1">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">NOME:</span>
	  			<input type="text" class="form-control" aria-describedby="basic-addon1" name="sessao1" style="text-transform: uppercase;">
	    	</div><!-- /input-group -->
	  	</div><!-- /.col-md-10 /// col-md-print-1 -->
	  	<div class="col-md-2 col-md-print-2 col-md-print-offset-1">
	    	<div class="input-group input-group-sm">
	    		<span class="input-group-addon" id="basic-addon">SEXO:</span>  
	    		<div class="form-group form-group-sm">
		      	<select class="form-control" name="sessao1">
		        	<option value="1">F</option>
		        	<option value="2">M</option>
		      	</select>
	      	</div>
	    	</div><!-- /input-group -->
	  	</div><!-- /.col-md-2 /// col-md-print-2 /// col-md-print-offset-1 -->
		</div><!-- /.row -->






		<!-- LINHA 1.1 (DT_1_1, EC_1_1, CPF_1_1, MASP_1_1)-->
		<div class="row col-md-10 col-md-offset-1">
	  	<div class="col-md-3 col-md-print-3">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">DATA NASCIMENTO:</span>
	  			<input type='text' class="form-control date" name="sessao1" />
	    	</div><!-- /input-group -->
	  	</div><!-- /.col-md-3 /// col-md-print-3 -->
	  	<div class="col-md-4 col-md-offset-1 col-md-print-4 col-md-print-offset-3">
	    	<div class="input-group input-group-sm">
	    		<span class="input-group-addon" id="basic-addon">ESTADO CIVIL:</span>  
	    		<span class="input-group-btn">
		      	<select class="btn" name="sessao1">
		      		<option value="">SELECIONE...</option>
		        	<option value="1">SOLTEIRO</option>
		        	<option value="2">CASADO/UNIÃO ESTÁVEL</option>
		        	<option value="3">VIÚVO</option>
		        	<option value="4">SEPARADO/DIVORCIADO</option>
		      	</select>
		      </span>
	    	</div><!-- /input-group -->
	  	</div><!-- /col-md-4 col-md-offset-1 /// col-md-print-4 col-md-print-offset-3-->
	  	<div class="col-md-3 col-md-offset-1 col-md-print-offset-3">
	  		<div class="input-group input-group-sm input-group">
	  			<span class="input-group-btn">
        		<select class="btn cinza" name="sessao1" id="cpfmasp">
          		<option value="1">CPF:</option>
          		<option value="2">MASP:</option>
        		</select>
      		</span>
      		<input type="text" class="form-control" maxlength="14" onkeypress="mascara(this,cpf)" name="sessao1">
	  		</div><!-- /input-group -->         
	  	</div><!-- /col-md-3 col-md-offset-1 /// col-md-print-offset-3 -->
		</div><!-- /.row -->






		<!-- LINHA 1.2 (DT_2_0)    INSERIDO NA TABELA DE FINALIDADES-->
	  <div class="row col-md-10 col-md-offset-1">
	  	<div class="col-md-2 col-md-print-6">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">DATA:</span>
	  			<input type='text' class="form-control date" name="sessao2"/>
	    	</div><!-- /input-group -->
	  	</div><!-- /col-md-2 /// col-md-print-3 -->
	  	<div class="col-md-9 col-md-offset-1 col-md-print-5">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">ASSINATURA DO(A) PERICIANDO(A):</span>
	  			<input type='text' class="form-control" disabled="true" />
	    	</div><!-- /input-group -->
	  	</div><!-- /col-md-9 col-md-offset-1 /// col-md-print-5 col-md-print-offset-2 -->
		</div><!-- /.row -->
		



		

		<!--######################################################################################################################
		##################################################      SESSAO 2     #####################################################
		##########################################################################################################################
		##########################################################################################################################-->

		<!-- INICIO CABEÇALHO -->
		<img src="imagens/cabecalho2.png" class="col-md-10 col-md-offset-1">
		

		

	

		<!--LINHA 2.0 (APFD_2_0, DIAS_2_0, AD_2_0)-->
		<div class="row col-md-10 col-md-offset-1">
	  	<div class="col-md-4">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">ADMISSIONAL PARA FINS DE:</span>
	      	<span class="input-group-btn">
	        	<select class="btn" onblur="onblur_apfd20()" id="apfd2-0" name="sessao2">
	        		<option id="setselect2-1" value="">SELECIONE...</option>
				  		<option value="1">NOMEAÇAO EM CONCURSO PÚBLICO</option>
				  		<option value="2">DESIGNAÇÃO</option>
				  		<option value="3">RECURSO</option>
				  		<option value="4">RETORNO</option>
				  		<option value="5">REAVALIAÇÃO</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	  	</div><!-- /.col-md-4 -->
	  	<div class="col-md-2 col-md-offset-19 col-md-print-7 col-md-print-offset-4" id="visible_apfd2-0" style="visibility: hidden;">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">DIAS:</span>
	  			<input type='text' class="form-control" maxlength="3" id="dias2-0" name="sessao2"/>
	    	</div><!-- /input-group -->
	  	</div><!-- /col-md-2 col-md-offset-19 /// col-md-print-7 col-md-print-offset-4 -->
		  <div class="col-md-2 col-md-offset-1 col-md-print-offset-5">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">AULAS DE:</span>
	      	<span class="input-group-btn">
	        	<select class="btn" name="sessao2">
	        		<option id="setselect2-2" value="">SELECIONE...</option>
							<option value="1">REGENTE DE TURMA</option>
							<option value="2">PORTUGUÊS</option>
			        <option value="3">MATEMÁTICA</option>
			        <option value="4">QUÍMICA</option>
              <option value="5">FÍSICA</option>
			        <option value="6">LÍNGUA ESTRANGEIRA</option>
			        <option value="7">EDUCAÇÃO FÍSICA</option>
              <option value="8">HISTÓRIA</option>
			        <option value="9">ARTES</option>
			        <option value="10">ENSINO RELIGIOSO</option>
              <option value="11">GEOGRAFIA</option>
			        <option value="12">CIÊNCIAS/BIOLOGIA</option>
			        <option value="13">FILOSOFIA</option>
              <option value="14">SOCIOLOGIA</option>
			        <option value="15">OUTRA</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	  	</div><!-- /col-md-2 col-md-offset-1 /// col-md-print-offset-5 -->
		</div><!-- /.row -->






		<!--LINHA 2.1 (AS_2_1, ORG_2_1)-->
		<div class="row col-md-10 col-md-offset-1">
	  	<div class="col-md-4">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">AULAS SEMANAIS:</span>
	      	<span class="input-group-btn">
	        	<select class="btn" name="sessao2">
	        		<option id="setselect2-3" value="">SELECIONE...</option>
							<option value="1">ATÉ 5 AULAS/SEMANAIS</option>
	  					<option value="2">DE 6 A 10 AULAS/SEMANAIS </option>
	  					<option value="3">DE 11 A 20 AULAS/SEMANAIS</option>
	  					<option value="4">MAIS DE 20 AULAS/SEMANAIS</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	  	</div><!-- /.col-md-4 -->
	  	<div class="col-md-2 col-md-offset-45 col-md-print-offset-26">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">ÓRGÃO:</span>
	      	<span class="input-group-btn">
	        	<select class="btn" name="sessao2">
	        		<option id="setselect2-4" value="">SELECIONE...</option>
							<option value="1">SEE</option>
	  					<option value="2">UNIMONTES</option>
	  					<option value="3">UEMG</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	  	</div><!-- /col-md-2 col-md-offset-45 /// col-md-print-offset-26 -->
		</div><!-- /.row -->






		<!--LINHA 2.2 (AP_2_2)-->
		<div class="row row col-md-10 col-md-offset-1"> 
			<div class="col-md-3">
	  		<div class="input-group input-group-sm">
	  			<span class="input-group-addon">AULAS PARA:</span>
	    		<span class="input-group-addon" style="line-height: 0;">
	      		<label class="ap2-1"><input type="checkbox" class="vogaisinp" value="1" name="2-2cb"> INICIAIS DO ENSINO FUNDAMENTAL</label>
	    		</span>
	        <span class="input-group-addon" style="line-height: 0;">
	        	<label class="ap2-1"><input type="checkbox" class="vogaisinp" value="2" name="2-2cb"> FINAIS DO ENSINO FUNDAMENTAL</label>
	    		</span> 
	    		<span class="input-group-addon" style="line-height: 0;">
	      		<label class="ap2-1"><input type="checkbox" class="vogaisinp" value="3" name="2-2cb"> ENSINO MÉDIO</label>
	    		</span>
	        <span class="input-group-addon" style="line-height: 0;">
	        	<label class="ap2-1"><input type="checkbox" class="vogaisinp" value="4" name="2-2cb"> ENSINO SUPERIOR</label>
	    		</span> 
	  		</div>
			</div><!-- /.col-md-3 -->
			<!--(BUTTON DE COLLAPSE PARA OBSERVAÇÕES NÃO SERAM INCLUSOS NA ANÁLISE DE DADOS, NAO SERÁ INCLUSO NA DOCUMENTAÇÃO)-->
			<div class="col-md-1 col-md-offset-20">
	  		<button type="button" class="btn btn-danger btn-observacao" data-toggle="collapse" data-target="#obs2-3">OBSERVAÇÕES</button>
			</div><!-- /.col-md-1 col-md-offset-20-->
		</div><!-- /.row -->






		<!--(OBSERVAÇÕES NAO VÃO SER INCLUSAS NA ANÁLISE DE DADOS, NAO SERÁ INCLUSO NA DOCUMENTAÇÃO)-->
		<div class="collapse row row col-md-10 col-md-offset-1" id="obs2-3">
	    <div class="form-group">
		    <div style="padding-right: 0.5%; padding-left: 0.5%;">
		    	<label for="txtareaobs">Observações:</label>
			  	<textarea class="form-control" rows="3" id="txtareaobs"></textarea>
		    </div>
			</div>		
		</div><!--/.row -->






		<!--######################################################################################################################
		##################################################      SESSAO 3     #####################################################
		##########################################################################################################################
		##########################################################################################################################-->

		<!-- INICIO CABEÇALHO -->
		<img src="imagens/cabecalho3.png" class="col-md-10 col-md-offset-1">






		<!-- LETRA A /// LINHA 3.0 (PQCCP_3_0) -->		
		<div class="row col-md-10 col-md-offset-1">
	  	<div class="col-md-3">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon"><strong>a) </strong>POSSUI QUANTOS CARGOS COMO PROFESSOR(A)?</span>
	      	<span class="input-group-btn">
	        	<select class="btn" onblur="onblur_pqccp30()" id="pqccp3-0" name="sessao3">
					  	<option value="0">NENHUM</option>
					  	<option value="1">UM CARGO</option>
					  	<option value="2">DOIS CARGOS</option>
					  	<option value="3">TRÊS CARGOS</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	  	</div><!-- /.col-md-3 -->
	  	<!--(BUTTON DE COLLAPSE PARA OBSERVAÇÕES NÃO SERAM INCLUSOS NA ANÁLISE DE DADOS, NAO SERÁ INCLUSO NA DOCUMENTAÇÃO)-->
	  	<div class="col-md-1 col-md-offset-20">
	  		<button type="button" class="btn btn-danger btn-observacao" data-toggle="collapse" data-target="#obs3-11">OBSERVAÇÕES</button>
			</div><!-- /.col-md-1 col-md-offset-20 -->
		</div><!-- /.row -->






		<!-- INICIO CONTEINER -->
		<!-- CONTEINER DE CARGOS /// PAGINAS primeiro_cargo.html = 3.1, segundo_cargo.html = 3.2, terceiro_cargo.html = 3.3 -->
		<div id="collapse_cargos" class="col-md-16 col-md-offset-13"></div>






		<!-- LETRA B /// LINHA 3.4 (JACP_3_4) -->	
		<div class="row col-md-10 col-md-offset-1" style="margin-top: -0.2%;">
	  	<div class="col-md-3">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon"><strong>b) </strong>JÁ ATUOU COMO PROFESSOR(A)?</span>
	      	<span class="input-group-btn">
	        	<select class="btn" onblur="onblur_jacp34()" id="jacp3-4" name="sessao3">
					  	<option value="0">NÃO</option>
					  	<option value="1">SIM(1)</option>
					  	<option value="2">SIM(2)</option>
					  	<option value="3">SIM(3)</option>
					  	<option value="4">SIM(4)</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	  	</div><!-- /.col-md-3 --> 	
		</div><!-- /.row -->






		<!-- INICIO CONTEINER -->
		<!-- CONTEINER DE CARGOS ANTERIORES /// PAGINAS sim_1cargo = 3.5, 
		sim_2cargo = 3.6, sim_3cargo = 3.7, sim_4cargo = 3.8 -->
		<div id="collapse_cargosanteriores" class="col-md-16 col-md-offset-13"></div>






		<!-- LETRA C /// LINHA 3.9 (OADA_3_9, CB_OADA_3_9) -->
		<div class="row row col-md-10 col-md-offset-1" style="margin-top: -0.2%;">
	  	<div class="col-md-5">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon"><strong>c) </strong>ATIVIDADES DE USO PROFISSIONAL DA VOZ (ANTER)?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" onblur="onblur_oada39()" id="oada3-9" name="sessao3">
							<option value="0">NÃO</option>
			        <option value="1">SIM</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-5 -->
			<div class="collapse col-md-6 col-md-print-offset-1" id="collapse_oada3-9">
	    	<div class="input-group input-group-sm">
	      	<form class="adupv">
    				<label class="checkbox-inline">
      				<input type="checkbox" value="1" name="3-9cb">CANTOR
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="2" name="3-9cb">VENDEDOR
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="3" name="3-9cb">REPÓRTER
    				</label>
        		<label class="checkbox-inline">
      				<input type="checkbox" value="4" name="3-9cb">ADVOGADO
    				</label>
        		<label class="checkbox-inline">
      				<input type="checkbox" value="5" name="3-9cb">PADRE/PASTOR
    				</label>
        		<label class="checkbox-inline">
      				<input type="checkbox" value="6" name="3-9cb">ATOR/ATRIZ
    				</label>
        		<label class="checkbox-inline">
      				<input type="checkbox" value="7" name="3-9cb">TELEMARKETING
    				</label>
  				</form>
	    	</div><!-- /input-group -->
	    </div><!-- /col-md-6 /// col-md-print-offset-1 -->	  
	  </div><!-- /.row -->






		<!-- LETRA D /// LINHA 3.10 (OADU_3_10, CB_OADU_3_10) -->
		<div class="row row col-md-10 col-md-offset-1" style="margin-top: -0.2%;">
	  	<div class="col-md-5">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon"><strong>d) </strong>ATIVIDADES DE USO PROFISSIONAL DA VOZ (ATUAL)?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" onblur="onblur_oadu310()" id="oadu3-10" name="sessao3">
							<option value="0">NÃO</option>
			        <option value="1">SIM</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-5 -->
			<div class="collapse col-md-6 col-md-print-offset-1" id="collapse_oadu3-10">
	    	<div class="input-group input-group-sm">
	      	<form class="adupv">
    				<label class="checkbox-inline">
      				<input type="checkbox" value="1" name="3-10cb">CANTOR
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="2" name="3-10cb">VENDEDOR
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="3" name="3-10cb">REPÓRTER
    				</label>
        		<label class="checkbox-inline">
      				<input type="checkbox" value="4" name="3-10cb">ADVOGADO
    				</label>
        		<label class="checkbox-inline">
      				<input type="checkbox" value="5" name="3-10cb">PADRE/PASTOR
    				</label>
        		<label class="checkbox-inline">
      				<input type="checkbox" value="6" name="3-10cb">ATOR/ATRIZ
    				</label>
        		<label class="checkbox-inline">
      				<input type="checkbox" value="7" name="3-10cb">TELEMARKETING
    				</label>
  				</form>
	    	</div><!-- /input-group -->
	    </div><!-- /col-md-6 /// col-md-print-offset-1 -->	  
	  </div><!-- /.row -->  






		<!--(OBSERVAÇÕES NAO VÃO SER INCLUSAS NA ANÁLISE DE DADOS, NAO SERÁ INCLUSO NA DOCUMENTAÇÃO)-->
		<div class="collapse row row col-md-10 col-md-offset-1" id="obs3-11">
	    <div class="form-group">
		    <div style="padding-right: 0.5%; padding-left: 0.5%;">
		    	<label for="txtareaobs">Observações:</label>
			  	<textarea class="form-control" rows="3" id="txtareaobs"></textarea>
		    </div>
			</div>		
		</div>






		<!--######################################################################################################################
		##################################################      SESSAO 4     #####################################################
		##########################################################################################################################
		##########################################################################################################################-->

		<!-- INICIO CABEÇALHO -->	  
		<img src="imagens/cabecalho4.png" class="col-md-10 col-md-offset-1">






		<!-- LINHA 4.0 (DNSF_4_0, CB_DNSF_4_0) -->			
		<div class="row row col-md-10 col-md-offset-1">
	  	<div class="col-md-4">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">DISTÚRBIOS NASAIS E DOS SEIOS DA FACE?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" onblur="onblur_dnsf40()" id="dnsf4-0" name="sessao4">
							<option value="0">NÃO</option>
			         <option value="1">SIM</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-4 -->
			<div class="collapse col-md-5 col-md-offset-31 col-md-print-offset-1" id="collapse_dnsf4-0">
	    	<div class="input-group input-group-sm">
	      	<form id="dnsfcb4-0">
    				<label class="checkbox-inline">
      				<input type="checkbox" value="1" name="4-0cb">SINUSITE
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="2" name="4-0cb">DESVIO DE SEPTO
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="3" name="4-0cb">RINITE
    				</label>
  				</form>
	    	</div><!-- /input-group -->
	    </div><!-- /col-md-5 col-md-offset-31 /// col-md-print-offset-1 -->	  
	  </div><!-- /.row --> 






	  <!-- LINHA 4.1 (DA_4_1, CB_DA_4_1) -->		
		<div class="row row col-md-10 col-md-offset-1">
	  	<div class="col-md-3 col-md-print-6">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">DISTÚRBIOS ALÉRGICOS?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" onblur="onblur_da41()" id="da4-1" name="sessao4">
							<option value="0">NÃO</option>
			         <option value="1">SIM</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /col-md-3 /// col-md-print-6 -->
			<div class="collapse col-md-9 col-md-print-8 col-md-print-offset-14" id="collapse_da4-1">
	    	<div class="input-group input-group-sm">
	      	<form id="dacb4-1">
    				<label class="checkbox-inline">
      				<input type="checkbox" value="1" name="4-1cb">CHEIRO FORTE
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="2" name="4-1cb">POEIRA
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="3" name="4-1cb">MOFO
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="4" name="4-1cb">PÓ DE GIZ
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="5" name="4-1cb">ALIMENTAR
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="6" name="4-1cb">MEDICAÇÃO
    				</label>
  				</form>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-9 /// col-md-print-8 col-md-print-offset-14 -->	  
	  </div><!-- /.row --> 






	  <!-- LINHA 4.2 (DFL_4_2, CB_DFL_4_2) -->	
		<div class="row row col-md-10 col-md-offset-1">
	  	<div class="col-md-3">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">DISTÚRBIOS FARÍNGEOS/LARÍNGEOS?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" onblur="onblur_dfl42()" id="dfl4-2" name="sessao4">
							<option value="0">NÃO</option>
			         <option value="1">SIM</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-3 -->
			<div class="collapse col-md-7 col-md-offset-22 col-md-print-offset-11" id="collapse_dfl4-2">
	    	<div class="input-group input-group-sm">
	      	<form id="dflcb4-2">
    				<label class="checkbox-inline">
      				<input type="checkbox" value="1" name="4-2cb">LARINGITE
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="2" name="4-2cb">AMIGDALITE
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="3" name="4-2cb">FARINGITE
    				</label>
  				</form>
	    	</div><!-- /input-group -->
	    </div><!-- /col-md-7 col-md-offset-22 /// col-md-print-offset-11 -->	  
	  </div><!-- /.row --> 






	  <!-- LINHA 4.3 (DOA_4_3, CB_DOA_4_3) -->		
		<div class="row row col-md-10 col-md-offset-1">
	  	<div class="col-md-3">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">DISTÚRBIOS OTOLÓGICOS/AUDITIVOS?</span>                                                     
	  			<span class="input-group-btn">
	        	<select class="btn" onblur="onblur_doa43()" id="doa4-3" name="sessao4">
							<option value="0">NÃO</option>
			         <option value="1">SIM</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-3 -->
			<div class="collapse col-md-7 col-md-offset-22 col-md-print-offset-11" id="collapse_doa4-3">
	    	<div class="input-group input-group-sm">
	      	<form id="doacb4-3">
    				<label class="checkbox-inline">
      				<input type="checkbox" value="1" name="4-3cb">PERDA AUDITIVA
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="2" name="4-3cb">OTITE
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="3" name="4-3cb">VERTIGEM/TONTURA
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="4" name="4-3cb">ZUMBIDO
    				</label>
  				</form>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-7 col-md-offset-22 /// col-md-print-offset-11 -->	  
	  </div><!-- /.row --> 






	  <!-- LINHA 4.4 (SDRG_4_4, CB_SDRG_4_4) -->			
		<div class="row row col-md-10 col-md-offset-1">
	  	<div class="col-md-5">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">SINAIS DE DOENÇA DO REFLUXO GASTROESOFÁGICO (DRGE)?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" onblur="onblur_sdrg44()" id="sdrg4-4" name="sessao4">
							<option value="0">NÃO</option>
			         <option value="1">SIM</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-5 -->
			<div class="collapse col-md-17 col-md-offset-18 col-md-print-9 col-md-print-offset-12" id="collapse_sdrg4-4">
	    	<div class="input-group input-group-sm">
	      	<form id="sdrgcb4-4">
    				<label class="checkbox-inline">
      				<input type="checkbox" value="1" name="4-4cb">ASSINTOMÁTICO
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="2" name="4-4cb">QUEMAÇÃO/ARDÊNCIA
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="3" name="4-4cb">AZIA
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="4" name="4-4cb">PIGARRO
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="5" name="4-4cb">RETORNO DO ÁCIDO GÁSTRICO
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="6" name="4-4cb">DOR ESTOMACAL
    				</label>
  				</form>
	    	</div><!-- /input-group -->
	    </div><!-- /col-md-17 col-md-offset-18 /// col-md-print-9 col-md-print-offset-12 -->	  
	  </div><!-- /.row --> 






	  <!-- LINHA 4.5 (OASG_4_5, CB_OASG_4_5) -->			
		<div class="row row col-md-10 col-md-offset-1">
	  	<div class="col-md-4">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">OUTRAS ALTERAÇÕES NA SAÚDE GERAL?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" onblur="onblur_oasg45()" id="oasg4-5" name="sessao4">
							<option value="0">NÃO</option>
			         <option value="1">SIM</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-4 -->
			<div class="collapse col-md-7 col-md-offset-30 col-md-print-offset-10" id="collapse_oasg4-5">
	    	<div class="input-group input-group-sm">
	      	<form id="oasgcb4-5">
    				<label class="checkbox-inline">
      				<input type="checkbox" value="1" name="4-5cb">DEPRESSÃO
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="2" name="4-5cb">HIPO/HIPERTIREOIDISMO
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="3" name="4-5cb">HIPERTENSÃO
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="4" name="4-5cb">DIABETES
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="5" name="4-5cb">OUTROS
    				</label>
  				</form>
	    	</div><!-- /input-group -->
	    </div><!-- /col-md-7 col-md-offset-30 /// col-md-print-offset-10 -->	  
	  </div><!-- /.row -->






	  <!-- LETRA A /// LINHA 4.6 (FUDM_4_6, CB_FUDM_4_6) -->			
		<div class="row row col-md-10 col-md-offset-1" style="margin-top:1%;">
	  	<div class="col-md-3">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">USO DE MEDICAMENTO(S)?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" onblur="onblur_fudm46()" id="fudm4-6" name="sessao4">
							<option value="0">NÃO</option>
			         <option value="1">SIM</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-3 -->
			<div class="collapse col-md-8 col-md-offset-30 col-md-print-8 col-md-print-offset-5 collapse_fudm4-6">
	    	<div class="input-group input-group-sm">
	      	<form id="fudmcb4-6">
    				<label class="checkbox-inline">
      				<input type="checkbox" value="1" name="4-6cb">ANTICONCEPCIONAL
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="2" name="4-6cb">ANTIHIPERTENSIVO
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="3" name="4-6cb">ANTIDEPRESSIVO
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="4" name="4-6cb">ANTIGLICÊMICO
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="5" name="4-6cb">ANTIÁCIDO
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="6" name="4-6cb">HORMÔNIOS
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="7" name="4-6cb">ANTILIPÊMICO
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="8" name="4-6cb">ANSIOLÍTICO
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="9" name="4-6cb">OUTROS
    				</label>
  				</form>
	    	</div><!-- /input-group -->
	    </div><!-- /col-md-8 col-md-offset-30 /// col-md-print-8 col-md-print-offset-5 -->	  
	  </div><!-- /.row -->






	  <!--(ESSAS INFORMAÇÕES NAO VÃO SER INCLUSAS NA ANÁLISE DE DADOS, NAO SERÁ INCLUSO NA DOCUMENTAÇÃO)-->
	  <div class="row row col-md-10 col-md-offset-1">
	    <div class="collapse col-md-12 collapse_fudm4-6">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">NOME DO(S) MEDICAMENTO(S)</span>
	  			<input type="text" class="form-control" aria-describedby="basic-addon1" id="input_ndm4-6" style="text-transform: uppercase;"> 	
	    	</div><!-- /input-group -->
	  	</div><!-- /col-md-8 col-md-print-10 /// col-md-print-offset-13 -->
		</div><!-- /.row -->
		






	  <!-- LETRA B /// LINHA 4.7 (CCAG_4_7)-->		
		<div class="row row col-md-10 col-md-offset-1" style="margin-top:1%;">
	  	<div class="col-md-4">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">CIRURGIA COM ANESTESIA GERAL?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" onblur="onblur_ccag47()" id="ccag4-7" name="sessao4">
							<option value="0">NÃO</option>
			         <option value="1">SIM</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-4 -->
	    <!--(ESSAS INFORMAÇÕES NAO VÃO SER INCLUSAS NA ANÁLISE DE DADOS, NAO SERÁ INCLUSO NA DOCUMENTAÇÃO)-->
	    <div class="collapse col-md-8 col-md-print-10 col-md-print-offset-13" id="collapse_ccag4-7">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">QUAL(IS)?</span>
	  			<input type="text" class="form-control" aria-describedby="basic-addon1" id="input_ccag4-7" style="text-transform: uppercase;"> 	
	    	</div><!-- /input-group -->
	  	</div><!-- /col-md-8 col-md-print-10 /// col-md-print-offset-13 -->
		</div><!-- /.row -->
		






		<!-- LETRA B.1 /// LINHA 4.8 (TIRE_4_8) -->	
		<div class="row row col-md-10 col-md-offset-1">
		  	<div class="col-md-3">
		    	<div class="input-group input-group-sm">
		      	<span class="input-group-addon" id="basic-addon">CIRURGIA NA TIREÓIDE?</span>
		  			<span class="input-group-btn">
		        	<select class="btn" name="sessao4">
								 <option value="0">NÃO</option>
				         <option value="1">SIM</option>
		        	</select>
	      		</span>
		    	</div><!-- /input-group -->
		    </div><!-- /.col-md-3-->
		    <!--(BUTTON DE COLLAPSE PARA OBSERVAÇÕES NÃO SERAM INCLUSOS NA ANÁLISE DE DADOS, NAO SERÁ INCLUSO NA DOCUMENTAÇÃO)-->
		    <div class="col-md-1 col-md-offset-20">
		  		<button type="button" class="btn btn-danger btn-observacao" data-toggle="collapse" data-target="#obs4-8">OBSERVAÇÕES</button>
			</div><!-- /.col-md-1 col-md-offset-20 col-md-print-offset-2 -->
		</div><!-- /.row -->







		<!--(OBSERVAÇÕES NAO VÃO SER INCLUSAS NA ANÁLISE DE DADOS, NAO SERÁ INCLUSO NA DOCUMENTAÇÃO)-->
		<div class="collapse row row col-md-10 col-md-offset-1" id="obs4-8">
	    <div class="form-group">
		    <div style="padding-right: 0.5%; padding-left: 0.5%;">
		    	<label for="txtareaobs">Observações:</label>
			  	<textarea class="form-control" rows="3" id="txtareaobs"></textarea>
		    </div>
			</div>		
		</div>






		<!--######################################################################################################################
		##################################################      SESSAO 5     #####################################################
		##########################################################################################################################
		##########################################################################################################################-->

		<!-- INICIO CABEÇALHO -->	  
		<img src="imagens/cabecalho5.png" class="col-md-10 col-md-offset-1">





		<!--LINHA 5.0 (TABA_5_0, HQT_5_0, QCD_5_0)-->
		<div class="row row col-md-10 col-md-offset-1 collapse" id="collapse_taba5-0_taba">
	  	<div class="col-md-2">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">TABAGISTA?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" onblur="onblur_taba50()" id="taba5-0" name="sessao5">
							<option value="0">NÃO</option>
			        <option value="1">SIM</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-2 -->
		  <div class="collapse col-md-3 col-md-offset-46 col-md-print-offset-10 collapse_taba5-0">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">HÁ QUANTO TEMPO?</span>
		  		<span class="input-group-btn">
		        <select class="btn" name="sessao5">
		        	<option id="setselect5-1" value="">SELECIONE...</option>
							<option value="1">ATÉ 1 ANO</option>
				      <option value="2">2 A 5 ANOS</option>
							<option value="3">6 A 10 ANOS</option>
				      <option value="4">11 A 15 ANOS</option>
							<option value="5">MAIS DE 15 ANOS</option>
							<option value="6">NÃO SOUBE INFORMAR</option>
		        </select>
	      	</span>
		    </div><!-- /input-group -->
		   </div><!-- /.col-md-3 col-md-offset-46 col-md-print-offset-10 -->
		   <div class="collapse col-md-2 col-md-offset-41 col-md-print-offset-7 collapse_taba5-0">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">QUANTOS CIGARROS/DIA?</span>
		  		<span class="input-group-btn">
		        <select class="btn" name="sessao5">
		        	<option id="setselect5-2" value="">SELECIONE...</option>
							<option value="1">10 OU MENOS</option>
				      <option value="2">11 A 20</option>
							<option value="3">21 A 30</option>
				      <option value="4">31 OU MAIS</option>
				      <option value="5">NÃO SOUBE INFORMAR</option>
		        </select>
	      	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-2 col-md-offset-41 /// col-md-print-offset-7 -->
		</div><!-- /.row -->






		<!--LINHA 5.1 (EXTABA_5_1, FPQT_5_1, PHQT_5_1)-->
		<div class="row row col-md-10 col-md-offset-1 collapse" id="collapse_taba5-0_extaba">
	  	<div class="col-md-2">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">EX-TABAGISTA?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" onblur="onblur_extaba51()" id="extaba5-1" name="sessao5">
							<option value="0" id="setnao5-1">NÃO</option>
			         <option value="1">SIM</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-2 -->
	    <div class="collapse col-md-3 col-md-offset-41 col-md-print-offset-26 collapse_extaba5-1">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">POR QUANTO TEMPO?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" name="sessao5">
	        		<option id="setselect5-3" value="">SELECIONE...</option>
							<option value="1">ATÉ 1 ANO</option>
				      <option value="2">2 A 5 ANOS</option>
							<option value="3">6 A 10 ANOS</option>
				      <option value="4">11 A 15 ANOS</option>
							<option value="5">MAIS DE 15 ANOS</option>
							<option value="6">NÃO SOUBE INFOR.</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-3 col-md-offset-41 /// col-md-print-offset-26 -->
	    <div class="collapse col-md-3 col-md-offset-21 col-md-print-offset-16 collapse_extaba5-1">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">PAROU HÁ QUANTO TEMPO?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" name="sessao5">
	        		<option id="setselect5-4" value="">SELECIONE...</option>
							<option value="1">MENOS DE 1 ANO</option>
				      <option value="2">2 A 5 ANOS</option>
							<option value="3">6 A 10 ANOS</option>
							<option value="4">MAIS DE 10 ANOS</option>
							<option value="5">NÃO SOUBE INFOR.</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-3 col-md-offset-21 /// col-md-print-offset-16 -->
		</div><!-- /.row -->






		<!--LINHA 5.2 (DRIL_5_2, CB_DRIL_5_2, OTR_5_2)-->
		<div class="row row col-md-10 col-md-offset-1">
	  	<div class="col-md-3">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">DROGAS ILÍCITAS?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" onblur="onblur_dril52()" id="dril5-2" name="sessao5">
							<option value="0">NÃO</option>
			         <option value="1">SIM</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-3 -->
			<div class="collapse col-md-4 collapse_dril5-2" style="padding-top: 0.7%;">
	    	<div class="input-group input-group-sm">
	      	<form>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="1" name="5-2cb">MACONHA
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="2" name="5-2cb">COCAÍNA
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="3" name="5-2cb">CRACK
    				</label>
  				</form>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-4 -->	
	    <div class="collapse col-md-5 collapse_dril5-2">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">OUTRA:</span>
	  			<input type="text" style="text-transform: uppercase;" maxlength="15" class="form-control" aria-describedby="basic-addon1" maxlength="10" name="sessao5" id="inputsessao5"> 	
	    	</div><!-- /input-group -->
	  	</div><!-- /.col-md-5 -->  
		</div><!-- /.row -->	
		





		<!--LINHA 5.3 (ETIL_5_3, CB_QTB_5_3, QAF_5_3)-->
		<div class="row row col-md-10 col-md-offset-1">
	  	<div class="col-md-2">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">ETILISTA?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" onblur="onblur_etil53()" id="etil5-3" name="sessao5">
							<option value="0">NÃO</option>
			         <option value="1">SIM</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-2 -->
	    <div class="collapse col-md-4 col-md-offset-13 col-md-print-offset-2 collapse_etil5-3" style="padding-top: 0.7%;">
	    	<div class="input-group input-group-sm">
	      	<form>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="1" name="5-3cb">DESTILADOS
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="2" name="5-3cb">FERMENTADOS
    				</label>
  				</form>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-4 col-md-offset-13 /// col-md-print-offset-2 -->
	    <div class="collapse col-md-3 col-md-offset-22 collapse_etil5-3">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">QUAL A FREQUÊNCIA?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" name="sessao5">
	        		<option id="setselect5-6" value="">SELECIONE...</option>
							<option value="1">1 VEZ POR MÊS</option>
			        <option value="2">2 A 3 VEZES POR MÊS</option>
			        <option value="3">1 OU 2 VEZES POR SEMANA</option>
			        <option value="4">3 A 4 VEZES POR SEMANA</option>
			        <option value="5">QUASE TODOS OS DIAS</option>
			        <option value="6">UMA VEZ POR DIA OU MAIS</option>
			        <option value="7">NÃO SOUBE INFORMAR</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-3 col-md-offset-22 -->
		</div><!-- /.row -->






		<!--LINHA 5.4 (OHVI_5_4)-->
		<div class="row row col-md-10 col-md-offset-1">
	  	<div class="col-md-3">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">OUTROS HÁBITOS VOCAIS INADEQUADOS?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" name="sessao5" onblur="onblur_ohvi54()" id="ohvi5-4">
	        		<option value="0">NÃO</option>
							<option value="1">SIM</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-3 -->
	    <!--(BUTTON DE COLLAPSE PARA OBSERVAÇÕES NÃO SERAM INCLUSOS NA ANÁLISE DE DADOS, NAO SERÁ INCLUSO NA DOCUMENTAÇÃO)-->
	    <div class="col-md-1 col-md-offset-20">
	  		<button type="button" class="btn btn-danger btn-observacao" data-toggle="collapse" data-target="#obs5-5">OBSERVAÇÕES</button>
			</div><!-- /.col-md-3 -->
	  </div><!-- /.row -->




	  <!--LINHA 5.4 (CB_OHVI_5_4)-->		
		<div class="collapse row row col-md-10 col-md-offset-1" id="collapse_ohvi5-4">
			<div class="col-md-12">
	    	<div class="input-group input-group-sm">
	      	<form id="ohvicb5-4">
    				<label class="checkbox-inline" style="margin-left: 0px;">
      				<input type="checkbox" value="1" name="5-4cb">GRITA
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="2" name="5-4cb">FALA MUITO
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="3" name="5-4cb">FALA ALTO
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="4" name="5-4cb">FALA RÁPIDO
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="5" name="5-4cb">PIGARREIA
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="6" name="5-4cb">TOSSE
    				</label>
    				<label class="checkbox-inline">
      				<input type="checkbox" value="7" name="5-4cb">HIDRATAÇÃO INSUFICIENTE
    				</label>
  				</form>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-12 -->	  
	  </div><!-- /.row -->






	  <!--(OBSERVAÇÕES NAO VÃO SER INCLUSAS NA ANÁLISE DE DADOS, NAO SERÁ INCLUSO NA DOCUMENTAÇÃO)-->
		<div class="collapse row row col-md-10 col-md-offset-1" id="obs5-5">
	    <div class="form-group">
		    <div style="padding-right: 0.5%; padding-left: 0.5%;">
		    	<label for="txtareaobs">Observações:</label>
			  	<textarea class="form-control" rows="3" id="txtareaobs"></textarea>
		    </div>
			</div>		
		</div>





		<!--######################################################################################################################
		##################################################      SESSAO 6     #####################################################
		##########################################################################################################################
		##########################################################################################################################-->

		<!-- INICIO CABEÇALHO -->	  
		<img src="imagens/cabecalho6.png" class="col-md-10 col-md-offset-1">






		<!-- LETRA A /// LINHA 6.0 (SINP_6_0) -->		
		<div class="row row col-md-10 col-md-offset-1">
	  	<div class="col-md-5">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon"><strong>a) </strong>SINTOMAS PRESENTES?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" onblur="onblur_sipr60()" id="sipr6-0" name="sessao6">
							 <option value="1">AUSÊNCIA DE QUEIXAS VOCAIS NO MOMENTO</option>
			         <option value="2">SIM</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-5 -->
	    <!--(BUTTON DE COLLAPSE PARA OBSERVAÇÕES NÃO SERAM INCLUSOS NA ANÁLISE DE DADOS, NAO SERÁ INCLUSO NA DOCUMENTAÇÃO)-->
	    <div class="col-md-1 col-md-offset-37">
	  		<button type="button" class="btn btn-danger btn-observacao" data-toggle="collapse" data-target="#obs6-10">OBSERVAÇÕES</button>
			</div><!-- /.col-md-1 col-md-offset-37 -->
	  </div><!-- /.row -->






		<!-- LINHA 6.1 (CB_SINP_6_1) -->
	  <div class="row row col-md-10 col-md-offset-1 collapse collapse_sipr6-0">
			<div class="col-md-12">
		   	<div class="input-group input-group-sm">
		     	<form>
	    			<label class="checkbox-inline">
	      			<input type="checkbox" value="1" name="6-1cb">DOR AO FALAR
	    			</label>
	    			<label class="checkbox-inline">
	      			<input type="checkbox" value="2" name="6-1cb">RESSECAMENTO
	    			</label>
	   				<label class="checkbox-inline">
	     				<input type="checkbox" value="3" name="6-1cb">QUEIMAÇÃO
	   				</label>
	    			<label class="checkbox-inline">
	      			<input type="checkbox" value="4" name="6-1cb">ARDÊNCIA
	    			</label>
	   				<label class="checkbox-inline">
	     				<input type="checkbox" value="5" name="6-1cb">CANSAÇO VOCAL
	   				</label>
	   				<label class="checkbox-inline">
      			<input type="checkbox" value="6" name="6-1cb">ROUQUIDÃO
	    			</label>
	    			<label class="checkbox-inline">
	     				<input type="checkbox" value="7" name="6-1cb">FALTA DE AR
	   				</label>
	   				<label class="checkbox-inline">
	     				<input type="checkbox" value="8" name="6-1cb">COCEIRA
	    			</label>
	    			<label class="checkbox-inline">
	     				<input type="checkbox" value="9" name="6-1cb">VOZ GROSSA
	   				</label>
	   				<label class="checkbox-inline">
	     				<input type="checkbox" value="10" name="6-1cb">ESFORÇO PARA FALAR
	   				</label>
    				<label class="checkbox-inline">
	      			<input type="checkbox" value="11" name="6-1cb">TOSSE COM SECREÇÃO
	    			</label>
	    			<label class="checkbox-inline">
	     				<input type="checkbox" value="12" name="6-1cb">TOSSE SECA
	   				</label>
	   				<label class="checkbox-inline">
	     				<input type="checkbox" value="13" name="6-1cb">DOR NA GARGANTA
    				</label>
	    			<label class="checkbox-inline">
	      			<input type="checkbox" value="14" name="6-1cb">FALHAS NA VOZ
	    			</label>
	   				<label class="checkbox-inline">
	     				<input type="checkbox" value="15" name="6-1cb">APERTO NA GARGANTA
	   				</label>
	    			<label class="checkbox-inline">
	      			<input type="checkbox" value="16" name="6-1cb">ENGASGO
	    			</label>
	   				<label class="checkbox-inline">
	     				<input type="checkbox" value="17" name="6-1cb">SENSAÇÃO DE CORPO ESTRANHO
	   				</label>
	   				<label class="checkbox-inline">
      				<input type="checkbox" value="18" name="6-1cb">DISFAGIA
	    			</label>
	    			<label class="checkbox-inline">
	     				<input type="checkbox" value="19" name="6-1cb">ODINOFAGIA
	   				</label>
	 				</form>
	    	</div><!-- /input-group -->
		  </div><!-- /.col-md-12 -->	  
		</div><!-- /.row -->
		





		<!-- LETRA A.1 /// LINHA 6.2 (SPQT_6_2, CFMP_6_2) -->
		<div class="row row col-md-10 col-md-offset-1 collapse collapse_sipr6-0" style="margin-top: 1.5%;">
		  <div class="col-md-5">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon"><strong>a.1) </strong>SINTOMAS PRESENTES HÁ QUANTO TEMPO?</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao6">
			      	<option id="setselect6-1" value="">SELECIONE...</option>
							<option value="1">ATÉ 5 MESES</option>
				      <option value="2">6 A 11 MESES</option>
							<option value="3">1 A 2 ANOS</option>
				      <option value="4">2 A 3 ANOS</option>
							<option value="5">3 A 4 ANOS</option>
							<option value="6">MAIS DE 4 ANOS</option>
							<option value="7">NÃO SOUBE INFORMAR</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-5 -->
		  <div class="col-md-4 col-md-offset-32 col-md-print-offset-18">
			  <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">COMO FORAM PERCEBIDOS?</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao6">
			      	<option id="setselect6-2" value="">SELECIONE...</option>
							<option value="1">DE FORMA GRADUAL</option>
				      <option value="2">DE FORMA BRUSCA</option>
							<option value="3">INTERMITENTE</option>
							<option value="4">NÃO SOUBE INFORMAR</option>
			      </select>
		    	</span>
			  </div><!-- /input-group -->
			</div><!-- /.col-md-4 col-md-offset-32 /// col-md-print-offset-18 -->
		</div><!-- /.row -->






		<!-- LETRA B /// LINHA 6.3 (PSLC_6_3, QND_6_3) -->
		<div class="row row col-md-10 col-md-offset-1" style="margin-top: 1.5%;">
		  <div class="col-md-4">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon"><strong>b) </strong>PATOLOGIA/SINAIS LARÍNGEOS CONFIRMADOS?</span>
		  		<span class="input-group-btn">
			      <select class="btn" onblur="onblur_pslc63()" id="pslc6-3" name="sessao6">
							<option value="0">NÃO</option>
				      <option value="1">SIM</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-4 -->
		  <div class="collapse col-md-2 col-md-offset-36 col-md-print-offset-19 collapse_pslc6-3">
			  <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">QUANDO?</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao6">
			      	<option id="setselect6-3" value="">SELECIONE...</option>
							<option value="1">ATÉ 6 MESES</option>
				      <option value="2">DE 7 MESES A 1 ANO</option>
							<option value="3">DE 1 A 2 ANOS</option>
							<option value="4">DE 2 A 3 ANOS</option>
				      <option value="5">DE 3 A 4 ANOS</option>
							<option value="6">MAIS DE 4 ANOS</option>
							<option value="7">NÃO SOUBE INFORMAR</option>
			      </select>
		    	</span>
			  </div><!-- /input-group -->
			</div><!-- /.col-md-2 col-md-offset-36 /// col-md-print-offset-19 -->
		</div><!-- /.row -->






		<!-- LINHA 6.4 (CB_PSLC_6_4) -->
	  <div class="row row collapse col-md-10 col-md-offset-1 collapse_pslc6-3">
			<div class="col-md-12">
		   	<div class="input-group input-group-sm">
		     	<form id="">
	    			<label class="checkbox-inline">
	      			<input type="checkbox" value="1" name="6-4cb">NÓDULO(S)
	    			</label>
	    			<label class="checkbox-inline">
	      			<input type="checkbox" value="2" name="6-4cb">PÓLIPO(S)
	    			</label>
	   				<label class="checkbox-inline">
	     				<input type="checkbox" value="3" name="6-4cb">CISTO(S)
	   				</label>
	    			<label class="checkbox-inline">
	      			<input type="checkbox" value="4" name="6-4cb">SULCO(S)
	    			</label>
	   				<label class="checkbox-inline">
	     				<input type="checkbox" value="5" name="6-4cb">EDEMA
	   				</label>
	   				<label class="checkbox-inline">
      				<input type="checkbox" value="6" name="6-4cb">EDEMA DE REINKE
	    			</label>
	    			<label class="checkbox-inline">
	     				<input type="checkbox" value="7" name="6-4cb">HIPEREMIA NA(S) PPVV(S)
	   				</label>
	   				<label class="checkbox-inline">
	     				<input type="checkbox" value="8" name="6-4cb">ALTERAÇÃO VASCULAR
	    			</label>
	    			<label class="checkbox-inline">
	     				<input type="checkbox" value="9" name="6-4cb">FENDA GLÓTICA
	   				</label>
	   				<label class="checkbox-inline">
	     				<input type="checkbox" value="10" name="6-4cb">OUTRA(S)
	   				</label>
	   				<label class="checkbox-inline">
	     				<input type="checkbox" value="11" name="6-4cb">NÃO SOUBE INFORMAR
	   				</label>
	 				</form>
	    	</div><!-- /input-group -->
		  </div><!-- /.col-md-12 -->	  
		</div><!-- /.row -->







		<!--LETRA C /// LINHA 6.5 (ALFA_6_5) -->
		<div class="row row col-md-10 col-md-offset-1" style="margin-top: 1.5%;">
	  	<div class="col-md-3">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon"><strong>c) </strong>TRATAMENTO FONOTERÁPICO?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" onblur="onblur_tf65()" id="tf6-5" name="sessao6">
	        		<option value="0">NÃO</option>
							<option value="1">SIM</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-3 -->
	  </div><!-- /.row -->







		<!-- LETRA C.1 /// LINHA 6.6 (TFJR_6_6, QND_6_6) -->
		<div class="collapse row row col-md-10 col-md-offset-1 collapse_tf6-5">
		  <div class="col-md-4">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon"><strong>c.1) </strong>TRATAMENTO FONOTERÁPICO JÁ REALIZADO?</span>
		  		<span class="input-group-btn">
			      <select class="btn" onblur="onblur_tfjr66()" id="tfjr6-6" name="sessao6">
							<option id="setselect6-7id" value="0">NÃO</option>
				      <option value="1">SIM</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-4 -->
		  <div class="collapse col-md-2 col-md-offset-16 col-md-print-offset-8 collapse_tfjr6-6">
			  <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">QUANDO?</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao6">
			      	<option id="setselect6-7" value="">SELECIONE...</option>
							<option value="1">ATÉ 1 ANO ATRÁS</option>
				      <option value="2">DE 1 ANO A 2 ATRÁS</option>
							<option value="3">ACIMA DE 2 ANOS ATRÁS</option>
							<option value="4">NÃO SOUBE INFORMAR</option>}
							option>
			      </select>
		    	</span>
			  </div><!-- /input-group -->
			</div><!-- /.col-md-2 col-md-offset-16 /// col-md-print-offset-8 -->			 
		</div><!-- /.row -->






		<!--LINHA 6.7 (ALFA_6_7) -->
		<div class="collapse row row col-md-10 col-md-offset-1 collapse_tfjr6-6">
	  	<div class="col-md-3">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">LAUDO FONOAUDIÓLOGO EM ANEXO?</span>
	  			<span class="input-group-btn">
	        	<select class="btn" name="sessao6">
	        		<option id="setselect6-8" value="">SELECIONE...</option>
	        		<option value="0">NÃO</option>
							<option value="1">SIM</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-3 -->
	  </div><!-- /.row -->





		<!-- LETRA C.2 /// LINHA 6.8 (ETFO_6_8, NDSE_6_8) -->
		<div class="collapse row row col-md-10 col-md-offset-1 collapse_tf6-5" style="margin-top: 1.5%;">
		  <div class="col-md-3">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon"><strong>c.2) </strong>EM TRATAMENTO FONOTERÁPICO?</span>
		  		<span class="input-group-btn">
			      <select class="btn" onblur="onblur_etfo68()" id="etfo6-8" name="sessao6">
							<option id="setselect6-4id" value="0">NÃO</option>
				      <option value="1">SIM</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-3 -->
		  <div class="collapse col-md-3 col-md-offset-37 col-md-print-offset-20 collapse_etfo6-8">
			  <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">Nº DE SESSÕES?</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao6">
			      	<option id="setselect6-4" value="">SELECIONE...</option>
							<option value="1">SOMENTE A AVALIAÇÃO</option>
				      <option value="2">ATÉ 4 SESSÕES</option>
							<option value="3">5 A 8 SESSÕES</option>
							<option value="4">9 A 12 SESSÕES</option>
				      <option value="5">13 A 16 SESSÕES</option>
							<option value="6">17 A 24 SESSÕES</option>
							<option value="6">MAIS DE 24 SESSÕES</option>
							<option value="7">NÃO SOUBE INFORMAR</option>
			      </select>
		    	</span>
			  </div><!-- /input-group -->
			</div><!-- /.col-md-3 col-md-offset-37 /// col-md-print-offset-20 -->
		</div><!-- /.row -->






		<!--LINHA 6.9 (FRSE_6_9, FDFO_6_9) -->
		<div class="collapse row row col-md-10 col-md-offset-1 collapse_etfo6-8">
		  <div class="col-md-3">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">FREQUÊNCIA SEMANAL:</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao6">
			      	<option id="setselect6-5" value="">SELECIONE...</option>
							<option value="1">1X/SEMANA</option>
				      <option value="2">2X/SEMANA</option>
				      <option value="3">3X/SEMANA</option>
				      <option value="4">4X/SEMANA</option>
				      <option value="5">5X/SEMANA</option>
				      <option value="6">NÃO SOUBE INFORMAR</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-3 -->
		  <div class="col-md-3 col-md-offset-33 col-md-print-offset-21">
			  <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">FREQUÊNCIA DA FONOTERAPIA:</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao6">
			      	<option id="setselect6-6" value="">SELECIONE...</option>
							<option value="1">TRATAMENTO CONTÍNUO</option>
				      <option value="2">TRATAMENTO COM INTERRUPÇÕES</option>
							<option value="3">NÃO SOUBE INFORMAR</option>
							<option value="4">OUTRA</option>
			      </select>
		    	</span>
			  </div><!-- /input-group -->
			</div><!-- /.col-md-3 col-md-offset-33 /// col-md-print-offset-21 -->
		</div><!-- /.row -->






		<!--LINHA 6.10 (LFEA_6_10) -->
		<div class="collapse row row col-md-10 col-md-offset-1 collapse_etfo6-8">
	  	<div class="col-md-3">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">LAUDO FONOAUDIÓLOGO EM ANEXO?</span>
	  			<span class="input-group-btn">
	        	<select class="btn">
	        		<option id="setselect6-8id" value="">SELECIONE...</option>
	        		<option value="0">NÃO</option>
							<option value="1">SIM</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-3 -->
	  </div><!-- /.row -->






		<!-- LETRA D /// LINHA 6.11 (CRVC_6_11, QND_6_11) -->
		<div class="row row col-md-10 col-md-offset-1" style="margin-top: 1.5%;">
		  <div class="col-md-3">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon"><strong>d) </strong>CIRUGIA(S) VOCAL(IS)?</span>
		  		<span class="input-group-btn">
			      <select class="btn" onblur="onblur_civo611()" id="civo6-11" name="sessao6">
							<option value="0">NÃO</option>
				      <option value="1">SIM</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-3 -->
		  <div class="collapse col-md-3 col-md-offset-1 col-md-print-offset-10 collapse_civo6-11">
			  <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">QUANDO?</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao6">
			      	<option id="setselect6-9" value="">SELECIONE...</option>
							<option value="1">ATÉ 1 ANO ATRÁS</option>
				      <option value="2">DE 1 ANO A 2 ATRÁS</option>
							<option value="3">ACIMA DE 2 ANOS ATRÁS</option>
							<option value="4">NÃO SOUBE INFORMAR</option>
			      </select>
		    	</span>
			  </div><!-- /input-group -->
			</div><!-- /.col-md-3 col-md-offset-1 /// col-md-print-offset-10 -->			 
		</div><!-- /.row -->






		<!--LETRA E /// LINHA 6.12 (FUDM_6_12, HQNT_6_12, OQMD_6_12) -->
		<div class="row row col-md-10 col-md-offset-1" style="margin-top: 1.5%;">
		  <div class="col-md-3">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon"><strong>e) </strong>FAZ USO DE MICROFONE?</span>
		  		<span class="input-group-btn">
			      <select class="btn" onblur="onblur_fudm612()" id="fudm6-12" name="sessao6">
							<option value="0">NÃO</option>
				      <option value="1">SIM</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-3 -->
		  <div class="collapse col-md-3 col-md-offset-1 col-md-print-offset-1 collapse_fudm6-12">
			  <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">HÁ QUANTO TEMPO?</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao6">
			      	<option id="setselect6-10" value="">SELECIONE...</option>
							<option value="1">ATÉ 1 ANO</option>
				      <option value="2">DE 1 A 2 ANOS</option>
							<option value="3">DE 2 A 5 ANOS</option>
							<option value="4">MAIS DE 5 ANOS</option>
							<option value="5">NÃO SOUBE INFO.</option>
			      </select>
		    	</span>
			  </div><!-- /input-group -->
			</div><!-- /.col-md-3 col-md-offset-1 /// col-md-print-offset-1 -->		
		  <div class="collapse col-md-3 col-md-offset-38 col-md-print-offset-24 collapse_fudm6-12">
			  <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">O QUE MUDOU?</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao6">
			      	<option id="setselect6-11" value="">SELECIONE...</option>
							<option value="1">AUXILIA MUITO</option>
				      <option value="2">AUXILIA POUCO</option>
							<option value="3">NÃO AUXILIA</option>
			      </select>
		    	</span>
			  </div><!-- /input-group -->
			</div><!-- /.col-md-3 col-md-offset-38 /// col-md-print-offset-24 -->		 
		</div><!-- /.row -->






		<!--(OBSERVAÇÕES NAO VÃO SER INCLUSAS NA ANÁLISE DE DADOS, NAO SERÁ INCLUSO NA DOCUMENTAÇÃO)-->
		<div class="collapse row row col-md-10 col-md-offset-1" id="obs6-10">
	    <div class="form-group">
	    <div style="padding-right: 0.5%; padding-left: 0.5%;">
	    	<label for="txtareaobs">Observações:</label>
		  	<textarea class="form-control" rows="3" id="txtareaobs"></textarea>
	    </div>
			</div>		
		</div>




		<!--######################################################################################################################
		##################################################      SESSAO 7     #####################################################
		##########################################################################################################################
		##########################################################################################################################-->

		<!--INICIO CABEÇALHO -->	  
		<img src="imagens/cabecalho7.png" class="col-md-10 col-md-offset-1">






		<!--LINHA 7.0 (QEV_7_0, GDA_7_0)-->
		<div class="row row col-md-10 col-md-offset-1">
		  <div class="col-md-3">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">QUALIDADE VOCAL:</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao7">
			      	<option id="setselect7-1" value="">SELECIONE...</option>
							<option value="1">NEUTRA</option>
				      <option value="2">DISFÔNICA</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-3 -->
		  <div class="col-md-3 col-md-offset-1 col-md-print-offset-17">
			  <div class="input-group input-group-sm">
			  <span class="input-group-addon" id="basic-addon">GRAU DE ALTERAÇÃO:</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao7">
			      	<option id="setselect7-2" value="">SELECIONE...</option>
							<option value="1">AUSENTE</option>
				      <option value="2">LEVEMENTE ALTERADO</option>
							<option value="3">MODERADAMENTE ALTERADO</option>
							<option value="4">ALTERAÇÃO SEVERA</option>
			      </select>
		    	</span>
			  </div><!-- /input-group -->
			</div><!-- /.col-md-3 col-md-offset-1 /// col-md-print-offset-17 -->		
		</div><!-- /.row -->






		<!--LINHA 7.1 (GGDD_7_1, SPR_7_1, TNS_7_1, RUG_7_1, AST_7_1, INST_7_1)-->	 	
		<div class="row row col-md-10 col-md-offset-1" style="margin-top: 1.5%;">
			<div class="panel-group">
			  <div class="col-md-12">
	    		<div class="panel panel-default">
	      		<div class="panel-heading">CARACTERÍSTICAS DA DISFONIA - ESCALA GRBASI (HIRANO, 1981) - CLASSIFICAÇÃO FINAL:</div>
	      		<div class="panel-body">
		      		<div class="row">
		      			<div class="col-md-9">
		      				<div class="row">
			     					<div class="col-md-4">
			      					<div class="input-group input-group-sm">
				        				<span class="input-group-addon" id="basic-addon">GRAU GERAL DA DISFONIA:</span>
				        				<div class="input-group-btn" data-toggle="buttons">
				       						<label class="btn btn-default active" onclick="letra_g(0)">	
														<input type="radio" autocomplete="off" value="0" name="7-1grb" checked="checked">0
														<span class="glyphicon glyphicon-ok"></span>
													</label>

													<label class="btn btn-default" onclick="letra_g(1)">
														<input type="radio" value="1" name="7-1grb" autocomplete="off">1
														<span class="glyphicon glyphicon-ok"></span>
													</label>
 
													<label class="btn btn-default" onclick="letra_g(2)">
														<input type="radio" value="2" name="7-1grb" autocomplete="off">2
														<span class="glyphicon glyphicon-ok"></span>
													</label>

													<label class="btn btn-default" onclick="letra_g(3)">
														<input type="radio" value="3" name="7-1grb" autocomplete="off">3
														<span class="glyphicon glyphicon-ok"></span>
													</label>
				        				</div>
			     						</div>
			      				</div><!-- /.col-md-4 -->
		      					<div class="col-md-4 col-md-offset-2 col-md-print-offset-25">
			      					<div class="input-group input-group-sm">
			        					<span class="input-group-addon" id="basic-addon">RUGOSIDADE:</span>
			        					<div class="input-group-btn" data-toggle="buttons">
			       							<label class="btn btn-default active" onclick="letra_r(0)">
														<input type="radio" value="0" name="7-1srb" autocomplete="off" checked="checked">0
														<span class="glyphicon glyphicon-ok"></span>
													</label>

													<label class="btn btn-default" onclick="letra_r(1)">
														<input type="radio" value="1" name="7-1srb" autocomplete="off">1
														<span class="glyphicon glyphicon-ok"></span>
													</label>

													<label class="btn btn-default" onclick="letra_r(2)">
														<input type="radio" value="2" name="7-1srb" autocomplete="off">2
														<span class="glyphicon glyphicon-ok"></span>
													</label>

													<label class="btn btn-default" onclick="letra_r(3)">
														<input type="radio" value="3" name="7-1srb" autocomplete="off">3
														<span class="glyphicon glyphicon-ok"></span>
													</label>
			        					</div>
		      						</div>
		      					</div><!-- /.col-md-4 col-md-offset-2 -->
		      				</div>
		      				<div class="row">
			     					<div class="col-md-4">
			      					<div class="input-group input-group-sm">
				        				<span class="input-group-addon" id="basic-addon">SOPROSIDADE:</span>
				        				<div class="input-group-btn" data-toggle="buttons">
				       						<label class="btn btn-default active" onclick="letra_b(0)">
														<input type="radio" value="0" name="7-1trb" autocomplete="off" checked="checked">0
														<span class="glyphicon glyphicon-ok"></span>
													</label>

													<label class="btn btn-default" onclick="letra_b(1)">
														<input type="radio" value="1" name="7-1trb" autocomplete="off">1
														<span class="glyphicon glyphicon-ok"></span>
													</label>

													<label class="btn btn-default" onclick="letra_b(2)">
														<input type="radio" value="2" name="7-1trb" autocomplete="off">2
														<span class="glyphicon glyphicon-ok"></span>
													</label>

													<label class="btn btn-default" onclick="letra_b(3)">
														<input type="radio" value="3" name="7-1trb" autocomplete="off">3
														<span class="glyphicon glyphicon-ok"></span>
													</label>
				        				</div>
			     						</div>
			      				</div><!-- /.col-md-4 -->
		      					<div class="col-md-4 col-md-offset-2 col-md-print-offset-25">
			      					<div class="input-group input-group-sm">
			        					<span class="input-group-addon" id="basic-addon">ASTENIA:</span>
			        					<div class="input-group-btn" data-toggle="buttons">
			       							<label class="btn btn-default active" onclick="letra_a(0)">
														<input type="radio" value="0" name="7-1rrb" autocomplete="off" checked="checked">0
														<span class="glyphicon glyphicon-ok"></span>
													</label>

													<label class="btn btn-default" onclick="letra_a(1)">
														<input type="radio" value="1" name="7-1rrb" autocomplete="off">1
														<span class="glyphicon glyphicon-ok"></span>
													</label>

													<label class="btn btn-default" onclick="letra_a(2)">
														<input type="radio" value="2" name="7-1rrb" autocomplete="off">2
														<span class="glyphicon glyphicon-ok"></span>
													</label>

													<label class="btn btn-default" onclick="letra_a(3)">
														<input type="radio" value="3" name="7-1rrb" autocomplete="off">3
														<span class="glyphicon glyphicon-ok"></span>
													</label>
			        					</div>
			      					</div>
		      					</div><!-- /.col-md-4 col-md-offset-2 -->
		      				</div>
		      				<div class="row">
			     					<div class="col-md-4">
			      					<div class="input-group input-group-sm">
				        				<span class="input-group-addon" id="basic-addon">TENSÃO:</span>
				        				<div class="input-group-btn" data-toggle="buttons">
				       						<label class="btn btn-default active" onclick="letra_s(0)">
														<input type="radio" value="0" name="7-1arb" autocomplete="off" checked="checked">0
														<span class="glyphicon glyphicon-ok"></span>
													</label>

													<label class="btn btn-default" onclick="letra_s(1)">
														<input type="radio" value="1" name="7-1arb" autocomplete="off">1
														<span class="glyphicon glyphicon-ok"></span>
													</label>

													<label class="btn btn-default" onclick="letra_s(2)">
														<input type="radio" value="2" name="7-1arb" autocomplete="off">2
														<span class="glyphicon glyphicon-ok"></span>
													</label>

													<label class="btn btn-default" onclick="letra_s(3)">
														<input type="radio" value="3" name="7-1arb" autocomplete="off">3
														<span class="glyphicon glyphicon-ok"></span>
													</label>
				        				</div>
			     						</div>
			      				</div><!-- /.col-md-4 -->
		      					<div class="col-md-4 col-md-offset-2 col-md-print-offset-25">
			      					<div class="input-group input-group-sm">
			        					<span class="input-group-addon" id="basic-addon">INSTABILIDADE:</span>
			        					<div class="input-group-btn" data-toggle="buttons">
			       							<label class="btn btn-default active" onclick="letra_i(0)">
														<input type="radio" value="0" name="7-1irb" autocomplete="off" checked="checked">0
														<span class="glyphicon glyphicon-ok"></span>
													</label>

													<label class="btn btn-default" onclick="letra_i(1)">
														<input type="radio" value="1" name="7-1irb" autocomplete="off">1
														<span class="glyphicon glyphicon-ok"></span>
													</label>

													<label class="btn btn-default" onclick="letra_i(2)">
														<input type="radio" value="2" name="7-1irb" autocomplete="off">2
														<span class="glyphicon glyphicon-ok"></span>
													</label>

													<label class="btn btn-default" onclick="letra_i(3)">
														<input type="radio" value="3" name="7-1irb" autocomplete="off">3
														<span class="glyphicon glyphicon-ok"></span>
													</label>
			        					</div>
			      					</div>
		      					</div><!-- /.col-md-4 col-md-offset-2 -->
		      				</div>
					      </div><!-- /.col-md-9 -->
					      <img src="imagens/legenda.png" class="legenda col-md-print-offset-5">
					    </div> 
					    <div class="col-md-3">
	  						<div class="input-group input-group-sm">
	  							<span class="input-group-addon"><strong>G:</strong></span>
	    						<span class="input-group-addon" style="background-color: #f2baba; border-color: #eaa1a1;">
	      						<span id="inp_letra_g">0</span>
	    						</span>

	        				<span class="input-group-addon"><strong>R:</strong></span>
	    						<span class="input-group-addon" style="background-color: #f2baba; border-color: #eaa1a1;">
	      						<span id="inp_letra_r">0</span>
	    						</span>

	    						<span class="input-group-addon"><strong>B:</strong></span>
	    						<span class="input-group-addon" style="background-color: #f2baba; border-color: #eaa1a1;">
	      						<span id="inp_letra_b">0</span>
	    						</span>

	    						<span class="input-group-addon"><strong>A:</strong></span>
	    						<span class="input-group-addon" style="background-color: #f2baba; border-color: #eaa1a1;">
	      						<span id="inp_letra_a">0</span>
	    						</span>

	    						<span class="input-group-addon"><strong>S:</strong></span>
	    						<span class="input-group-addon" style="background-color: #f2baba; border-color: #eaa1a1;">
	      						<span id="inp_letra_s">0</span>
	    						</span>

	    						<span class="input-group-addon"><strong>I:</strong></span>
	    						<span class="input-group-addon" style="background-color: #f2baba; border-color: #eaa1a1;">
	      						<span id="inp_letra_i">0</span>
	    						</span>	    							        		
	  						</div>
							</div><!-- /.col-md-3 -->
			      </div> 
		    	</div>
	    	</div><!-- /.col-md-12 -->
	    </div>
    </div>







		<!--LINHA 7.2 (CPFE_7_2, CPFD_7_2) -->
		<div class="row row col-md-10 col-md-offset-1" style="margin-top: 1.5%;">
		  <div class="col-md-3">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">CPFA <small>(fala espontânea):</small></span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao7">
			      	<option id="setselect7-3" value="">SELECIONE...</option>
							<option value="1">COORDENADA</option>
				      <option value="2">INCOORDENADA</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-3 -->
		  <div class="col-md-3 col-md-offset-1 col-md-print-offset-11">
			  <div class="input-group input-group-sm">
			  <span class="input-group-addon" id="basic-addon">CPFA <small>(fala dirigida):</small></span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao7">
			      	<option id="setselect7-4" value="">SELECIONE...</option>
							<option value="1">COORDENADA</option>
				      <option value="2">INCOORDENADA</option>
			      </select>
		    	</span>
			  </div><!-- /input-group -->
			</div><!-- /.col-md-3 col-md-offset-1 /// col-md-print-offset-11 -->		
		</div><!-- /.row -->








		<!--LINHA 7.3 (ATVE_7_3, ATVD_7_3) -->
		<div class="row row col-md-10 col-md-offset-1">
		  <div class="col-md-3">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">ATAQUE VOCAL <small>(fala espontânea):</small></span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao7">
			      	<option id="setselect7-5" value="">SELECIONE...</option>
							<option value="1">ISOCRÔNICO</option>
				      <option value="2">BRUSCO</option>
				      <option value="3">SOPROSO</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-3 -->
		  <div class="col-md-3 col-md-offset-1 col-md-print-offset-11">
			  <div class="input-group input-group-sm">
			  <span class="input-group-addon" id="basic-addon">ATAQUE VOCAL <small>(fala dirigida):</small></span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao7">
			      	<option id="setselect7-6" value="">SELECIONE...</option>
							<option value="1">ISOCRÔNICO</option>
				      <option value="2">BRUSCO</option>
				      <option value="3">SOPROSO</option>
			      </select>
		    	</span>
			  </div><!-- /input-group -->
			</div><!-- /.col-md-3 col-md-offset-1 /// col-md-print-offset-11 -->		
		</div><!-- /.row -->






		<!--LINHA 7.4 (PIT_7_4, LNS_7_4)-->
		<div class="row row col-md-10 col-md-offset-1">
		  <div class="col-md-3">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">PITCH <small>(sensação da frequência vocal):</small></span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao7">
			      	<option id="setselect7-7" value="">SELECIONE...</option>
							<option value="1">GRAVE</option>
				      <option value="2">MÉDIO</option>
				      <option value="3">AGUDO</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-3 -->
		  <div class="col-md-3 col-md-offset-1 col-md-print-offset-11">
			  <div class="input-group input-group-sm">
			  <span class="input-group-addon" id="basic-addon">LOUDNESS <small>(sensação da intensidade vocal):</small></span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao7">
			      	<option id="setselect7-8" value="">SELECIONE...</option>
							<option value="1">ADEQUADA</option>
				      <option value="2">FORTE</option>
				      <option value="3">FRACA</option>
			      </select>
		    	</span>
			  </div><!-- /input-group -->
			</div><!-- /.col-md-3 col-md-offset-1 /// col-md-print-offset-11 -->		
		</div><!-- /.row -->







		<!--LINHA 7.5 (RNC_7_5, TLG_7_5) -->
		<div class="row row col-md-10 col-md-offset-1">
		  <div class="col-md-3">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">RESSONÂNCIA:</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao7">
			      	<option id="setselect7-9" value="">SELECIONE...</option>
							<option value="1">EQUILIBRADA</option>
				      <option value="2">BAIXA</option>
				      <option value="3">ALTA</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-3 -->
		  <div class="col-md-3 col-md-offset-1 col-md-print-offset-11">
			  <div class="input-group input-group-sm">
			  <span class="input-group-addon" id="basic-addon">TENSÃO LARÍNGEA:</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao7">
			      	<option id="setselect7-10" value="">SELECIONE...</option>
							<option value="1">ADEQUADA</option>
				      <option value="2">AUMENTADA</option>
			      </select>
		    	</span>
			  </div><!-- /input-group -->
			</div><!-- /.col-md-3 col-md-offset-1 /// col-md-print-offset-11 -->			
		</div><!-- /.row -->







		<!--LINHA 7.7 (RCV_7_7)-->
		<div class="row row col-md-10 col-md-offset-1">
		  <div class="col-md-6">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">RESISTÊNCIA VOCAL:</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao7">
			      	<option id="setselect7-11" value="">SELECIONE...</option>
							<option value="1">MANTEVE-SE INALTERADA AO FINAL DA AVALIAÇÃO</option>
				      <option value="2">QUALIDADE VOCAL ALTEROU AO FINAL DA AVALIAÇÃO</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-6 -->		
		</div><!-- /.row -->







		<div class="row row col-md-10 col-md-offset-1" style="margin-top: 1.5%;">
		  <div class="col-md-3">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon" style="border: 1px solid #ccc; border-radius: 4px;"><strong>TEMPO MÁXIMO DE FONAÇÃO (TMF)</strong></span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-4 -->	
		</div>






		<!-- LINHA 7.9 (TMDF_7_9) -->
		<div class="row row col-md-10 col-md-offset-1">
		  <div class="col-md-4">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">É POSSÍVEL AVALIAR AS VOGAIS?</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao7" id="tmdf7-9" onblur="onblur_tmdf79()">
							<option value="0">NAO</option>
				      <option value="1">SIM</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-5 -->		
		</div><!-- /.row -->






		<!-- LINHA 7.10 (A_7_10, CB_A_7_10, I_7_10, CB_I_7_10, U_7_10, CB_U_7_10) -->
		<div class="collapse collapse_tmdf7-9 row row col-md-10 col-md-offset-13 vogais"> 
			<div class="row">
	  		<div class="col-md-4">
	    		<label>VOGAIS - NORMAL(NOR)  / REDUZIDO(RED)</label>
	 		 	</div><!-- /.col-md-4 -->
 		 	</div>
 		 	<div class="row">
	  		<div class="col-md-4">
	    		<label>VALORES DE REFERÊNCIA: MULHERES - 14seg  /  HOMENS - 20seg</label>
	 		 	</div><!-- /.col-md-4 -->
	 		</div>
		</div><!-- /.row -->
		<div class="collapse collapse_tmdf7-9 row row col-md-10 col-md-offset-1" style="margin-top: -0.6%;"> 
  		<div class="col-md-4">
    		<div class="input-group input-group-sm">
    			<span class="input-group-addon"><strong>[a]</strong></span>
    			<input type="text" class="form-control" name="sessao7" id="input_a">
      		<span class="input-group-addon" style="line-height: 0;">
        		<label class="vogaislbl"><input type="checkbox" class="vogaisinp" value="1" name="7-10acb"> NOR</label>
      		</span>
          <span class="input-group-addon" style="line-height: 0;">
          	<label class="vogaislbl"><input type="checkbox" class="vogaisinp" value="2" name="7-10acb"> RED</label>
      		</span> 
    		</div>
 		 	</div><!-- /.col-md-4 -->
  		<div class="col-md-4">
    		<div class="input-group input-group-sm">
    			<span class="input-group-addon"><strong>[i]</strong></span>
    			<input type="text" class="form-control" name="sessao7" id="input_i">
      		<span class="input-group-addon lineheight" style="line-height: 0;">
        		<label class="vogaislbl"><input type="checkbox" class="vogaisinp" value="1" name="7-10icb"> NOR</label>
      		</span>
          <span class="input-group-addon" style="line-height: 0;">
          	<label class="vogaislbl"><input type="checkbox" class="vogaisinp" value="2" name="7-10icb"> RED</label>
      		</span> 
    		</div>
 		 	</div><!-- /.col-md-4 -->
  		<div class="col-md-4">
    		<div class="input-group input-group-sm">
    			<span class="input-group-addon"><strong>[u]</strong></span>
    			<input type="text" class="form-control" name="sessao7" id="input_u">
      		<span class="input-group-addon" style="line-height: 0;">
        		<label class="vogaislbl"><input type="checkbox" class="vogaisinp" value="1" name="7-10ucb"> NOR</label>
      		</span>
          <span class="input-group-addon" style="line-height: 0;">
          	<label class="vogaislbl"><input type="checkbox" class="vogaisinp" value="2" name="7-10ucb"> RED</label>
      		</span> 
    		</div>
 		 	</div><!-- /.col-md-4 -->
		</div><!-- /.row -->






		<!-- LINHA 7.9 (TMDF_7_9) -->
		<div class="row row col-md-10 col-md-offset-1">
		  <div class="col-md-4">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">É POSSÍVEL AVALIAR A RELAÇÃO S/Z?</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao7" id="epasz7-9" onblur="onblur_epasz79()">
							<option value="0">NAO</option>
				      <option value="1">SIM</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-5 -->		
		</div><!-- /.row -->






		<!-- LINHA 7.11 (S_7_11, Z_7_11, RSZ_7_11) -->
		<div class="collapse collapse_epasz7-9 row row col-md-10 col-md-offset-13"> 
  		<div class="col-md-9">
    		<label>RELAÇÃO S/Z - = 1 (normal)  / &#8805 1,2 (sugestivo de patologia vocal e/ou falta de coaptação glótica)  /  &#8804 0,8 (sugestivo de hipercinesia laríngea) </label>
 		 	</div><!-- /.col-md-9 -->
		</div><!-- /.row -->
		<div class="collapse collapse_epasz7-9 row row col-md-10 col-md-offset-1" style="margin-top: -0.6%;"> 
  		<div class="col-md-6">
    		<div class="input-group input-group-sm">
    			<span class="input-group-addon"><strong>[s]</strong></span>
    			<input type="number" class="form-control" id="input_s" onblur="onblur_calc_sz()" name="sessao7">
    			<span class="input-group-addon"><strong>[z]</strong></span>
					<input type="number" class="form-control" id="input_z" onblur="onblur_calc_sz()" name="sessao7">
    			<span class="input-group-addon"><strong>Relação: s/z =</strong></span>
					<input type="number" class="form-control" step=0.01 id="input_sz" name="sessao7">
    		</div>  		
 		 	</div><!-- /.col-md-6 -->
		</div><!-- /.row -->






		<div class="collapse collapse_epasz7-9 row row col-md-10 col-md-offset-1">
		  <div class="col-md-6">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">RESULTADO:</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao7">
			      	<option id="setselect7-12" value="">SELECIONE...</option>
			      	<option value="1">NORMAL</option>
							<option value="2">SUGESTIVO DE PATOLOGIA VOCAL E/OU FALTA DE COAPTAÇÃO GLÓTICA</option>
				      <option value="3">SUGESTIVO DE HIPERCINESIA LARÍNGEA</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-4 -->	
		</div>






		<div class="row row col-md-10 col-md-offset-1" style="margin-top: 1.5%;">
		  <div class="col-md-3">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon" style="border: 1px solid #ccc; border-radius: 4px;"><strong>OUTROS ASPECTOS DA COMUNICAÇÃO</strong></span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-4 -->	
		</div>






		<!-- LINHA 7.13 (LAF_7_13, VEL_7_13, ART_7_13) -->
		<div class="row row col-md-10 col-md-offset-1">
		  <div class="col-md-3">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">FLUÊNCIA:</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao7">
			      	<option id="setselect7-12" value="">SELECIONE...</option>
							<option value="1">FLUENTE</option>
				      <option value="2">DISFLUENTE</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-4 -->	
		</div>

		<div class="row row col-md-10 col-md-offset-1">
		  <div class="col-md-3">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">VELOCIDADE:</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao7">
			      	<option id="setselect7-13" value="">SELECIONE...</option>
							<option value="1">ADEQUADA</option>
				      <option value="2">AUMENTADA</option>
				      <option value="3">DIMINUÍDA</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-4 col-md-offset-34 /// col-md-print-offset-10 -->	
		</div>

		<div class="row row col-md-10 col-md-offset-1">
		  <div class="col-md-3">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">ARTICULAÇÃO:</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao7">
			      	<option id="setselect7-14" value="">SELECIONE...</option>
							<option value="1">PRECISA</option>
				      <option value="2">IMPRECISA</option>
				      <option value="3">TRAVADA</option>
				      <option value="4">EXAGERADA</option>
				      <option value="5">OUTRA</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-2 col-md-offset-44 /// col-md-print-offset-6 -->	
		</div>

		<div class="row row col-md-10 col-md-offset-1">
		  <div class="col-md-3">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">DISTÚRBIO FONÉTICO:</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao7">
			      	<option id="setselect7-14" value="">SELECIONE...</option>
							<option value="1">CECEIO ANTERIOR</option>
				      <option value="2">CECEIO LATERAL</option>
				      <option value="3">OUTRO</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-2 col-md-offset-44 /// col-md-print-offset-6 -->	
		</div><!-- /.row -->






		<!-- LINHA 7.14 (AUD_7_14) -->
		<div class="row row col-md-10 col-md-offset-1">
		  <div class="col-md-5">
		    <div class="input-group input-group-sm">
		      <span class="input-group-addon" id="basic-addon">AUDIÇÃO:</span>
		  		<span class="input-group-btn">
			      <select class="btn" name="sessao7">
			      	<option id="setselect7-15" value="">SELECIONE...</option>
							<option value="1">NÃO SE OBSERVA ALTERAÇÃO DO COMPORTAMENTO AUDITIVO</option>
							<option value="2">OBSERVA-SE ALTERAÇÃO DO COMPORTAMENTO AUDITIVO</option>
			      </select>
		     	</span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-md-5 -->
			<div class="col-md-1 col-md-offset-37 col-md-print-offset-2">
	  		<button type="button" class="btn btn-danger btn-observacao" data-toggle="collapse" data-target="#obs7-14">OBSERVAÇÕES</button>
			</div><!-- /.col-md-1 col-md-offset-37 /// col-md-print-offset-2 -->			
		</div><!-- /.row -->






	  <!-- LINHA 7.15 (OBSERVAÇÕES NAO VÃO SER INCLUSAS NA ANÁLISE DE DADOS) -->
		<div class="collapse collapse_civo7-7 row row col-md-10 col-md-offset-1" id="obs7-14">
	    <div class="form-group">
		    <div style="padding-right: 0.5%; padding-left: 0.5%;">
		    	<label for="txtareaobs">Observações:</label>
			  	<textarea class="form-control" rows="3" id="txtareaobs"></textarea>
		    </div>
			</div>		
		</div>






		<!--######################################################################################################################
		##################################################      SESSAO 8     #####################################################
		##########################################################################################################################
		##########################################################################################################################-->

		<!--INICIO CABEÇALHO /// SESSÃO 8-->
		<img src="imagens/cabecalho8.png" class="col-md-10 col-md-offset-1">
			
		




		<!-- LINHA 8.0 (SFU_8_0) -->
		<div class="row row col-md-10 col-md-offset-1">
	  	<div class="col-md-4">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon"><i>SOFTWARE</i> UTILIZADO:</span>
	  			<span class="input-group-btn">
	        	<select class="btn" id="spfu" name="sessao8" onblur="onblur_spfu()">
							<option value="1">GRAM</option>
			        <option value="2">PRAAT</option>
			        <option value="3">OUTRO</option>
	        	</select>
      		</span>
	    	</div><!-- /input-group -->
	    </div><!-- /.col-md-4 -->
	    <div class="collapse collapse_spfu col-md-8 col-md-print-10 col-md-print-offset-13">
	    	<div class="input-group input-group-sm">
	      	<span class="input-group-addon" id="basic-addon">QUAL?</span>
	  			<input type="text" class="form-control" aria-describedby="basic-addon1"> 	
	    	</div><!-- /input-group -->
	  	</div><!-- /col-md-8 col-md-print-10 /// col-md-print-offset-13 -->
		</div><!-- /.row -->





		<!-- LINHA 8.0 (FDF_8_1, QDF_8_1, RUI_8_1, QDS_8_1, FDI_8_1, SBH_8_1, AVB_8_1, AVS_8_1) -->
		<div class="row row col-md-10 col-md-offset-1">
			<div class="col-md-6">
				<table class="table table-striped table-print" style="border-style: solid; border-color: black; border-width: 1px; font-size: 12px;">
	  			<thead>
	    			<tr class="bg-danger">
				      <td><strong>PARÂMETROS VOCAIS ACÚSTICOS</strong></td>
				      <td style="text-align: center;"><strong>SUSTENTAÇÃO DA VOGAL [a]</strong></td>
				    </tr>
	  			</thead>
	  			<tbody>
				    <tr>
				      <td scope="row">Flutuações de frequência</td>
				      <td style="text-align: center;"><input type="checkbox" value="1" name="8-1cb"></td>
				    </tr>
				    <tr>
				      <td scope="row">Quebras de frequência</td>
				      <td style="text-align: center;"><input type="checkbox" value="1" name="8-1cb"></td>
				    </tr>
				    <tr>
				      <td scope="row">Ruído</td>
				      <td style="text-align: center;"><input type="checkbox" value="1" name="8-1cb"></td>
				    </tr>
				    <tr>
				      <td scope="row">Quebras de sonoridade</td>
				      <td style="text-align: center;"><input type="checkbox" value="1" name="8-1cb"></td>
				    </tr>
				    <tr>
				      <td scope="row">Flutuações de intensidade</td>
				      <td style="text-align: center;"><input type="checkbox" value="1" name="8-1cb"></td>
				    </tr>
				    <tr>
				      <td scope="row">Sub-harmônicos</td>
				      <td style="text-align: center;"><input type="checkbox" value="1" name="8-1cb"></td>
				    </tr>
				    <tr>
				      <td scope="row">Ataque vocal: Brusco</td>
				      <td style="text-align: center;"><input type="checkbox" value="1" name="8-1cb"></td>
				    </tr>
				    <tr>
				      <td scope="row">Ataque vocal: Soproso</td>
				      <td style="text-align: center;"><input type="checkbox" value="1" name="8-1cb"></td>
				    </tr>
	  			</tbody>
				</table>
			</div><!-- /.col-md-6 -->	
			<div class="col-md-6">
		  	<button type="button" class="btn btn-danger btn-observacao" data-toggle="collapse" data-target="#obs8-1">OBSERVAÇÕES</button>
		  	<div class="collapse form-group" id="obs8-1">
			    <div style="padding-right: 0.5%; padding-left: 0.5%; margin-top: 2%;">
			    	<label for="txtareaobs" style="margin-left: 0.3%;">Observações:</label>
				  	<textarea class="form-control" rows="5" id="txtareaobs"></textarea>
			    </div>
				</div>
			</div><!-- /.col-md-6 -->		
		</div><!-- /.row -->		





		<!--######################################################################################################################
		##################################################      SESSAO 9     #####################################################
		##########################################################################################################################
		##########################################################################################################################-->

		<!--INICIO CABEÇALHO /// SESSÃO 9-->	
		<div class="row row col-md-10 col-md-offset-1">
			<h6 style="page-break-after: always;"></h6>
			<img src="imagens/cabecalho9.png" class="col-md-12">
		</div>  
		
		
		
	
		<div class="row row fotter col-md-10 col-md-offset-1">
			<!-- <button type="" onclick="avaliacao_perceptivo(2)">insert function</button>
			<button type="" onclick="start_insert()">teste name function</button> -->
			<button type="button" class="btn btn-info" onclick="start_insert()">AQUI</button>
			<button type="button" class="btn btn-info" onclick="saude_vocal('1')">AQUI TESTE</button>
			
		</div>		




		<div class="modal fade" id="loading_modal" role="dialog">
			<div class="progress">
			  <div class="circle">
			    <span class="label">1</span>
			    <span class="title">Identificação</span>
			  </div>
			  <span class="bar"></span>
			  <div class="circle">
			    <span class="label">2</span>
			    <span class="title">Finalidade</span>
			  </div>
			  <span class="bar"></span>
			  <div class="circle">
			    <span class="label">3</span>
			    <span class="title">Complem.</span>
			  </div>
			  <span class="bar"></span>
			  <div class="circle">
			    <span class="label">3</span>
			    <span class="title">Cargos</span>
			  </div>
			  <span class="bar"></span>
			  <div class="circle">
			    <span class="label">4</span>
			    <span class="title">Saú.Geral</span>
			  </div>
			  <span class="bar"></span>
			  <div class="circle">
			    <span class="label">5</span>
			    <span class="title">Háb.Vocais</span>
			  </div>
			  <span class="bar"></span>
			  <div class="circle">
			    <span class="label">6</span>
			    <span class="title">Saú.Vocal</span>
			  </div>
			  <span class="bar"></span>
			  <div class="circle">
			    <span class="label">7</span>
			    <span class="title">Perceptivo</span>
			  </div>
			  <span class="bar"></span>
				<div class="circle">
					<span class="label">8</span>
					<span class="title">Espectro.</span>
				</div>
			</div>
  	</div>



	</body>
		<script src="js/jquery.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<!-- FUNÇÕES DE DATA -->
		<script src="js/jquery.datetimepicker.full.min.js"></script>
		<script src="js/date.js"></script>

		<!-- FUNÇÕES DE CONFIGURAÇÃO DO INDEX -->
		<script src="js/formulario_config.js"></script>

		<!-- SCRIPTS DE INSERT PARA CADA SESSAO -->
		<script src="js/insert_files/insert_start.js"></script>
		<script src="js/insert_files/insert_identificacao.js"></script>
		<script src="js/insert_files/insert_finalidade.js"></script>
		<script src="js/insert_files/insert_complementares.js"></script>
		<script src="js/insert_files/insert_saude_geral.js"></script>
		<script src="js/insert_files/insert_habitos.js"></script>
		<script src="js/insert_files/insert_saude_vocal.js"></script>
		<script src="js/insert_files/insert_avaliacao_perceptivo.js"></script>
		<script src="js/insert_files/insert_avaliacao_espectrografica.js"></script>

		<!-- FUNÇÕES DE CONFIGURAÇÃO DO FORMULÁRIO DE CADA SESSAO -->
		<script src="js/scripts_identificacao/identificacao.js"></script>
		<script src="js/scripts_finalidade/finalidade.js"></script>
		<script src="js/scripts_complementares/complementares.js"></script>
		<script src="js/scripts_saude_geral/saude_geral.js"></script>
		<script src="js/scripts_habitos/habitos.js"></script>
		<script src="js/scripts_saude_vocal/saude_vocal.js"></script>
		<script src="js/scripts_avaliacao_perceptivo/avaliacao_perceptivo.js"></script>
		<script src="js/scripts_avaliacao_espectrografica/avaliacao_espectrografica.js"></script>

		<!-- FUNÇÃO DE LOADING -->
		<script src="js/loading_script/loading.js"></script>
</html>