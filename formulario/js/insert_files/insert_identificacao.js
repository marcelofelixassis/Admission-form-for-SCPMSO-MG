// 1º FASE >>> FASE DE INSERTS E VERIFICAÇÕES NA TABELA DE IDENTIFICAÇÃO
function identificacao(){
	if(verification()){
	    $("#loading_modal").modal(); //EXIBINDO O MODAL ONDE FICAM OS CIRCULOS DE CARREGAMENTO
		loading(1, true); //PASSANDO PARAMETROS PARA CLASS QUE ANIMA OS CIRCULOS DE CARREGAMEN - TRUE = NÃO TEVE ERROS
		var sessao = document.getElementsByName("sessao1");
		var vet = new Array();
		for(var i = 0; i < sessao.length; i++){
			vet[i] = sessao[i].value;
			console.log(i+" = "+sessao[i].value);
		}
		$.ajax({
			type : "GET",
			url : url+"identificacao.php?data="+JSON.stringify(vet),
			contentType: content,
			success: function (response) {
				var json = JSON.parse(response);
				if(json['success']){
					finalidade(json['id']);
					loading(2, true);
				}else{
					loading(1, false); //FALSE = TEVE ERROS
				}
			},
			error: function (e) {
				console.log(e);
				loading(1, false);
			} 
		});	
	}else{ //CASO EXISTA ALGUM CAMPO EM BRANCO RETORNA UM ALERT E NAO EXECUTA O INSERT NO BANCO
		alert("Identificação incompleta!");
	}
}

// VERIFICANDO SE TODOS OS CAMPOS COM NAME = 'SESSAO1' ESTÃO PREENCHIDOS
function verification(){
	var sessao = document.getElementsByName("sessao1");
	var retorno = true;
	for(var i = 0; i < sessao.length; i++){
		console.log(sessao[i].value);
		if(sessao[i].value === ""){
			retorno = false;
		}
	}
	return retorno;
}