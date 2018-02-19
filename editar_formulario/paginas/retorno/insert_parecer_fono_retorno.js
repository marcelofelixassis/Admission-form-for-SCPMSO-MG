// 8° FASE >>> FASE DE INSERTS NA TABELA DE AVALIACAO ESPECTROGRAFICA
function insert_parecer_fono_retorno(){
    
    if (verification_buttons()) {

        var vet = new Array();
        var sessao = document.getElementsByName("sessao_retorno");
        for(var i = 0; i < sessao.length; i++){
            vet[i] = sessao[i].value;
        }

        vet.push(getcheckboxs(document.getElementsByName("9-2cb_retorno")));
        //------------------------------------------------------------------------------------------
        if($('#agpv').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
        
        if($('#ede').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
        vet.push(getcheckboxs(document.getElementsByName("9-5-0cb_retorno")));
        vet.push(getcheckboxs(document.getElementsByName("9-5-1cb_retorno")));

        if($('#hip').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
        vet.push(getcheckboxs(document.getElementsByName("9-6-0cb_retorno")));
        vet.push(getcheckboxs(document.getElementsByName("9-6-1cb_retorno")));
        vet.push(getcheckboxs(document.getElementsByName("9-6-2cb_retorno")));

        if($('#ava').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
        vet.push(getcheckboxs(document.getElementsByName("9-7-0cb_retorno")));
        vet.push(getcheckboxs(document.getElementsByName("9-7-1cb_retorno")));
        vet.push(getcheckboxs(document.getElementsByName("9-7-2cb_retorno")));
        //------------------------------------------------------------------------------------------
        if($('#bli').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }

        if($('#ibi').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
        vet.push(getcheckboxs(document.getElementsByName("9-9-0cb_retorno")));
        vet.push(getcheckboxs(document.getElementsByName("9-9-1cb_retorno")));
        
        if($('#iud').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
        vet.push(getcheckboxs(document.getElementsByName("9-10-0cb_retorno")));
        vet.push(getcheckboxs(document.getElementsByName("9-10-1cb_retorno")));
        
        if($('#iue').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
        vet.push(getcheckboxs(document.getElementsByName("9-11-0cb_retorno")));
        vet.push(getcheckboxs(document.getElementsByName("9-11-1cb_retorno")));
        
        if($('#rco').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
        
        if($('#dep').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
        vet.push(getcheckboxs(document.getElementsByName("9-13-0cb_retorno")));
        vet.push(getcheckboxs(document.getElementsByName("9-13-1cb_retorno")));
        
        if($('#hipe').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
        //------------------------------------------------------------------------------------------
        if($('#cgl').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
        vet.push(getcheckboxs(document.getElementsByName("9-15-0cb_retorno")));
        vet.push(getcheckboxs(document.getElementsByName("9-15-1cb_retorno")));
        //------------------------------------------------------------------------------------------
        if($('#mmo').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
        vet.push(getcheckboxs(document.getElementsByName("9-16-0cb_retorno")));

        vet.push(document.getElementById("textobsretorno").value);
        
        vet.push(finalidade);

        console.log(vet);

        $.ajax({
            type : "GET",
            url : url+"insert_parecer_fono_retorno.php?data="+JSON.stringify(vet),
            contentType: content,
            success: function (response) {
                var json = JSON.parse(response);
                if(json['success']){
                   aux_insert_pen_fin(json['id']);
                }else{
                    console.log("erro");
                }
            },
            error: function (e) {
                console.log(e);

            } 
        });	
    }else {
        alert("Favor selecionar entre pendente ou final!")
    }
}



function aux_insert_pen_fin(id_do_parecer_fon) {
    if($('#rbtn-pendente_retorno').is(':checked')) {
        insert_pendentes_retorno(id_do_parecer_fon);
    }
    else if($('#rbtn-final_retorno').is(':checked')){
        insert_concluidos_retorno(id_do_parecer_fon);
    }
} 



function insert_pendentes_retorno(id_do_parecer_fon){
    var vet = new Array();
    var sessao = document.getElementsByName("sessao_pendente_retorno");
    for(var i = 0; i < sessao.length; i++){
        vet[i] = sessao[i].value;
    }

    vet.push(getcheckboxs(document.getElementsByName("10-0cb_retorno")));
    vet.push(getcheckboxs(document.getElementsByName("10-1cb_retorno")));

    vet.push(document.getElementById("txtareaobspendenteori").value);

	vet.push(id_do_parecer_fon);
	
	console.log(vet);

    $.ajax({
		type : "GET",
		url : url+"pendentes_retorno.php?data="+JSON.stringify(vet),
		contentType: content,
		success: function (response) {
			var json = JSON.parse(response);
			if(json['success']){
				console.log(json);
                window.location.replace("http://10.16.90.76");
			}else{
				console.log("erro");
			}
		},
		error: function (e) {
    		console.log(e);
		} 
	});	
}

function insert_concluidos_retorno(id_do_parecer_fon){
    var vet = new Array();
    var sessao = document.getElementsByName("sessao_concluidos_retorno");
    for(var i = 0; i < sessao.length; i++){
        vet[i] = sessao[i].value;
    }

    vet.push(getcheckboxs(document.getElementsByName("11-0cb_retorno")));
    vet.push(getcheckboxs(document.getElementsByName("11-2cb_retorno")));

    vet.push(document.getElementById("txtareaobsconcluidoori").value);

    vet.push(id_do_parecer_fon);
    vet.push(finalidade);

    console.log(vet);

    $.ajax({
        type : "GET",
        url : url+"final_retorno.php?data="+JSON.stringify(vet),
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                console.log(json);
                window.location.replace("http://10.16.90.76");
            }else{
                console.log("erro");
            }
        },
        error: function (e) {
            console.log(e);
        } 
    });	
}


function verification_buttons() {
    var retorno = false;
    if($('#rbtn-pendente_retorno').is(':checked') || $('#rbtn-final_retorno').is(':checked')){
        var retorno = true;
    }
    return retorno;
}