//LETRA A /// LINHA 3.0 (PQCCP3-0)
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


//LETRA B /// LINHA 3.4 (JACP3-4)
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


//LETRA C /// LINHA 3.9 (OADU3-9, CB_OADU3-9)
function onblur_oadu39(){
	var x = document.getElementById("oadu3-9").value;
	if(x == 1){	
  		$('#collapse_oadu3-9').collapse('show');
  		document.getElementById("oadu3-9").style.height = "30px";
	}else{
		$('#collapse_oadu3-9').collapse('hide');
		clearcheckbox(document.getElementsByName("3-9cb"));	
	}	
}


//LETRA D /// LINHA 3.10 (OADA3-10, CB_OADA3-10)
function onblur_oada310(){
	var x = document.getElementById("oada3-10").value;
	if(x == 1){	
  		$('#collapse_oada3-10').collapse('show');
  		document.getElementById("oada3-10").style.height = "30px";
	}else{
		$('#collapse_oada3-10').collapse('hide');
		clearcheckbox(document.getElementsByName("3-10cb"));	
	}	
}


// LINHA 3.1.5 -- FIZ ESSE COLLAPSE NA PRIMEIRA FASE DE CORREÇÕES
function onblur_jtlp315(){
	var x = document.getElementById("jtlp3-1-5").value;
	if(x == 1){	
  		$('.collapse_jtlp3-1-5').collapse('show');
	}else{
		$('.collapse_jtlp3-1-5').collapse('hide');
	}	
}


// LINHA 3.2.5 -- FIZ ESSE COLLAPSE NA PRIMEIRA FASE DE CORREÇÕES
function onblur_jtlp325(){
	var x = document.getElementById("jtlp3-2-5").value;
	if(x == 1){	
  		$('.collapse_jtlp3-2-5').collapse('show');
	}else{
		$('.collapse_jtlp3-2-5').collapse('hide');
	}	
}


// LINHA 3.3.5 -- FIZ ESSE COLLAPSE NA PRIMEIRA FASE DE CORREÇÕES
function onblur_jtlp335(){
	var x = document.getElementById("jtlp3-3-5").value;
	if(x == 1){	
  		$('.collapse_jtlp3-3-5').collapse('show');
	}else{
		$('.collapse_jtlp3-3-5').collapse('hide');
	}	
}