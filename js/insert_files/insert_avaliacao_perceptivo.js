// 7° FASE >>> FASE DE INSERTS NA TABELA DE AVALIACAO PERCEPTIVO
function avaliacao_perceptivo(id_da_finalidade){
	console.log("----------------------- o id retornado é "+id_da_finalidade);

	var vet = new Array();
	var sessao = document.getElementsByName("sessao7");
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
	}

	var vetrb = new Array();
	var sessao = document.getElementsByName("7-1grb");
	vetrb.push(getradiobuttons(sessao))

	var sessao = document.getElementsByName("7-1srb");
	vetrb.push(getradiobuttons(sessao))

	var sessao = document.getElementsByName("7-1trb");
	vetrb.push(getradiobuttons(sessao))

	var sessao = document.getElementsByName("7-1rrb");
	vetrb.push(getradiobuttons(sessao))

	var sessao = document.getElementsByName("7-1arb");
	vetrb.push(getradiobuttons(sessao))

	var sessao = document.getElementsByName("7-1irb");
	vetrb.push(getradiobuttons(sessao))

	vet.push(vetrb);

	var vetcb = new Array();
	vetcb.push(getcheckboxs(document.getElementsByName("7-10acb")));
	vetcb.push(getcheckboxs(document.getElementsByName("7-10icb")));
	vetcb.push(getcheckboxs(document.getElementsByName("7-10ucb")));

	vet.push(vetcb);
	vet.push(id_da_finalidade);

	console.log(vet);

	$.ajax({
		type : "GET",
		url : url+"avaliacao_perceptivo.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				avalicao_espectrografica(id_da_finalidade);
				loading(9, true);
			}else{
				loading(8, false);
			}
		},
		error: function (e) {
			console.log(e);
			loading(8, false);
		} 
	});
}