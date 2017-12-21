function get_saude_vocal(){
    $.ajax({
        type : "GET",
        url : url+"get_saude_vocal.php?number="+finalidade,
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                preencher_saude_vocal(json['data'][0]);
            }else{
                console.log("erro na fase de habitos");
            }
        },
        error: function (e) {
            console.log(e);
        } 
    }); 
}

function preencher_saude_vocal(data){
   console.log(data);

   $("#sipr6-0").val(data.sinp_6_0);
   if(data.sinp_6_0 == "2") {
        $('.collapse_sipr6-0').collapse('show');

        markcheckbox(data.cb_sinp_6_1, document.getElementsByName("6-1cb"));

        $("#select_spqt_6_2").val(data.spqt_6_2);

        $("#select_cfmp_6_2").val(data.cfmp_6_2);  
   }

   $("#pslc6-3").val(data.pslc_6_3);
   if(data.pslc_6_3 == "1") {
        $('.collapse_pslc6-3').collapse('show');

        $("#select_qnd_6_3").val(data.qnd_6_3);

        markcheckbox(data.cb_pslc_6_4, document.getElementsByName("6-4cb"));
   }

   $("#tf6-5").val(data.alfa_6_5);
   if(data.alfa_6_5 == "1") {
        $('.collapse_tf6-5').collapse('show');

        $("#tfjr6-6").val(data.tfjr_6_6);
        if(data.tfjr_6_6 == "1") {
            $('.collapse_tfjr6-6').collapse('show');

            $("#select_qnd_6_6").val(data.qnd_6_6);
            
            $("#select_alfa_6_7").val(data.alfa_6_7);  
        }

        $("#etfo6-8").val(data.etfo_6_8);
        if(data.etfo_6_8 == "1") {
            $('.collapse_etfo6-8').collapse('show');

            $("#select_ndse_6_8").val(data.ndse_6_8);

            $("#select_frse_6_9").val(data.frse_6_9);

            $("#select_fdfo_6_9").val(data.fdfo_6_9);

            $("#select_lfea_6_10").val(data.lfea_6_10);
        }

        $("#civo6-11").val(data.crvc_6_11);
        if(data.crvc_6_11 == "1") {
            $('.collapse_civo6-11').collapse('show');

            $("#select_qnd_6_11").val(data.qnd_6_11);
        }

        $("#fudm6-12").val(data.fudm_6_12);
        if(data.crvc_6_11 == "1") {
            $('.collapse_fudm6-12').collapse('show');

            $("#select_hqnt_6_12").val(data.hqnt_6_12);

            $("#select_oqmd_6_12").val(data.oqmd_6_11);
        }

        get_avaliacao_perceptivo()
   }
}