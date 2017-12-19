function get_complementares(){
    $.ajax({
        type : "GET",
        url : url+"get_complementares.php?number="+finalidade,
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                console.log(json);
                preencher_complementares(json['data'][0]);
            }else{
                console.log("erro na fase de finalidade");
            }
        },
        error: function (e) {
            console.log(e);
        } 
    }); 
}

function preencher_complementares(data){
    var sessao = document.getElementsByName("sessao3");
    console.log(sessao);
    console.log(data);
    
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
    
}