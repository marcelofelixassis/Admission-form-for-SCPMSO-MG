// 3° FASE >>> FASE DE INSERTS NA TABELA DE COMPLEMENTARES
function complementares(id_da_finalidade){
	console.log("o id retornado é "+id_da_finalidade);	//pega todos os resultados dos campos com name = sessao3 e coloca no vetor vet
	var sessao = document.getElementsByName("sessao3");
	var vet = new Array();
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}


	if(sessao[2]){ //verifica se foi marcado sim ou nao no select 'atividades para uso... (anterior)'
		vet.push(getcheckboxs(document.getElementsByName("3-9cb"))); // getcheckboxs retorna os cb marcados de um grupo de checkbox, e os add no vetor vet 
	}else{
		vet.push(""); //caso marque 'nao' no select ele preenche com um valor vazio
	}


	if(sessao[3]){ //verifica se foi marcado sim ou nao no select 'atividades para uso... (atual)'
		vet.push(getcheckboxs(document.getElementsByName("3-10cb"))); // getcheckboxs retorna os cb marcados de um grupo de checkbox, e os add no vetor vet
	}else{
		vet.push(""); //caso marque 'nao' no select ele preenche com um valor vazio
	}

	vet.push(id_da_finalidade); //add ao vetor vet o id da finalidade para o relacionamento no bd

	console.log(JSON.stringify(vet));
	$.ajax({
		type : "GET",
		url : url+"complementares.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				console.log(json);
				cargos_atuais_anteriores(id_da_finalidade, json['id'], sessao[0].value, sessao[1].value); //chama a funcao que é responsavel por inserir no banco os cargos atuais e anteriores
				loading(4, true);
			}else{
				loading(3, false);
			}
		},
		error: function (e) {
			console.log(e);
    		loading(3, false);
		} 
	});	
}



function cargos_atuais_anteriores(id_da_finalidade, id_da_complementares, sessao_atuais, sessao_anteriores){
	if(sessao_atuais > 0){ //verifica quantos cargos o usuario selecionou e faz um switch para chamar o numero exato de metodos de preenchimento de cargos anteriores
		switch(sessao_atuais){
			case "1":
				cargos_atuais_1(id_da_complementares); //passando como parametro o id de complementares para preencher a fk
			break;

			case "2":
				cargos_atuais_1(id_da_complementares);
				cargos_atuais_2(id_da_complementares);
			break;

			case "3":
				cargos_atuais_1(id_da_complementares);
				cargos_atuais_2(id_da_complementares);
				cargos_atuais_3(id_da_complementares);
			break;
		}
	}

	if(sessao_anteriores > 0){ //verifica quantos cargos anteriores o usuario selecionou
		switch(sessao_anteriores){
			case "1":
				cargos_anteriores_1(id_da_complementares);
			break;

			case "2":
				cargos_anteriores_1(id_da_complementares);
				cargos_anteriores_2(id_da_complementares);
			break;

			case "3":
				cargos_anteriores_1(id_da_complementares);
				cargos_anteriores_2(id_da_complementares);
				cargos_anteriores_3(id_da_complementares);
			break;

			case "4":
				cargos_anteriores_1(id_da_complementares);
				cargos_anteriores_2(id_da_complementares);
				cargos_anteriores_3(id_da_complementares);
				cargos_anteriores_4(id_da_complementares);
			break;
		}
		saude_geral(id_da_finalidade); //chama o proximo arquivo de inserir dados
		loading(5, true);
	}else{
		saude_geral(id_da_finalidade);
		loading(5, true);
	}	
}



/*
*
* METODOS DE INSERIR CARGOS ATUAIS
*/

function cargos_atuais_1(id_da_complementares){
	var sessao = document.getElementsByName("sessao3-1");
	var vet = new Array();
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}
	vet.push(getcheckboxs(document.getElementsByName("3-1-3cb")));
	vet.push(id_da_complementares);
	vet.push(1); // NUMERO 1
	$.ajax({
		type : "GET",
		url : url+"cargos_atuais.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				console.log("adicionado 1º cargo atual com sucesso!");							
			}else{
				console.log("Erro na inserção do 1º cargo atual");
			}
		},
		error: function (e) {
			console.log(e);
		} 
	});		
}

function cargos_atuais_2(id_da_complementares){
	var sessao = document.getElementsByName("sessao3-2");
	var vet = new Array();
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}
	vet.push(getcheckboxs(document.getElementsByName("3-2-3cb")));
	vet.push(id_da_complementares);
	vet.push(2); // NUMERO 2
	$.ajax({
		type : "GET",
		url : url+"cargos_atuais.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				console.log("adicionado 2º cargo atual com sucesso!");							
			}else{
				console.log("Erro na inserção do 2º cargo atual");
			}
		},
		error: function (e) {
			console.log(e);
		} 
	});		
}

function cargos_atuais_3(id_da_complementares){
	var sessao = document.getElementsByName("sessao3-3");
	var vet = new Array();
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}
	vet.push(getcheckboxs(document.getElementsByName("3-3-3cb")));
	vet.push(id_da_complementares);
	vet.push(3); // NUMERO 3
	$.ajax({
		type : "GET",
		url : url+"cargos_atuais.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				console.log("adicionado 3º cargo atual com sucesso!");							
			}else{
				console.log("Erro na inserção do 3º cargo atual");
			}
		},
		error: function (e) {
			console.log(e);
		} 
	});		
}





/*
*
*METODOS DE INSERIR CARGOS ANTERIORES
*/


function cargos_anteriores_1(id_da_complementares){
	var sessao = document.getElementsByName("sessao3-5");
	var vet = new Array();
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}
	vet.push(id_da_complementares);
	vet.push(1); // NUMERO 1
	$.ajax({
		type : "GET",
		url : url+"cargos_anteriores.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				console.log("adicionado 1º cargo anterior com sucesso!");							
			}else{
				console.log("Erro na inserção do 1º cargo anterior");
			}
		},
		error: function (e) {
			console.log(e);
		} 
	});		
}

function cargos_anteriores_2(id_da_complementares){
	var sessao = document.getElementsByName("sessao3-6");
	var vet = new Array();
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}
	vet.push(id_da_complementares);
	vet.push(2); // NUMERO 2
	$.ajax({
		type : "GET",
		url : url+"cargos_anteriores.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				console.log("adicionado 2º cargo anterior com sucesso!");							
			}else{
				console.log("Erro na inserção do 2º cargo anterior");
			}
		},
		error: function (e) {
			console.log(e);
		} 
	});		
}

function cargos_anteriores_3(id_da_complementares){
	var sessao = document.getElementsByName("sessao3-7");
	var vet = new Array();
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}
	vet.push(id_da_complementares);
	vet.push(3); // NUMERO 3
	$.ajax({
		type : "GET",
		url : url+"cargos_anteriores.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				console.log("adicionado 3º cargo anterior com sucesso!");							
			}else{
				console.log("Erro na inserção do 3º cargo anterior");
			}
		},
		error: function (e) {
			console.log(e);
		} 
	});		
}

function cargos_anteriores_4(id_da_complementares){
	var sessao = document.getElementsByName("sessao3-8");
	var vet = new Array();
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}
	vet.push(id_da_complementares);
	vet.push(4); // NUMERO 4
	$.ajax({
		type : "GET",
		url : url+"cargos_anteriores.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				console.log("adicionado 4º cargo anterior com sucesso!");							
			}else{
				console.log("Erro na inserção do 4º cargo anterior");
			}
		},
		error: function (e) {
			console.log(e);
		} 
	});		
}