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
	vet.push(getcheckboxs(document.getElementsByName("4-3cb"))); // metodo para pegar checkbox q estao marcados dando um grupo de cb
	vet.push(getcheckboxs(document.getElementsByName("4-4cb")));
	vet.push(getcheckboxs(document.getElementsByName("4-5cb")));
	vet.push(getcheckboxs(document.getElementsByName("4-6cb")));
	vet.push(id_da_finalidade); // add ao final do array o id da finalidade para usarmos como fk

	$.ajax({
		type : "GET",
		url : url+"saude_geral.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				habitos(id_da_finalidade);
				loading(6, true);
			}else{
				loading(5, false);
			}
		},
		error: function (e) {
    		console.log(e);
    		loading(5, false);
		} 
	});	
}

//pegar cb marcados
function getcheckboxs(elemento){
	var union = new Array();
	for(var i = 0; i < elemento.length; i++){
		if (elemento[i].checked){
			union.push(elemento[i].value);
		}
	}
	return union.toString();
}