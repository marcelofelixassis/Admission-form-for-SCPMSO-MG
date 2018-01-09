function get_finalidade(){
    $.ajax({
        type : "GET",
        url : url+"get_finalidade.php?number="+finalidade,
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                preencher_finalidade(json['data'][0]);
            }else{
                console.log("erro na fase de finalidade");
            }
        },
        error: function (e) {
            console.log(e);
        } 
    }); 
}

function preencher_finalidade(data){
    var sessao = document.getElementsByName("sessao2");

    sessao[0].value = data.dt_2_0;

    $("#apfd2-0").val(data.apfd_2_0);

    if(data.apfd_2_0 == 4 || data.apfd_2_0 == 5){
        document.getElementById("visible_apfd2-0").style.visibility = "visible";
        sessao[2].value = data.dias_2_0;
    }

    $("#select_ad_2_0").val(data.ad_2_0);

    $("#select_as_2_1").val(data.as_2_1);

    $("#select_org_2_1").val(data.org_2_1);

    markcheckbox(data.ap_2_2, document.getElementsByName("2-2cb"));

    get_complementares();
}