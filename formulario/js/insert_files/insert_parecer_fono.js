// 8° FASE >>> FASE DE INSERTS NA TABELA DE AVALIACAO ESPECTROGRAFICA
function parecer_fono(id_da_finalidade){
        
    var vet = new Array();
    var sessao = document.getElementsByName("sessao9");
    for(var i = 0; i < sessao.length; i++){
        vet[i] = sessao[i].value;
    }

    vet.push(getcheckboxs(document.getElementsByName("9-2cb")));
    //------------------------------------------------------------------------------------------
    if($('#agpv9-4').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
    
    if($('#ede9-5').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
    vet.push(getcheckboxs(document.getElementsByName("9-5-0cb")));
    vet.push(getcheckboxs(document.getElementsByName("9-5-1cb")));

    if($('#hip9-6').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
    vet.push(getcheckboxs(document.getElementsByName("9-6-0cb")));
    vet.push(getcheckboxs(document.getElementsByName("9-6-1cb")));
    vet.push(getcheckboxs(document.getElementsByName("9-6-2cb")));

    if($('#ava9-7').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
    vet.push(getcheckboxs(document.getElementsByName("9-7-0cb")));
    vet.push(getcheckboxs(document.getElementsByName("9-7-1cb")));
    vet.push(getcheckboxs(document.getElementsByName("9-7-2cb")));
    //------------------------------------------------------------------------------------------
    if($('#bli9-8').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }

    if($('#ibi9-9').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
    vet.push(getcheckboxs(document.getElementsByName("9-9-0cb")));
    vet.push(getcheckboxs(document.getElementsByName("9-9-1cb")));
    
    if($('#iud9-10').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
    vet.push(getcheckboxs(document.getElementsByName("9-10-0cb")));
    vet.push(getcheckboxs(document.getElementsByName("9-10-1cb")));
    
    if($('#iue9-11').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
    vet.push(getcheckboxs(document.getElementsByName("9-11-0cb")));
    vet.push(getcheckboxs(document.getElementsByName("9-11-1cb")));
    
    if($('#rco9-12').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
    
    if($('#dep9-13').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
    vet.push(getcheckboxs(document.getElementsByName("9-13-0cb")));
    vet.push(getcheckboxs(document.getElementsByName("9-13-1cb")));
    
    if($('#hipe9-14').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
    //------------------------------------------------------------------------------------------
    if($('#cgl9-15').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
    vet.push(getcheckboxs(document.getElementsByName("9-15-0cb")));
    vet.push(getcheckboxs(document.getElementsByName("9-15-1cb")));
    //------------------------------------------------------------------------------------------
    if($('#mmo9-16').is(':checked')) { vet.push("1"); }else{ vet.push("0"); }
    vet.push(getcheckboxs(document.getElementsByName("9-16-0cb")));
    
    vet.push(id_da_finalidade);

    $.ajax({
        type : "GET",
        url : url+"parecer_fono.php?data="+JSON.stringify(vet),
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                aux_insert_pen_fin(json['id'], id_da_finalidade);
                loading(11, true);
            }else{
                loading(10, false);
            }
        },
        error: function (e) {
            console.log(e);
            loading(10, false);
        } 
    });	
}

function aux_insert_pen_fin(id_do_parecer_fon, id_da_finalidade) {
    if($('#rbtn-pendente').is(':checked')) {
        insert_pendentes(id_do_parecer_fon, id_da_finalidade);
    }
    else if($('#rbtn-final').is(':checked')){
        insert_concluidos(id_do_parecer_fon, id_da_finalidade);
    }
} 