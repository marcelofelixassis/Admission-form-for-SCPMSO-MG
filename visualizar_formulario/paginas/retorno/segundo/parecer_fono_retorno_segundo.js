function preecher_parecer_fono_retorno_segundo(data) {

    $("#input_epe_9_0_rsegundo").val(data.epe);
    $("#select_exa_9_0_rsegundo").val(data.exa);
    $("#input_dexa_9_0_rsegundo").val(data.dexa);
    $("#input_mnome_9_0_rsegundo").val(data.mnome);
    $("#input_crm_9_0_rsegundo").val(data.crm);
    
    $("#select_tipg_9_1_rsegundo").val(data.tipg);
    $("#select_loea_9_1_rsegundo").val(data.loea);
    
    markcheckbox(data.cb_agl_9_2, document.getElementsByName("9-2cb_rsegundo"));

    $("#prv9-3_rsegundo").val(data.prv);
    if (data.prv == "2") {
        $('.collapse_prv9-3_rsegundo').collapse('show');
    }

    if(data.agpv == "1") {
        $('#agpv9-4_rsegundo').prop('checked', true);
        $('.collapse_agpv9-4_rsegundo').collapse('show');

        if(data.ede == "1") {
            $('#ede9-5_rsegundo').prop('checked', true);
            $('.collapse_ede9-5_rsegundo').collapse('show');

            markcheckbox(data.cb_ede_0, document.getElementsByName("9-5-0cb_rsegundo"));
            markcheckbox(data.cb_ede_1, document.getElementsByName("9-5-1cb_rsegundo"));
        }

        if(data.hip == "1") {
            $('#hip9-6_rsegundo').prop('checked', true);
            $('.collapse_hip9-6_rsegundo').collapse('show');

            markcheckbox(data.cb_hip_0, document.getElementsByName("9-6-0cb_rsegundo"));
            markcheckbox(data.cb_hip_1, document.getElementsByName("9-6-1cb_rsegundo"));
            markcheckbox(data.cb_hip_2, document.getElementsByName("9-6-2cb_rsegundo"));
        }

        if(data.ava == "1") {
            $('#ava9-7_rsegundo').prop('checked', true);
            $('.collapse_ava9-7_rsegundo').collapse('show');

            markcheckbox(data.cb_ava_0, document.getElementsByName("9-7-0cb_rsegundo"));
            markcheckbox(data.cb_ava_1, document.getElementsByName("9-7-1cb_rsegundo"));
            markcheckbox(data.cb_ava_2, document.getElementsByName("9-7-2cb_rsegundo"));
        }
    }

    if (data.bli == "1") {
        $('#bli9-8_rsegundo').prop('checked', true);
        $('.collapse_bli9-8_rsegundo').collapse('show');

        if (data.ibi == "1") {
            $('#ibi9-9_rsegundo').prop('checked', true);
            $('.collapse_ibi9-9_rsegundo').collapse('show');

            markcheckbox(data.cb_ibi_0, document.getElementsByName("9-9-0cb_rsegundo"));
            markcheckbox(data.cb_ibi_1, document.getElementsByName("9-9-1cb_rsegundo"));
        }

        if (data.iud == "1") {
            $('#iud9-10_rsegundo').prop('checked', true);
            $('.collapse_iud9-10_rsegundo').collapse('show');

            markcheckbox(data.cb_iud_0, document.getElementsByName("9-10-0cb_rsegundo"));
            markcheckbox(data.cb_iud_1, document.getElementsByName("9-10-1cb_rsegundo"));
        }

        if (data.iue == "1") {
            $('#iue9-11_rsegundo').prop('checked', true);
            $('.collapse_iue9-11_rsegundo').collapse('show');

            markcheckbox(data.cb_iue_0, document.getElementsByName("9-11-0cb_rsegundo"));
            markcheckbox(data.cb_iue_1, document.getElementsByName("9-11-1cb_rsegundo"));
        }

        if (data.rco == "1") {
            $('#rco9-12_rsegundo').prop('checked', true);
        }

        if (data.dep == "1") {
            $('#dep9-13_rsegundo').prop('checked', true);
            $('.collapse_dep9-13_rsegundo').collapse('show'); 

            markcheckbox(data.cb_dep_0, document.getElementsByName("9-13-0cb_rsegundo"));
            markcheckbox(data.cb_dep_1, document.getElementsByName("9-13-1cb_rsegundo"));
        }

        if (data.hipe == "1") {
            $('#hipe9-14_rsegundo').prop('checked', true);
        } 
    }

    if (data.cgl == "1") {
        $('#cgl9-15_rsegundo').prop('checked', true);
        $('.collapse_cgl9-15_rsegundo').collapse('show');

        markcheckbox(data.cb_cgl_0, document.getElementsByName("9-15-0cb_rsegundo"));
        markcheckbox(data.cb_cgl_1, document.getElementsByName("9-15-1cb_rsegundo"));
    }

    if (data.mmo == "1") {
        $('#mmo9-16_rsegundo').prop('checked', true);
        $('.collapse_mmo9-16_rsegundo').collapse('show');

        markcheckbox(data.cb_mmo_0, document.getElementsByName("9-16-0cb_rsegundo"));
    }

    if(data.obs_parecer_fon_retorno != "") { 
        $('.collapse_obs_retorno_segundo').collapse('show');
        document.getElementById("txtareaobssegundo").value = data.obs_parecer_fon_retorno;
    }

    pendente_ou_concluido_parecer_fono_retorno_segundo(data.id_parecer_fon_retorno);
}


function pendente_ou_concluido_parecer_fono_retorno_segundo(id_parecer_fon_retorno) {
    $.ajax({
        type : "GET",
        url : url+"get_pendente_ou_concluido_retorno.php?number="+id_parecer_fon_retorno,
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                if(json['tipo'] == "pendente") {
                    preencher_pendente_retorno_segundo(json['data'][0]);
                }else if (json['tipo'] == "concluido") {
                    preencher_concluido_retorno_segundo(json['data'][0])
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


function preencher_pendente_retorno_segundo(data) {
    $('.collapse_pendente_rsegundo').collapse('show');

    markcheckbox(data.cb_mdp, document.getElementsByName("10-0cb_rsegundo"));
    markcheckbox(data.cb_cfo, document.getElementsByName("10-1cb_rsegundo"));

    $("#exs10-2_rsegundo").val(data.exs);

    $("#dt10-2_rsegundo").val(data.dt);

    if (data.obs_pendente_retorno != "") {
        $('.collapse_obs_retorno_segundo_pendente').collapse('show');
        $("#txtareaobssegundopendente").val(data.obs_pendente_retorno);
    }
}


function preencher_concluido_retorno_segundo(data) {
    $('.collapse_final_rsegundo').collapse('show');

    markcheckbox(data.cb_fnl_0, document.getElementsByName("11-0cb_rsegundo"));

    if ($('#cb3-fnl11-0_rsegundo').is(':checked')) {
        $('.collapse_lbl3-fnl11-0_rsegundo').collapse('show');

        $("#input_dias11-1_rsegundo").val(data.dias);
        $("#input_com11-1_rsegundo").val(data.com);
    }

    markcheckbox(data.cb_fnl_1, document.getElementsByName("11-2cb_rsegundo"));

    $("#lcl11-2_rsegundo").val(data.lcl);
    $("#dt11-2_rsegundo").val(data.dt); 

    if (data.obs_concluido_retorno != "") {
        $('.collapse_obs_retorno_segundo_concluido').collapse('show');
        $("#txtareaobssegundoconcluido").val(data.obs_concluido_retorno);
    }     
}