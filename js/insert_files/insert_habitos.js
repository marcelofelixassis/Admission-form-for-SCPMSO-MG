// 5° FASE >>> FASE DE INSERTS NA TABELA DE HABITOS
function habitos(id_da_finalidade){
	var sessao = document.getElementsByName("sessao5");
	var vet = new Array();
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}
	vet.push(getcheckboxs(document.getElementsByName("5-2cb")));
	vet.push(id_da_finalidade);

	$.ajax({
		type : "GET",
		url : url+"habitos.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				saude_vocal(id_da_finalidade);
				loading(7, true);
			}else{
				loading(6, false);
			}
		},
		error: function (e) {
			loading(6, false);
    		console.log(e);
		} 
	});	
}