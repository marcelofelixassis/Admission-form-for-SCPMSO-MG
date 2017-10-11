// 7° FASE >>> FASE DE INSERTS NA TABELA DE AVALIACAO PERCEPTIVO
function avaliacao_perceptivo(id_da_finalidade){
	console.log("----------------------- o id retornado é "+id_da_finalidade);

	var vet = new Array();
	var sessao = document.getElementsByName("sessao7");
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
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
	
	for(var i = 0; i < sessao.length; i++){
		if(sessao[i].checked){
			console.log(sessao[i].value);
		}
	}

	var vetcb = new Array();
	vetcb.push(getcheckboxs(document.getElementsByName("7-10acb")));
	vetcb.push(getcheckboxs(document.getElementsByName("7-10icb")));
	vetcb.push(getcheckboxs(document.getElementsByName("7-10ucb")));

	vet.push(vetcb);
	vet.push(id_da_finalidade);

	$.ajax({
		type : "GET",
		url : url+"avaliacao_perceptivo.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				alert("fase de avaliacao perceptivo concluida com sucesso!");
				//complementares(json['id']);
			}else{
				alert("Erro na inserção de dados de avaliacao perceptivo");
			}
		},
		error: function (e) {
    		//escrever aquiiiiiiiii
		} 
	});
}