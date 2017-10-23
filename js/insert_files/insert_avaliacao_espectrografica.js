// 8° FASE >>> FASE DE INSERTS NA TABELA DE AVALIACAO ESPECTROGRAFICA
function avalicao_espectrografica(id_da_finalidade){

	var vet = new Array();
	var sessao = document.getElementsByName("sessao8");
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
	}

	var sessao = document.getElementsByName("8-1cb");
	var vetcb = new Array();
	for(var i = 0; i < sessao.length; i++){
		if(sessao[i].checked){
			vetcb[i] = sessao[i].value;
		}else{
			vetcb[i] = '0';
		}
		
	}
	vet.push(vetcb);
	vet.push(id_da_finalidade);
	console.log(vet);

	$.ajax({
		type : "GET",
		url : url+"avaliacao_espectrografica.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				alert("fase de avaliacao espectrografica concluida com sucesso!");
				//complementares(json['id']);
			}else{
				alert("Erro na inserção de dados de avaliacao espectrografica");
			}
		},
		error: function (e) {
    		//escrever aquiiiiiiiii
		} 
	});

}