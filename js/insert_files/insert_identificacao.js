// 1º FASE >>> FASE DE INSERTS E VERIFICAÇÕES NA TABELA DE IDENTIFICAÇÃO
function identificacao(){
	if(verification()){
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
					alert("fase de identificação concluida com sucesso!");
					finalidade(json['id']);
				}else{
					alert("Erro na inserção de dados de identificação");
				}
			},
			error: function (e) {
				//escrever aquiiiiiiiii
			} 
		});	
	}else{
		alert("É preciso preencher todos os campos de Identificação Do(a) Periciando(a)")
	}
}


function verification(){
	var sessao = document.getElementsByName("sessao1");
	var retorno = true;
	for(var i = 0; i < sessao.length; i++){
		if(sessao[i].value === ""){
			retorno = false;
		}
	}
	return retorno;
}