function get_saude_geral(){
    $.ajax({
        type : "GET",
        url : url+"get_saude_geral.php?number="+finalidade,
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                preencher_saude_geral(json['data'][0]);
            }else{
                console.log("erro na fase de saude geral");
            }
        },
        error: function (e) {
            console.log(e);
        } 
    }); 
}

function preencher_saude_geral(data){
   $("#dnsf4-0").val(data.dnsf_4_0);
   if(data.dnsf_4_0 == "1") {
        document.getElementById("dnsf4-0").style.height = "30px";
        $('#collapse_dnsf4-0').collapse('show');
        markcheckbox(data.cb_dnsf_4_0, document.getElementsByName("4-0cb"));
   }

   $("#da4-1").val(data.da_4_1);
   if(data.da_4_1 == "1") {
        $('#collapse_da4-1').collapse('show');
        document.getElementById("da4-1").style.height = "30px";
        markcheckbox(data.cb_da_4_1, document.getElementsByName("4-1cb"));
   }

   $("#dfl4-2").val(data.dfl_4_2);
   if(data.dfl_4_2 == "1") { 
        $('#collapse_dfl4-2').collapse('show'); 
        markcheckbox(data.cb_dfl_4_2, document.getElementsByName("4-2cb"));  
   }

   $("#doa4-3").val(data.doa_4_3);
   if(data.doa_4_3 == "1") { 
        document.getElementById("doa4-3").style.height = "30px";
        $('#collapse_doa4-3').collapse('show'); 
        markcheckbox(data.cb_doa_4_3, document.getElementsByName("4-3cb"));  
    }

    $("#sdrg4-4").val(data.sdrg_4_4);
    if(data.sdrg_4_4 == "1") {
        $('#collapse_sdrg4-4').collapse('show');
        document.getElementById("sdrg4-4").style.height = "54px";
        markcheckbox(data.cb_sdrg_4_4, document.getElementsByName("4-4cb"));  
    }

    $("#oasg4-5").val(data.oasg_4_5);
    if(data.oasg_4_5 == "1") {
        $('#collapse_oasg4-5').collapse('show');
        document.getElementById("oasg4-5").style.height = "30px";
        markcheckbox(data.cb_oasg_4_5, document.getElementsByName("4-5cb"));  
    }

    $("#fudm4-6").val(data.fudm_4_6);
    if(data.fudm_4_6 == "1") {
        $('.collapse_fudm4-6').collapse('show');
        document.getElementById("fudm4-6").style.height = "30px";
        markcheckbox(data.cb_fudm_4_6, document.getElementsByName("4-6cb"));  
    }

    $("#ccag4-7").val(data.ccag_4_7);

    $("#select_tire_4_8").val(data.tire_4_8);

    get_habitos();
}