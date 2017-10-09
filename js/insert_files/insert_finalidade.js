// 2° FASE >>> FASE DE INSERTS NA TABELA DE FINALIDADE
function finalidade(id_da_pessoa){
	console.log("----------------------- o id retornado é "+id_da_pessoa);

	var sessao = document.getElementsByName("sessao2");
	var vet = new Array();
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}
	vet[sessao.length] = id_da_pessoa;
	$.ajax({
		type : "GET",
		url : url+"finalidade.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				alert("fase de finalidade concluida com sucesso!");
				complementares(json['id']);
			}else{
				alert("Erro na inserção de dados de finalidade");
			}
		},
		error: function (e) {
    		//escrever aquiiiiiiiii
		} 
	});
}