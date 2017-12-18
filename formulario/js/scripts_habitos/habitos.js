window.onload = function() {
	$('#collapse_taba5-0_extaba').collapse('show');
	$('#collapse_taba5-0_taba').collapse('show');
}

//LINHA 5.0 (TABA_5_0, HQT_5_0, QCD_5_0)
function onblur_taba50(){
	var x = document.getElementById("taba5-0").value;
	if(x == 1){	
  		$('.collapse_taba5-0').collapse('show');
  		$('#collapse_taba5-0_extaba').collapse('hide');
  		$('.collapse_extaba5-1').collapse('hide');	
  		document.getElementById("setnao5-1").selected = "true";
		document.getElementById("setselect5-3").selected = "true";
		document.getElementById("setselect5-4").selected = "true";
	}else{
		$('.collapse_taba5-0').collapse('hide');
		$('#collapse_taba5-0_extaba').collapse('show');
		document.getElementById("setselect5-1").selected = "true";
		document.getElementById("setselect5-2").selected = "true";	
	}
}

//LINHA 5.1 (EXTABA_5_1, FPQT_5_1, PHQT_5_1)
function onblur_extaba51(){
	var x = document.getElementById("extaba5-1").value;
	if(x == 1){	
  		$('.collapse_extaba5-1').collapse('show');
  		$('#collapse_taba5-0_taba').collapse('hide');
  		$('.collapse_taba5-0').collapse('hide');
  		document.getElementById("setselect5-1").selected = "true";
		document.getElementById("setselect5-2").selected = "true";
	}else{
		$('.collapse_extaba5-1').collapse('hide');
		$('#collapse_taba5-0_taba').collapse('show');	
		document.getElementById("setselect5-3").selected = "true";
		document.getElementById("setselect5-4").selected = "true";	
	}	
}

//LINHA 5.2 (DRIL_5_2, CB_DRIL_5_2, OTR_5_2)
function onblur_dril52(){
	var x = document.getElementById("dril5-2").value;
	if(x == 1){	
  		$('.collapse_dril5-2').collapse('show');
	}else{
		$('.collapse_dril5-2').collapse('hide');	
		clearcheckbox(document.getElementsByName("5-2cb"));
		document.getElementById("inputsessao5").value = "";	
	}	
}

//LINHA 5.3 (ETIL_5_3, QTB_5_3, QAF_5_3)
function onblur_etil53(){
	var x = document.getElementById("etil5-3").value;
	if(x == 1){	
  		$('.collapse_etil5-3').collapse('show');
	}else{
		$('.collapse_etil5-3').collapse('hide');
		clearcheckbox(document.getElementsByName("5-3cb"));
		document.getElementById("setselect5-6").selected = "true";	
	}	
}


//LINHA 5.4 (OHVI_5_4, CB_OHVI_5_4) -> COLLAPSE PARA CHECKBOX ADICIONADO NA PRIMEIRA FASE DE ALTERAÇÕES
function onblur_ohvi54(){
	var x = document.getElementById("ohvi5-4").value;
	if(x == 1){	
  		$('#collapse_ohvi5-4').collapse('show');
	}else{
		$('#collapse_ohvi5-4').collapse('hide');
		clearcheckbox(document.getElementsByName("5-4cb"));
	}		
}