function get_pendente_ou_concluido(id_parecer_fon){
    $.ajax({
        type : "GET",
        url : url+"get_pendente_ou_concluido.php?number="+id_parecer_fon,
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                console.log(json);
                preencher_pendente_ou_concluido(json['data'][0], json['tipo']);
            }else{
                console.log("erro fase de pendente ou concluido");
            }
        },
        error: function (e) {
            console.log(e);
        } 
    }); 
}

function preencher_pendente_ou_concluido(data, tipo) {
    console.log(data);
    console.log(data.cb_mdp_10_0);
    if (tipo == "pendente") {
        
        $.get("paginas/pendente.html", function (data) {
            $("#collapse_pendente_ou_concluido").append(data);
        });
        
        setTimeout(function(){
            preencher_pendente(data);
        }, 2000);     
        
    }else {
        $.get("paginas/concluido.html", function (data) {
            $("#collapse_pendente_ou_concluido").append(data);
        }); 

        setTimeout(function(){
            preencher_concluido(data);
        }, 2000); 

    }
}

function preencher_pendente(data) {
    markcheckbox(data.cb_mdp_10_0, document.getElementsByName("10-0cb"));
    markcheckbox(data.cb_cfo_10_1, document.getElementsByName("10-1cb"));

    $("#exs10-2").val(data.exs_10_2);

    $("#dt10-2").val(data.dt_10_2);   

    get_parecer_fono_retorno(finalidade);
}

function preencher_concluido(data) {
    markcheckbox(data.cb_fnl_11_0, document.getElementsByName("11-0cb"));

    if ($('#cb3-fnl11-0').is(':checked')) {
        $('.collapse_lbl3-fnl11-0').collapse('show');

        $("#input_dias11-1").val(data.dias_11_1);
        $("#input_com11-1").val(data.com_11_1);
    }

    markcheckbox(data.cb_fnl_11_2, document.getElementsByName("11-2cb"));

    $("#lcl11-2").val(data.lcl_11_3);
    $("#dt11-2").val(data.dt_11_3); 
    
    apresentar_dados();  
}

