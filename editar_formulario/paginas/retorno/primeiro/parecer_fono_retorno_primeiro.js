function preecher_parecer_fono_retorno_primeiro(data) {
    
    $("#input_epe_9_0_rprimeiro").val(data.epe);
    $("#select_exa_9_0_rprimeiro").val(data.exa);
    $("#input_dexa_9_0_rprimeiro").val(data.dexa);
    $("#input_mnome_9_0_rprimeiro").val(data.mnome);
    $("#input_crm_9_0_rprimeiro").val(data.crm);
    
    
    $("#select_tipg_9_1_rprimeiro").val(data.tipg);
    $("#select_loea_9_1_rprimeiro").val(data.loea);
    
    markcheckbox(data.cb_agl_9_2, document.getElementsByName("9-2cb_rprimeiro"));

    $("#prv9-3_rprimeiro").val(data.prv);
    if (data.prv == "2") {
        $('.collapse_prv9-3_rprimeiro').collapse('show');
    }

    if(data.agpv == "1") {
        $('#agpv9-4_rprimeiro').prop('checked', true);
        $('.collapse_agpv9-4_rprimeiro').collapse('show');

        if(data.ede == "1") {
            $('#ede9-5_rprimeiro').prop('checked', true);
            $('.collapse_ede9-5_rprimeiro').collapse('show');

            markcheckbox(data.cb_ede_0, document.getElementsByName("9-5-0cb_rprimeiro"));
            markcheckbox(data.cb_ede_1, document.getElementsByName("9-5-1cb_rprimeiro"));
        }

        if(data.hip == "1") {
            $('#hip9-6_rprimeiro').prop('checked', true);
            $('.collapse_hip9-6_rprimeiro').collapse('show');

            markcheckbox(data.cb_hip_0, document.getElementsByName("9-6-0cb_rprimeiro"));
            markcheckbox(data.cb_hip_1, document.getElementsByName("9-6-1cb_rprimeiro"));
            markcheckbox(data.cb_hip_2, document.getElementsByName("9-6-2cb_rprimeiro"));
        }

        if(data.ava == "1") {
            $('#ava9-7_rprimeiro').prop('checked', true);
            $('.collapse_ava9-7_rprimeiro').collapse('show');

            markcheckbox(data.cb_ava_0, document.getElementsByName("9-7-0cb_rprimeiro"));
            markcheckbox(data.cb_ava_1, document.getElementsByName("9-7-1cb_rprimeiro"));
            markcheckbox(data.cb_ava_2, document.getElementsByName("9-7-2cb_rprimeiro"));
        }
    }

    if (data.bli == "1") {
        $('#bli9-8_rprimeiro').prop('checked', true);
        $('.collapse_bli9-8_rprimeiro').collapse('show');

        if (data.ibi == "1") {
            $('#ibi9-9_rprimeiro').prop('checked', true);
            $('.collapse_ibi9-9_rprimeiro').collapse('show');

            markcheckbox(data.cb_ibi_0, document.getElementsByName("9-9-0cb_rprimeiro"));
            markcheckbox(data.cb_ibi_1, document.getElementsByName("9-9-1cb_rprimeiro"));
        }

        if (data.iud == "1") {
            $('#iud9-10_rprimeiro').prop('checked', true);
            $('.collapse_iud9-10_rprimeiro').collapse('show');

            markcheckbox(data.cb_iud_0, document.getElementsByName("9-10-0cb_rprimeiro"));
            markcheckbox(data.cb_iud_1, document.getElementsByName("9-10-1cb_rprimeiro"));
        }

        if (data.iue == "1") {
            $('#iue9-11_rprimeiro').prop('checked', true);
            $('.collapse_iue9-11_rprimeiro').collapse('show');

            markcheckbox(data.cb_iue_0, document.getElementsByName("9-11-0cb_rprimeiro"));
            markcheckbox(data.cb_iue_1, document.getElementsByName("9-11-1cb_rprimeiro"));
        }

        if (data.rco == "1") {
            $('#rco9-12_rprimeiro').prop('checked', true);
        }

        if (data.dep == "1") {
            $('#dep9-13_rprimeiro').prop('checked', true);
            $('.collapse_dep9-13_rprimeiro').collapse('show'); 

            markcheckbox(data.cb_dep_0, document.getElementsByName("9-13-0cb_rprimeiro"));
            markcheckbox(data.cb_dep_1, document.getElementsByName("9-13-1cb_rprimeiro"));
        }

        if (data.hipe == "1") {
            $('#hipe9-14_rprimeiro').prop('checked', true);
        } 
    }

    if (data.cgl == "1") {
        $('#cgl9-15_rprimeiro').prop('checked', true);
        $('.collapse_cgl9-15_rprimeiro').collapse('show');

        markcheckbox(data.cb_cgl_0, document.getElementsByName("9-15-0cb_rprimeiro"));
        markcheckbox(data.cb_cgl_1, document.getElementsByName("9-15-1cb_rprimeiro"));
    }

    if (data.mmo == "1") {
        $('#mmo9-16_rprimeiro').prop('checked', true);
        $('.collapse_mmo9-16_rprimeiro').collapse('show');

        markcheckbox(data.cb_mmo_0, document.getElementsByName("9-16-0cb_rprimeiro"));
    }

    pendente_ou_concluido_parecer_fono_retorno_primeiro(data.id_parecer_fon_retorno);
}


function pendente_ou_concluido_parecer_fono_retorno_primeiro(id_parecer_fon_retorno) {
    $.ajax({
        type : "GET",
        url : url+"get_pendente_ou_concluido_retorno.php?number="+id_parecer_fon_retorno,
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                if(json['tipo'] == "pendente") {
                    preencher_pendente_retorno_primeiro(json['data'][0]);
                }else if (json['tipo'] == "concluido") {
                    preencher_concluido_retorno_primeiro(json['data'][0])
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


function preencher_pendente_retorno_primeiro(data) {
    $('.collapse_pendente_rprimeiro').collapse('show');

    markcheckbox(data.cb_mdp, document.getElementsByName("10-0cb_rprimeiro"));
    markcheckbox(data.cb_cfo, document.getElementsByName("10-1cb_rprimeiro"));

    $("#exs10-2_rprimeiro").val(data.exs);

    $("#dt10-2_rprimeiro").val(data.dt);
}


function preencher_concluido_retorno_primeiro(data) {
    $('.collapse_final_rprimeiro').collapse('show');

    markcheckbox(data.cb_fnl_0, document.getElementsByName("11-0cb_rprimeiro"));

    if ($('#cb3-fnl11-0_rprimeiro').is(':checked')) {
        $('.collapse_lbl3-fnl11-0_rprimeiro').collapse('show');

        $("#input_dias11-1_rprimeiro").val(data.dias);
        $("#input_com11-1_rprimeiro").val(data.com);
    }

    markcheckbox(data.cb_fnl_1, document.getElementsByName("11-2cb_rprimeiro"));

    $("#lcl11-2_rprimeiro").val(data.lcl);
    $("#dt11-2_rprimeiro").val(data.dt);     
}