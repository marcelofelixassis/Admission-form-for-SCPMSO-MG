function get_parecer_fono(){
    $.ajax({
        type : "GET",
        url : url+"get_parecer_fono.php?number="+finalidade,
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                console.log(json['data'][0]);
                preencher_parecer_fon(json['data'][0]);
            }else{
                console.log("erro fase de parecer fono");
            }
        },
        error: function (e) {
            console.log(e);
        } 
    }); 
}


function preencher_parecer_fon(data){
    
    $("#select_exa_9_0").val(data.exa_9_0);
    $("#input_dexa_9_0").val(data.dexa_9_0);
    $("#input_crm_9_0").val(data.crm_9_0);
    
    $("#select_tipg_9_1").val(data.tipg_9_1);
    $("#select_loea_9_1").val(data.loea_9_1);
    
    markcheckbox(data.cb_agl_9_2, document.getElementsByName("9-2cb"));

    $("#prv9-3").val(data.prv_9_3);
    if (data.prv_9_3 == "2") {
        $('.collapse_prv9-3').collapse('show');
    }

    if(data.agpv_9_4 == "1") {
        $('#agpv9-4').prop('checked', true);
        $('.collapse_agpv9-4').collapse('show');

        if(data.ede_9_5 == "1") {
            $('#ede9-5').prop('checked', true);
            $('.collapse_ede9-5').collapse('show');

            markcheckbox(data.cb_ede_9_5_0, document.getElementsByName("9-5-0cb"));
            markcheckbox(data.cb_ede_9_5_1, document.getElementsByName("9-5-1cb"));
        }

        if(data.hip_9_6 == "1") {
            $('#hip9-6').prop('checked', true);
            $('.collapse_hip9-6').collapse('show');

            markcheckbox(data.cb_hip_9_6_0, document.getElementsByName("9-6-0cb"));
            markcheckbox(data.cb_hip_9_6_1, document.getElementsByName("9-6-1cb"));
            markcheckbox(data.cb_hip_9_6_2, document.getElementsByName("9-6-2cb"));
        }

        if(data.ava_9_7 == "1") {
            $('#ava9-7').prop('checked', true);
            $('.collapse_ava9-7').collapse('show');

            markcheckbox(data.cb_ava_9_7_0, document.getElementsByName("9-7-0cb"));
            markcheckbox(data.cb_ava_9_7_1, document.getElementsByName("9-7-1cb"));
            markcheckbox(data.cb_ava_9_7_2, document.getElementsByName("9-7-2cb"));
        }
    }

    if (data.bli_9_8 == "1") {
        $('#bli9-8').prop('checked', true);
        $('.collapse_bli9-8').collapse('show');

        if (data.ibi_9_9 == "1") {
            $('#ibi9-9').prop('checked', true);
            $('.collapse_ibi9-9').collapse('show');

            markcheckbox(data.cb_ibi_9_9_0, document.getElementsByName("9-9-0cb"));
            markcheckbox(data.cb_ibi_9_9_1, document.getElementsByName("9-9-1cb"));
        }

        if (data.iud_9_10 == "1") {
            $('#iud9-10').prop('checked', true);
            $('.collapse_iud9-10').collapse('show');

            markcheckbox(data.cb_iud_9_10_0, document.getElementsByName("9-10-0cb"));
            markcheckbox(data.cb_iud_9_10_1, document.getElementsByName("9-10-1cb"));
        }

        if (data.iue_9_11 == "1") {
            $('#iue9-11').prop('checked', true);
            $('.collapse_iue9-11').collapse('show');

            markcheckbox(data.cb_iue_9_11_0, document.getElementsByName("9-11-0cb"));
            markcheckbox(data.cb_iue_9_11_1, document.getElementsByName("9-11-1cb"));
        }

        if (data.rco_9_12 == "1") {
            $('#rco9-12').prop('checked', true);
        }

        if (data.dep_9_13 == "1") {
            $('#dep9-13').prop('checked', true);
            $('.collapse_dep9-13').collapse('show'); 

            markcheckbox(data.cb_dep_9_13_0, document.getElementsByName("9-13-0cb"));
            markcheckbox(data.cb_dep_9_13_1, document.getElementsByName("9-13-1cb"));
        }

        if (data.hipe_9_14 == "1") {
            $('#hipe9-14').prop('checked', true);
        } 
    }

    if (data.cgl_9_15 == "1") {
        $('#cgl9-15').prop('checked', true);
        $('.collapse_cgl9-15').collapse('show');

        markcheckbox(data.cb_cgl_9_15_0, document.getElementsByName("9-15-0cb"));
        markcheckbox(data.cb_cgl_9_15_1, document.getElementsByName("9-15-1cb"));
    }

    if (data.mmo_9_16 == "1") {
        $('#mmo9-16').prop('checked', true);
        $('.collapse_mmo9-16').collapse('show');

        markcheckbox(data.cb_mmo_9_16_0, document.getElementsByName("9-16-0cb"));
    }

    get_pendente_ou_concluido(data.id_parecer_fono);
}