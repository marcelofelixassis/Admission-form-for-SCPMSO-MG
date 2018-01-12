function get_avaliacao_perceptivo(){
    $.ajax({
        type : "GET",
        url : url+"get_avaliacao_perceptivo.php?number="+finalidade,
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                preencher_avaliacao_perceptivo(json['data'][0]);
            }else{
                console.log("erro na fase de avaliacao perceptivo");
            }
        },
        error: function (e) {
            console.log(e);
        } 
    }); 
}

function preencher_avaliacao_perceptivo(data){
    $("#select_qev_7_0").val(data.qev_7_0);

    $("#select_gda_7_0").val(data.gda_7_0);

    markradiobutton(data.ggdd_7_1, document.getElementsByName("rb_7_1_g"));
    markradiobutton(data.rug_7_1, document.getElementsByName("rb_7_1_r"));
    markradiobutton(data.spr_7_1, document.getElementsByName("rb_7_1_s"));
    markradiobutton(data.rug_7_1, document.getElementsByName("rb_7_1_r"));
    markradiobutton(data.ast_7_1, document.getElementsByName("rb_7_1_a"));
    markradiobutton(data.tns_7_1, document.getElementsByName("rb_7_1_t"));
    markradiobutton(data.inst_7_1, document.getElementsByName("rb_7_1_i"));

    $("#inp_letra_g").text(data.ggdd_7_1);
    $("#inp_letra_r").text(data.rug_7_1);
    $("#inp_letra_b").text(data.spr_7_1);
    $("#inp_letra_a").text(data.ast_7_1);
    $("#inp_letra_s").text(data.tns_7_1);
    $("#inp_letra_i").text(data.inst_7_1);

    $("#select_cpfe_7_2").val(data.cpfe_7_2);

    $("#select_cpfd_7_2").val(data.cpfd_7_2);

    $("#select_atve_7_3").val(data.atve_7_3);

    $("#select_atvd_7_3").val(data.atvd_7_3);

    $("#select_pit_7_4").val(data.pit_7_4);

    $("#select_lns_7_4").val(data.lns_7_4);

    $("#select_rnc_7_5").val(data.rnc_7_5);

    $("#select_tlg_7_5").val(data.tlg_7_5);

    $("#select_rcv_7_6").val(data.rcv_7_6);

    $("#tmdf7-7").val(data.tmdf_7_7);
    if(data.tmdf_7_7 == "1") {
        $('.collapse_tmdf7-7').collapse('show');

        $("#input_a").val(data.a_7_8);
        markcheckbox(data.cb_a_7_8, document.getElementsByName("7-8acb"));

        $("#input_i").val(data.i_7_8);
        markcheckbox(data.cb_i_7_8, document.getElementsByName("7-8icb"));

        $("#input_u").val(data.u_7_8);
        markcheckbox(data.cb_u_7_8, document.getElementsByName("7-8ucb"));
    }

    $("#epasz7-9").val(data.tmdf_7_9);
    if(data.tmdf_7_9 == "1") {
        $('.collapse_epasz7-9').collapse('show');

        $("#input_s").val(data.s_7_10);
        $("#input_z").val(data.z_7_10);
        $("#input_sz").val(data.rsz_7_10);

        $("#select_rst_7_11").val(data.rst_7_11);
    }

    $("#select_flu_7_12").val(data.flu_7_12);
    $("#select_vel_7_13").val(data.vel_7_13);
    $("#select_art_7_14").val(data.art_7_14);
    $("#select_dist_7_15").val(data.dist_7_15);
    $("#select_aud_7_16").val(data.aud_7_16); 

    get_avaliacao_espectrografica();
}