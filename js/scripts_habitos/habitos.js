//LINHA 5.0 (TABA5-0, HQT5-0, QCD5-0)
function onblur_taba50(){
	var x = document.getElementById("taba5-0").value;
	if(x == 1){	
  		$('.collapse_taba5-0').collapse('show');
	}else{
		$('.collapse_taba5-0').collapse('hide');
		document.getElementById("setselect5-1").selected = "true";
		document.getElementById("setselect5-2").selected = "true";	
	}
}

//LINHA 5.1 (EXTABA5-1, FPQT5-1, PHQT5-1)
function onblur_extaba51(){
	var x = document.getElementById("extaba5-1").value;
	if(x == 1){	
  		$('.collapse_extaba5-1').collapse('show');
	}else{
		$('.collapse_extaba5-1').collapse('hide');	
		document.getElementById("setselect5-3").selected = "true";
		document.getElementById("setselect5-4").selected = "true";	
	}	
}

//LINHA 5.2 (DRIL5-2, CB_DRIL5-2, OTR5-2)
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

//LINHA 5.3 (ETIL5-3, QTB5-3, QAF5-3)
function onblur_etil53(){
	var x = document.getElementById("etil5-3").value;
	if(x == 1){	
  		$('.collapse_etil5-3').collapse('show');
	}else{
		$('.collapse_etil5-3').collapse('hide');
		document.getElementById("setselect5-5").selected = "true";
		document.getElementById("setselect5-6").selected = "true";	
	}	
}