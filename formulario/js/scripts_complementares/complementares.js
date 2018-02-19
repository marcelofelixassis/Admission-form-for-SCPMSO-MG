//LETRA A /// LINHA 3.0 (PQCCP_3_0)
function onblur_pqccp30(){
	var x = document.getElementById("pqccp3-0").value;
	if(x == "0"){
		document.getElementById("collapse_cargos").innerHTML="";
	}
	else if(x == "1"){
		document.getElementById("collapse_cargos").innerHTML="";
		$.get("cargos/primeiro_cargo.html", function (data) {
            $("#collapse_cargos").append(data);
        });
	}
	else if(x == "2"){
		document.getElementById("collapse_cargos").innerHTML="";
		$.get("cargos/primeiro_cargo.html", function (data) {
            $("#collapse_cargos").append(data);
        });
		$.get("cargos/segundo_cargo.html", function (data) {
            $("#collapse_cargos").append(data);
        });
	}
	else if(x == "3"){
		document.getElementById("collapse_cargos").innerHTML="";
		$.get("cargos/primeiro_cargo.html", function (data) {
            $("#collapse_cargos").append(data);
        });
		$.get("cargos/segundo_cargo.html", function (data) {
            $("#collapse_cargos").append(data);
        });
		$.get("cargos/terceiro_cargo.html", function (data) {
            $("#collapse_cargos").append(data);
        });        
    }
}


//LETRA B /// LINHA 3.4 (JACP_3_4)
function onblur_jacp34(){
	var x = document.getElementById("jacp3-4").value;
	if(x == 0){	
  		document.getElementById("collapse_cargosanteriores").innerHTML = "";
	}else if(x == 1){
		document.getElementById("collapse_cargosanteriores").innerHTML="";
		$.get("cargos_anteriormente/sim_1cargo.html", function (data) {
            $("#collapse_cargosanteriores").append(data);
        });
	}else if(x == 2){
		document.getElementById("collapse_cargosanteriores").innerHTML="";
		$.get("cargos_anteriormente/sim_1cargo.html", function (data) {
            $("#collapse_cargosanteriores").append(data);
        });
        document.getElementById("collapse_cargosanteriores").innerHTML="";
		$.get("cargos_anteriormente/sim_2cargo.html", function (data) {
            $("#collapse_cargosanteriores").append(data);
        });
	}else if(x == 3){
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
	}else if(x == 4){
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
}


//LETRA C /// LINHA 3.9 (OADA_3_9, CB_OADA_3_9)
function onblur_oada39(){
	var x = document.getElementById("oada3-9").value;
	if(x == 1){	
  		$('#collapse_oada3-9').collapse('show');
  		document.getElementById("oada3-9").style.height = "42px";
	}else{
		$('#collapse_oada3-9').collapse('hide');
		clearcheckbox(document.getElementsByName("3-9cb"));	
	}	
}


//LETRA D /// LINHA 3.10 (OADU_3_10, CB_OADU_3_10)
function onblur_oadu310(){
	var x = document.getElementById("oadu3-10").value;
	if(x == 1){	
  		$('#collapse_oadu3-10').collapse('show');
  		document.getElementById("oadu3-10").style.height = "42px";
	}else{
		$('#collapse_oadu3-10').collapse('hide');
		clearcheckbox(document.getElementsByName("3-10cb"));	
	}	
}


// LINHA 3.1.4 -- FIZ ESSE COLLAPSE NA PRIMEIRA FASE DE CORREÇÕES
function onblur_jtlp314(){
	var x = document.getElementById("jtlp3-1-4").value;
	if(x == 1){	
  		$('.collapse_jtlp3-1-4').collapse('show');
	}else{
		$('.collapse_jtlp3-1-4').collapse('hide');
		//LINHA 3.1.5 (NDL3-1-5, NDDDA3-1-5)
		document.getElementById("setselect3-1-4").selected = "true";
		document.getElementById("setselect3-1-5").selected = "true";
		document.getElementById("idpl3-1-6").value = "";
		document.getElementById("tdpl3-1-6").value = "";	
	}	
}


// LINHA 3.2.4 -- FIZ ESSE COLLAPSE NA PRIMEIRA FASE DE CORREÇÕES
function onblur_jtlp324(){
	var x = document.getElementById("jtlp3-2-4").value;
	if(x == 1){	
  		$('.collapse_jtlp3-2-4').collapse('show');
	}else{
		$('.collapse_jtlp3-2-4').collapse('hide');
		// LINHA 3.2.5 (NDL3-2-5, NDDDA3-2-5)
		document.getElementById("setselect3-2-4").selected = "true";
		document.getElementById("setselect3-2-5").selected = "true";
		document.getElementById("idpl3-2-6").value = "";
		document.getElementById("tdpl3-2-6").value = "";
	}	
}

function alerta(){
	alert("sadsad");
}

// LINHA 3.3.4 -- FIZ ESSE COLLAPSE NA PRIMEIRA FASE DE CORREÇÕES
function onblur_jtlp334(){
	var x = document.getElementById("jtlp3-3-4").value;
	if(x == 1){	
  		$('.collapse_jtlp3-3-4').collapse('show');
	}else{
		$('.collapse_jtlp3-3-4').collapse('hide');
		//LINHA 3.3.5 (NDL3-3-5, NDDDA3-3-5)
		document.getElementById("setselect3-3-4").selected = "true";
		document.getElementById("setselect3-3-5").selected = "true";
		document.getElementById("idpl3-3-6").value = "";
		document.getElementById("tdpl3-3-6").value = "";
	}	
}

function nao_soube_info(s, i){
switch (s) {
	case 1:
	if (i == 1){
		document.getElementById("idpl3-1-6").value = "NAO SOUBE INFORMAR";
	}else{
		document.getElementById("tdpl3-1-6").value = "NAO SOUBE INFORMAR";
	}
	break;

	case 2:
		if (i == 1){
			document.getElementById("idpl3-2-6").value = "NAO SOUBE INFORMAR";
		}else{
			document.getElementById("tdpl3-2-6").value = "NAO SOUBE INFORMAR";
		}
	break;

	case 3:
		if (i == 1){
			document.getElementById("idpl3-3-6").value = "NAO SOUBE INFORMAR";
		}else{
			document.getElementById("tdpl3-3-6").value = "NAO SOUBE INFORMAR";
		}
	break;
}
}



