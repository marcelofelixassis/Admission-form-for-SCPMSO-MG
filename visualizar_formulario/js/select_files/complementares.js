function get_complementares(){
    $.ajax({
        type : "GET",
        url : url+"get_complementares.php?number="+finalidade,
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                preencher_complementares(json['data'][0]);
            }else{
                console.log("erro na fase de complementares");
            }
        },
        error: function (e) {
            console.log(e);
        } 
    }); 
}

function preencher_complementares(data) {  
    $("#pqccp3-0").val(data.pqccp_3_0);

	if(data.pqccp_3_0 == "1"){
        document.getElementById("collapse_cargos").innerHTML="";
        
		$.get("cargos/primeiro_cargo.html", function (data) {
            $("#collapse_cargos").append(data);
        });
	}
	else if(data.pqccp_3_0 == "2"){
        document.getElementById("collapse_cargos").innerHTML="";

        setTimeout(function(){
            $.get("cargos/primeiro_cargo.html", function (data) {
                $("#collapse_cargos").append(data);
            });
        }, 2000);

        setTimeout(function(){
            $.get("cargos/segundo_cargo.html", function (data) {
                $("#collapse_cargos").append(data);
            });
        }, 2000);
	}
	else if(data.pqccp_3_0 == "3"){
        document.getElementById("collapse_cargos").innerHTML="";
        
        setTimeout(function(){
            $.get("cargos/primeiro_cargo.html", function (data) {
                $("#collapse_cargos").append(data);
            });
        }, 2000);

        setTimeout(function(){
            $.get("cargos/segundo_cargo.html", function (data) {
                $("#collapse_cargos").append(data);
            });
        }, 2000);

        setTimeout(function(){
            $.get("cargos/terceiro_cargo.html", function (data) {
                $("#collapse_cargos").append(data);
            });
        }, 2000);      
    }


    $("#jacp3-4").val(data.jacp_3_4);


    if(data.jacp_3_4 == 1){
        document.getElementById("collapse_cargosanteriores").innerHTML="";
        $.get("cargos_anteriormente/sim_1cargo.html", function (data) {
            $("#collapse_cargosanteriores").append(data);
        });
    }else if(data.jacp_3_4 == 2){
        document.getElementById("collapse_cargosanteriores").innerHTML="";
        $.get("cargos_anteriormente/sim_1cargo.html", function (data) {
            $("#collapse_cargosanteriores").append(data);
        });
        document.getElementById("collapse_cargosanteriores").innerHTML="";
        $.get("cargos_anteriormente/sim_2cargo.html", function (data) {
            $("#collapse_cargosanteriores").append(data);
        });
    }else if(data.jacp_3_4 == 3){
        document.getElementById("collapse_cargosanteriores").innerHTML="";
        $.get("cargos_anteriormente/sim_1cargo.html", function (data) {
            $("#collapse_cargosanteriores").append(data);
        });
        document.getElementById("collapse_cargosanteriores").innerHTML="";
        $.get("cargos_anteriormente/sim_2cargo.html", function (data) {
            $("#collapse_cargosanteriores").append(data);
        });
        document.getElementById("collapse_cargosanteriores").innerHTML="";
        $.get("cargos_anteriormente/sim_3cargo.html", function (data) {
            $("#collapse_cargosanteriores").append(data);
        });
    }else if(data.jacp_3_4 == 4){
        document.getElementById("collapse_cargosanteriores").innerHTML="";
        $.get("cargos_anteriormente/sim_1cargo.html", function (data) {
            $("#collapse_cargosanteriores").append(data);
        });
        document.getElementById("collapse_cargosanteriores").innerHTML="";
        $.get("cargos_anteriormente/sim_2cargo.html", function (data) {
            $("#collapse_cargosanteriores").append(data);
        });
        document.getElementById("collapse_cargosanteriores").innerHTML="";
        $.get("cargos_anteriormente/sim_3cargo.html", function (data) {
            $("#collapse_cargosanteriores").append(data);
        });
        document.getElementById("collapse_cargosanteriores").innerHTML="";
        $.get("cargos_anteriormente/sim_4cargo.html", function (data) {
            $("#collapse_cargosanteriores").append(data);
        });
    }
    
    

    if(data.oada_3_9 == 1){
        $("#oada3-9").val(data.oada_3_9);
        $('#collapse_oada3-9').collapse('show');
        document.getElementById("oada3-9").style.height = "30px";
        markcheckbox(data.cb_oada_3_9, document.getElementsByName("3-9cb"));
    }
    
    if(data.oadu_3_10 == 1){
        $("#oadu3-10").val(data.oadu_3_10);
        $('#collapse_oadu3-10').collapse('show');
        document.getElementById("oadu3-10").style.height = "30px";
        markcheckbox(data.cb_oadu_3_10, document.getElementsByName("3-10cb"));
    }

    setTimeout(function(){
        get_complementares_cargos_atuais(data.id_complementares);
    }, 2000); 
    
}

function get_complementares_cargos_atuais(id_complementares) {
    $.ajax({
        type : "GET",
        url : url+"get_complementares_cargos_atuais.php?number="+id_complementares,
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                preencher_complementares_cargos_atuais(json['data'], id_complementares);
            }else{
                console.log("erro na fase de complementares cargos atuais");
            }
        },
        error: function (e) {
            console.log(e);
        } 
    }); 
}

function preencher_complementares_cargos_atuais(data, id_complementares) {
    switch (data.length) {
        case 1:
            primeiro_cargo_atual(data);
        break;

        case 2:
            primeiro_cargo_atual(data);
            segundo_cargo_atual(data);
        break;

        case 3:
            primeiro_cargo_atual(data);
            segundo_cargo_atual(data);
            terceiro_cargo_atual(data);
        break;
    }

    get_complementares_cargos_anteriores(id_complementares);

}

function primeiro_cargo_atual(data) {
    for (let i = 0; i < data.length; i++) {
        if(data[i].numero == 1){
            $("#select_est_3_1_1").val(data[i].est);

            $("#select_efet_3_1_1").val(data[i].efet);

            $("#select_tdr_3_1_1").val(data[i].tdr);

            $("#select_ad_3_1_1").val(data[i].ad);

            $("#select_as_3_1_2").val(data[i].as);

            markcheckbox(data[i].ap, document.getElementsByName("3-1-3cb"));
            
            $("#jtlp3-1-4").val(data[i].jtlp);

            if(data[i].jtlp == 1){
                $('.collapse_jtlp3-1-4').collapse('show');

                $("#select_ndl_3_1_5").val(data[i].ndl);

                $("#select_nddda_3_1_5").val(data[i].nddda);

                if(data[i].idpl == "0000-00-00") {
                    $('#idpl3-1-6').val("NAO SOUBE INFORMAR"); 
                }else{
                    $('#idpl3-1-6').val(data[i].idpl);
                }
                
                if(data[i].tdpl == "0000-00-00") {
                    $('#tdpl3-1-6').val("NAO SOUBE INFORMAR"); 
                }else{
                    $('#tdpl3-1-6').val(data[i].tdpl);
                }
                
            }
        } 
    } 
}

function segundo_cargo_atual(data) {
    for (let i = 0; i < data.length; i++) {
        if(data[i].numero == 2){
            $("#select_est_3_2_1").val(data[i].est);

            $("#select_efet_3_2_1").val(data[i].efet);

            $("#select_tdr_3_2_1").val(data[i].tdr);

            $("#select_ad_3_2_1").val(data[i].ad);

            $("#select_as_3_2_2").val(data[i].as);

            markcheckbox(data[i].ap, document.getElementsByName("3-2-3cb"));
            
            $("#jtlp3-2-4").val(data[i].jtlp);

            if(data[i].jtlp == 1){
                $('.collapse_jtlp3-2-4').collapse('show');

                $("#select_ndl_3_2_5").val(data[i].ndl);

                $("#select_nddda_3_2_5").val(data[i].nddda);

                if(data[i].idpl == "0000-00-00") {
                    $('#idpl3-2-6').val("NAO SOUBE INFORMAR"); 
                }else{
                    $('#idpl3-2-6').val(data[i].idpl);
                }
                
                if(data[i].tdpl == "0000-00-00") {
                    $('#tdpl3-2-6').val("NAO SOUBE INFORMAR"); 
                }else{
                    $('#tdpl3-2-6').val(data[i].tdpl);
                }
                
            }
        } 
    } 
}

function terceiro_cargo_atual(data) {
    for (let i = 0; i < data.length; i++) {
        if(data[i].numero == 3){
            $("#select_est_3_3_1").val(data[i].est);

            $("#select_efet_3_3_1").val(data[i].efet);

            $("#select_tdr_3_3_1").val(data[i].tdr);

            $("#select_ad_3_3_1").val(data[i].ad);

            $("#select_as_3_3_2").val(data[i].as);

            markcheckbox(data[i].ap, document.getElementsByName("3-3-3cb"));
            
            $("#jtlp3-3-4").val(data[i].jtlp);

            if(data[i].jtlp == 1){
                $('.collapse_jtlp3-3-4').collapse('show');

                $("#select_ndl_3_3_5").val(data[i].ndl);

                $("#select_nddda_3_3_5").val(data[i].nddda);

                if(data[i].idpl == "0000-00-00") {
                    $('#idpl3-3-6').val("NAO SOUBE INFORMAR"); 
                }else{
                    $('#idpl3-3-6').val(data[i].idpl);
                }
                
                if(data[i].tdpl == "0000-00-00") {
                    $('#tdpl3-3-6').val("NAO SOUBE INFORMAR"); 
                }else{
                    $('#tdpl3-3-6').val(data[i].tdpl);
                }
                
            }
        } 
    } 
}

function get_complementares_cargos_anteriores(id_complementares) {
    $.ajax({
        type : "GET",
        url : url+"get_complementares_cargos_anteriores.php?number="+id_complementares,
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                preencher_complementares_cargos_anteriores(json['data']);
            }else{
                console.log("erro na fase de complementares cargos anteriores");
            }
        },
        error: function (e) {
            console.log(e);
        } 
    }); 
}


function preencher_complementares_cargos_anteriores(data) {
    switch (data.length) {
        case 1:
            primeiro_cargo_anterior(data);
        break;

        case 2:
            primeiro_cargo_anterior(data);
            segundo_cargo_anterior(data);
        break;

        case 3:
            primeiro_cargo_anterior(data);
            segundo_cargo_anterior(data);
            terceiro_cargo_anterior(data);
        break;

        case 4:
            primeiro_cargo_anterior(data);
            segundo_cargo_anterior(data);
            terceiro_cargo_anterior(data);
            quarto_cargo_anterior(data);
        break;
    }

    get_saude_geral();

}

function primeiro_cargo_anterior(data) {
    for (let i = 0; i < data.length; i++) {
        if(data[i].numero == 1){
            $("#select_est_3_5_1").val(data[i].est);
            
            $("#select_peri_3_5_1").val(data[i].peri);
        }
    }  
}

function segundo_cargo_anterior(data){
    for (let i = 0; i < data.length; i++) {
        if(data[i].numero == 2){
            $("#select_est_3_6_1").val(data[i].est);
            
            $("#select_peri_3_6_1").val(data[i].peri);
        }
    }  
}

function terceiro_cargo_anterior(data) {
    for (let i = 0; i < data.length; i++) {
        if(data[i].numero == 3){
            $("#select_est_3_7_1").val(data[i].est);
            
            $("#select_peri_3_7_1").val(data[i].peri);
        }
    }  
}

function quarto_cargo_anterior(data) {
    for (let i = 0; i < data.length; i++) {
        if(data[i].numero == 4){
            $("#select_est_3_8_1").val(data[i].est);
            
            $("#select_peri_3_8_1").val(data[i].peri);
        }
    }  
}
