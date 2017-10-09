// 3° FASE >>> FASE DE INSERTS NA TABELA DE COMPLEMENTARES
function complementares(id_da_finalidade){
	console.log("----------------------- o id retornado é "+id_da_finalidade);	
	var sessao = document.getElementsByName("sessao3");
	var vet = new Array();
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}


	if(sessao[2]){
		var sessao39cb = document.getElementsByName("3-9cb");
		var aux = new Array();
			for(var i = 0; i < sessao39cb.length; i++){
			if (sessao39cb[i].checked){
				aux.push(sessao39cb[i].value);
			}
		}
		vet.push(aux.toString());
	}else{
		vet.push("");
	}


	if(sessao[3]){
		var sessao310cb = document.getElementsByName("3-10cb");
		var aux = new Array();
			for(var i = 0; i < sessao310cb.length; i++){
			if (sessao310cb[i].checked){
				aux.push(sessao310cb[i].value);
			}
		}
		vet.push(aux.toString());
	}else{
		vet.push("");
	}


	vet.push(id_da_finalidade);
	$.ajax({
		type : "GET",
		url : url+"complementares.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				alert("fase de complementares concluida com sucesso!");
				cargos_atuais_anteriores(id_da_finalidade, json['id'], sessao[0].value, sessao[1].value);
			}else{
				alert("Erro na inserção de dados de complementares");
			}
		},
		error: function (e) {
    		//escrever aquiiiiiiiii
		} 
	});	
}



function cargos_atuais_anteriores(id_da_finalidade, id_da_complementares, sessao_atuais, sessao_anteriores){
	if(sessao_atuais > 0){
		console.log(sessao_atuais);
		switch(sessao_atuais){
			case "1":
				cargos_atuais_1(id_da_complementares);
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

	if(sessao_anteriores > 0){
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
		saude_geral(id_da_finalidade);
	}else{
		saude_geral(id_da_finalidade);
	}	
}





function cargos_atuais_1(id_da_complementares){
	var sessao = document.getElementsByName("sessao3-1");
	var vet = new Array();
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}
	vet.push(id_da_complementares);
	vet.push(1);
	$.ajax({
		type : "GET",
		url : url+"cargos_atuais.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				alert("adicionado 1º cargo atual com sucesso!");							
			}else{
				alert("Erro na inserção do 1º cargo atual");
			}
		},
		error: function (e) {
			//escrever aquiiiiiiiii
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
	vet.push(id_da_complementares);
	vet.push(2);
	$.ajax({
		type : "GET",
		url : url+"cargos_atuais.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				alert("adicionado 2º cargo atual com sucesso!");							
			}else{
				alert("Erro na inserção do 2º cargo atual");
			}
		},
		error: function (e) {
			//escrever aquiiiiiiiii
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
	vet.push(id_da_complementares);
	vet.push(3);
	$.ajax({
		type : "GET",
		url : url+"cargos_atuais.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				alert("adicionado 3º cargo atual com sucesso!");							
			}else{
				alert("Erro na inserção do 3º cargo atual");
			}
		},
		error: function (e) {
			//escrever aquiiiiiiiii
		} 
	});		
}








function cargos_anteriores_1(id_da_complementares){
	var sessao = document.getElementsByName("sessao3-5");
	var vet = new Array();
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}
	vet.push(id_da_complementares);
	vet.push(1);
	$.ajax({
		type : "GET",
		url : url+"cargos_anteriores.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				alert("adicionado 1º cargo anterior com sucesso!");							
			}else{
				alert("Erro na inserção do 1º cargo anterior");
			}
		},
		error: function (e) {
			//escrever aquiiiiiiiii
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
	vet.push(2);
	$.ajax({
		type : "GET",
		url : url+"cargos_anteriores.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				alert("adicionado 2º cargo anterior com sucesso!");							
			}else{
				alert("Erro na inserção do 2º cargo anterior");
			}
		},
		error: function (e) {
			//escrever aquiiiiiiiii
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
	vet.push(3);
	$.ajax({
		type : "GET",
		url : url+"cargos_anteriores.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				alert("adicionado 3º cargo anterior com sucesso!");							
			}else{
				alert("Erro na inserção do 3º cargo anterior");
			}
		},
		error: function (e) {
			//escrever aquiiiiiiiii
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
	vet.push(4);
	$.ajax({
		type : "GET",
		url : url+"cargos_anteriores.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				alert("adicionado 4º cargo anterior com sucesso!");							
			}else{
				alert("Erro na inserção do 4º cargo anterior");
			}
		},
		error: function (e) {
			//escrever aquiiiiiiiii
		} 
	});		
}





