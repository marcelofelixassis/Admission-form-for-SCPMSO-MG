// 4° FASE >>> FASE DE INSERTS NA TABELA DE SAUDE GERAL
function saude_geral(id_da_finalidade){
	var sessao = document.getElementsByName("sessao4");
	var vet = new Array();
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}
	vet.push(getcheckboxs(document.getElementsByName("4-0cb")));
	vet.push(getcheckboxs(document.getElementsByName("4-1cb")));
	vet.push(getcheckboxs(document.getElementsByName("4-2cb")));
	vet.push(getcheckboxs(document.getElementsByName("4-3cb")));
	vet.push(getcheckboxs(document.getElementsByName("4-4cb")));
	vet.push(getcheckboxs(document.getElementsByName("4-5cb")));
	vet.push(getcheckboxs(document.getElementsByName("4-6cb")));
	vet.push(id_da_finalidade);

	console.log(JSON.stringify(vet));

	$.ajax({
		type : "GET",
		url : url+"saude_geral.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				alert("fase de saude geral concluida com sucesso!");
				habitos(id_da_finalidade);
			}else{
				alert("Erro na inserção de dados de saude geral");
			}
		},
		error: function (e) {
    		//escrever aquiiiiiiiii
		} 
	});	
}

function getcheckboxs(elemento){
	var union = new Array();
	for(var i = 0; i < elemento.length; i++){
		if (elemento[i].checked){
			union.push(elemento[i].value);
		}
	}
	return union.toString();
}