function get_avaliacao_espectrografica(){
    $.ajax({
        type : "GET",
        url : url+"get_avaliacao_espectrografica.php?number="+finalidade,
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                preencher_avaliacao_espectrografica(json['data'][0]);
            }else{
                console.log("erro na fase de avaliacao espectrografica");
            }
        },
        error: function (e) {
            console.log(e);
        } 
    }); 
}

function preencher_avaliacao_espectrografica(data){
    console.log(data);
    $("#spfu").val(data.sfu_8_0);

    if(data.fdf_8_1 == "1") {
        $("#fdf").prop('checked', true);
    }

    if(data.qdf_8_1 == "1") {
        $("#qdf").prop('checked', true);
    }

    if(data.rui_8_1 == "1") {
        $("#rui").prop('checked', true);
    }

    if(data.qds_8_1 == "1") {
        $("#qds").prop('checked', true);
    }

    if(data.fdi_8_1 == "1") {
        $("#fdi").prop('checked', true);
    }

    if(data.sbh_8_1 == "1") {
        $("#sbh").prop('checked', true);
    }

    if(data.avb_8_1 == "1") {
        $("#avb").prop('checked', true);
    }

    if(data.avs_8_1 == "1") {
        $("#avs").prop('checked', true);
    }  

    get_parecer_fono();
}