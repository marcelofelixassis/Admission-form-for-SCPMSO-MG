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

	$.ajax({
		type : "GET",
		url : url+"avaliacao_espectrografica.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				parecer_fono(id_da_finalidade);
				loading(10, true);
			}else{
				loading(9, false);
			}
		},
		error: function (e) {
    		console.log(e);
    		loading(9, false);
		} 
	});

}