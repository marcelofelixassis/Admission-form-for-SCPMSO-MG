// 2° FASE >>> FASE DE INSERTS NA TABELA DE FINALIDADE
function finalidade(id_da_pessoa){
	console.log("o id retornado é "+id_da_pessoa);

	var sessao = document.getElementsByName("sessao2");
	var vet = new Array();
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}
	vet.push(getcheckboxs(document.getElementsByName("2-2cb"))); // getcheckboxs() retorna os checkbox marcdos do grupo de cb passados como parametro
	vet.push(id_da_pessoa); //coloca o parametro no final do array
	console.log(vet);
	$.ajax({
		type : "GET",
		url : url+"finalidade.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				complementares(json['id']);
				loading(3, true);// true = passamos para a proxima sessão
			}else{
				loading(2, false); //FALSE = TEVE ERROS
			}
		},
		error: function (e) {
			console.log(e);
    		loading(2, false);
		} 
	});
}