function insert_obs(id_da_finalidade){
	var sessao = document.getElementsByName("textobs");
	var vet = new Array();
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}
	vet.push(id_da_finalidade);
	
	console.log(vet);

	$.ajax({
		type : "GET",
		url : url+"obs.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				window.location.replace("http://10.16.90.76");
			}else{
				console.log("erro no insert das observações");
			}
		},
		error: function (e) {
    		console.log(e);
		} 
	});	
}