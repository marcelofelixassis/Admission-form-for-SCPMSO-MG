function get_habitos(){
    $.ajax({
        type : "GET",
        url : url+"get_habitos.php?number="+finalidade,
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                preencher_habitos(json['data'][0]);
            }else{
                console.log("erro na fase de habitos");
            }
        },
        error: function (e) {
            console.log(e);
        } 
    }); 
}

function preencher_habitos(data){
   $("#taba5-0").val(data.taba_5_0);
   if(data.taba_5_0 == "1") {
        $("#select_hqt_5_0").val(data.hqt_5_0);

        $("#select_qcd_5_0").val(data.qcd_5_0);

        $('.collapse_taba5-0').collapse('show');
        $('#collapse_taba5-0_extaba').collapse('hide');
        $('.collapse_extaba5-1').collapse('hide');
   }

   $("#extaba5-1").val(data.extaba_5_1);
   if(data.extaba_5_1 == "1") {
        $("#select_fpqt_5_1").val(data.fpqt_5_1);

        $("#select_phqt_5_1").val(data.phqt_5_1);

        $('.collapse_extaba5-1').collapse('show');
        $('#collapse_taba5-0_taba').collapse('hide');
        $('.collapse_taba5-0').collapse('hide');
   }

   $("#dril5-2").val(data.dril_5_2);
   if(data.dril_5_2 == "1") {
        $('.collapse_dril5-2').collapse('show');

        markcheckbox(data.cb_dril_5_2, document.getElementsByName("5-2cb"));

        $("#inputsessao5").val(data.otr_5_2)
   }

   $("#etil5-3").val(data.etil_5_3);
   if(data.etil_5_3 == "1") {
        $('.collapse_etil5-3').collapse('show');

        markcheckbox(data.cb_qtb_5_3, document.getElementsByName("5-3cb"));

        $("#select_qaf_5_3").val(data.qaf_5_3);
   }

   $("#ohvi5-4").val(data.ohvi_5_4);
   if(data.ohvi_5_4 == "1"){
        $('#collapse_ohvi5-4').collapse('show');

        markcheckbox(data.cb_ohvi_5_4 ,document.getElementsByName("5-4cb"))
   }

   get_saude_vocal();
}