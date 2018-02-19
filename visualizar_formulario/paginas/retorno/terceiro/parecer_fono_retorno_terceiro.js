function preecher_parecer_fono_retorno_terceiro(data) {
    
    $("#input_epe_9_0_rterceiro").val(data.epe);
    $("#select_exa_9_0_rterceiro").val(data.exa);
    $("#input_dexa_9_0_rterceiro").val(data.dexa);
    $("#input_mnome_9_0_rterceiro").val(data.mnome);
    $("#input_crm_9_0_rterceiro").val(data.crm);
    
    $("#select_tipg_9_1_rterceiro").val(data.tipg);
    $("#select_loea_9_1_rterceiro").val(data.loea);
    
    markcheckbox(data.cb_agl_9_2, document.getElementsByName("9-2cb_rterceiro"));

    $("#prv9-3_rterceiro").val(data.prv);
    if (data.prv == "2") {
        $('.collapse_prv9-3_rterceiro').collapse('show');
    }

    if(data.agpv == "1") {
        $('#agpv9-4_rterceiro').prop('checked', true);
        $('.collapse_agpv9-4_rterceiro').collapse('show');

        if(data.ede == "1") {
            $('#ede9-5_rterceiro').prop('checked', true);
            $('.collapse_ede9-5_rterceiro').collapse('show');

            markcheckbox(data.cb_ede_0, document.getElementsByName("9-5-0cb_rterceiro"));
            markcheckbox(data.cb_ede_1, document.getElementsByName("9-5-1cb_rterceiro"));
        }

        if(data.hip == "1") {
            $('#hip9-6_rterceiro').prop('checked', true);
            $('.collapse_hip9-6_rterceiro').collapse('show');

            markcheckbox(data.cb_hip_0, document.getElementsByName("9-6-0cb_rterceiro"));
            markcheckbox(data.cb_hip_1, document.getElementsByName("9-6-1cb_rterceiro"));
            markcheckbox(data.cb_hip_2, document.getElementsByName("9-6-2cb_rterceiro"));
        }

        if(data.ava == "1") {
            $('#ava9-7_rterceiro').prop('checked', true);
            $('.collapse_ava9-7_rterceiro').collapse('show');

            markcheckbox(data.cb_ava_0, document.getElementsByName("9-7-0cb_rterceiro"));
            markcheckbox(data.cb_ava_1, document.getElementsByName("9-7-1cb_rterceiro"));
            markcheckbox(data.cb_ava_2, document.getElementsByName("9-7-2cb_rterceiro"));
        }
    }

    if (data.bli == "1") {
        $('#bli9-8_rterceiro').prop('checked', true);
        $('.collapse_bli9-8_rterceiro').collapse('show');

        if (data.ibi == "1") {
            $('#ibi9-9_rterceiro').prop('checked', true);
            $('.collapse_ibi9-9_rterceiro').collapse('show');

            markcheckbox(data.cb_ibi_0, document.getElementsByName("9-9-0cb_rterceiro"));
            markcheckbox(data.cb_ibi_1, document.getElementsByName("9-9-1cb_rterceiro"));
        }

        if (data.iud == "1") {
            $('#iud9-10_rterceiro').prop('checked', true);
            $('.collapse_iud9-10_rterceiro').collapse('show');

            markcheckbox(data.cb_iud_0, document.getElementsByName("9-10-0cb_rterceiro"));
            markcheckbox(data.cb_iud_1, document.getElementsByName("9-10-1cb_rterceiro"));
        }

        if (data.iue == "1") {
            $('#iue9-11_rterceiro').prop('checked', true);
            $('.collapse_iue9-11_rterceiro').collapse('show');

            markcheckbox(data.cb_iue_0, document.getElementsByName("9-11-0cb_rterceiro"));
            markcheckbox(data.cb_iue_1, document.getElementsByName("9-11-1cb_rterceiro"));
        }

        if (data.rco == "1") {
            $('#rco9-12_rterceiro').prop('checked', true);
        }

        if (data.dep == "1") {
            $('#dep9-13_rterceiro').prop('checked', true);
            $('.collapse_dep9-13_rterceiro').collapse('show'); 

            markcheckbox(data.cb_dep_0, document.getElementsByName("9-13-0cb_rterceiro"));
            markcheckbox(data.cb_dep_1, document.getElementsByName("9-13-1cb_rterceiro"));
        }

        if (data.hipe == "1") {
            $('#hipe9-14_rterceiro').prop('checked', true);
        } 
    }

    if (data.cgl == "1") {
        $('#cgl9-15_rterceiro').prop('checked', true);
        $('.collapse_cgl9-15_rterceiro').collapse('show');

        markcheckbox(data.cb_cgl_0, document.getElementsByName("9-15-0cb_rterceiro"));
        markcheckbox(data.cb_cgl_1, document.getElementsByName("9-15-1cb_rterceiro"));
    }

    if (data.mmo == "1") {
        $('#mmo9-16_rterceiro').prop('checked', true);
        $('.collapse_mmo9-16_rterceiro').collapse('show');

        markcheckbox(data.cb_mmo_0, document.getElementsByName("9-16-0cb_rterceiro"));
    }

    if(data.obs_parecer_fon_retorno != "") { 
        $('.collapse_obs_retorno_terceiro').collapse('show');
        document.getElementById("txtareaobsterceiro").value = data.obs_parecer_fon_retorno;
    }

    pendente_ou_concluido_parecer_fono_retorno_terceiro(data.id_parecer_fon_retorno);
}


function pendente_ou_concluido_parecer_fono_retorno_terceiro(id_parecer_fon_retorno) {
    $.ajax({
        type : "GET",
        url : url+"get_pendente_ou_concluido_retorno.php?number="+id_parecer_fon_retorno,
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                if(json['tipo'] == "pendente") {
                    preencher_pendente_retorno_terceiro(json['data'][0]);
                }else if (json['tipo'] == "concluido") {
                    preencher_concluido_retorno_terceiro(json['data'][0])
                }
                console.log(json);
            }else{
                console.log("erro fase de parecer fono retorno");
            }
        },
        error: function (e) {
            console.log(e);
        } 
    }); 
}


function preencher_pendente_retorno_terceiro(data) {
    $('.collapse_pendente_rterceiro').collapse('show');

    markcheckbox(data.cb_mdp, document.getElementsByName("10-0cb_rterceiro"));
    markcheckbox(data.cb_cfo, document.getElementsByName("10-1cb_rterceiro"));

    $("#exs10-2_rterceiro").val(data.exs);

    $("#dt10-2_rterceiro").val(data.dt);

    if (data.obs_pendente_retorno != "") {
        $('.collapse_obs_retorno_terceiro_pendente').collapse('show');
        $("#txtareaobsterceiropendente").val(data.obs_pendente_retorno);
    }
}


function preencher_concluido_retorno_terceiro(data) {
    $('.collapse_final_rterceiro').collapse('show');

    markcheckbox(data.cb_fnl_0, document.getElementsByName("11-0cb_rterceiro"));

    if ($('#cb3-fnl11-0_rterceiro').is(':checked')) {
        $('.collapse_lbl3-fnl11-0_rterceiro').collapse('show');

        $("#input_dias11-1_rterceiro").val(data.dias);
        $("#input_com11-1_rterceiro").val(data.com);
    }

    markcheckbox(data.cb_fnl_1, document.getElementsByName("11-2cb_rterceiro"));

    $("#lcl11-2_rterceiro").val(data.lcl);
    $("#dt11-2_rterceiro").val(data.dt);     

    if (data.obs_concluido_retorno != "") {
        $('.collapse_obs_retorno_terceiro_concluido').collapse('show');
        $("#txtareaobsterceiroconcluido").val(data.obs_concluido_retorno);
    }   
}