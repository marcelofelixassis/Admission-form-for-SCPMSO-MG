// 6° FASE >>> FASE DE INSERTS NA TABELA DE SAUDE_VOCAL
function saude_vocal(id_da_finalidade){
	var sessao = document.getElementsByName("sessao6");
	var vet = new Array();
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}
	vet.push(getcheckboxs(document.getElementsByName("6-1cb")));
	vet.push(getcheckboxs(document.getElementsByName("6-4cb")));
	vet.push(id_da_finalidade);

	$.ajax({
		type : "GET",
		url : url+"saude_vocal.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				alert("fase de saude vocal concluida com sucesso!");
			}else{
				alert("Erro na inserção de dados de saude vocal");
			}
		},
		error: function (e) {
    		//escrever aquiiiiiiiii
		} 
	});	
}