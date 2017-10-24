// 1º FASE >>> FASE DE INSERTS E VERIFICAÇÕES NA TABELA DE IDENTIFICAÇÃO
function identificacao(){
	if(verification()){
	    $("#loading_modal").modal();
		loading(1, true);
		var sessao = document.getElementsByName("sessao1");
		var vet = new Array();
		for(var i = 0; i < sessao.length; i++){
			vet[i] = sessao[i].value;
			console.log(i+" = "+sessao[i].value);
		}
		$.ajax({
			type : "GET",
			url : url+"identificacao.php?data="+JSON.stringify(vet),
			contentType: content,
			success: function (response) {
				var json = JSON.parse(response);
				if(json['success']){
					finalidade(json['id']);
					loading(2, true);
				}else{
					loading(1, false);
				}
			},
			error: function (e) {
				console.log(e);
				loading(1, false);
			} 
		});	
	}else{
		alert("Identificação incompleta!")
	}
}


function verification(){
	var sessao = document.getElementsByName("sessao1");
	var retorno = true;
	for(var i = 0; i < sessao.length; i++){
		if(sessao[i].value === ""){
			retorno = false;
		}
	}
	return retorno;
}