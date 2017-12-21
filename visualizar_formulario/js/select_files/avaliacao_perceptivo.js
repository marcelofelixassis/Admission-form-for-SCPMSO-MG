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
                console.log("erro na fase de finalidade");
            }
        },
        error: function (e) {
            console.log(e);
        } 
    }); 
}

function preencher_avaliacao_perceptivo(data){
    console.log(data);

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

        
    }
    
    



    

    

    

    
    
   
}