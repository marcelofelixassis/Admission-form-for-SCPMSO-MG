//LETRA A /// LINHA 6.0 (SINP_6_0)
function onblur_sipr60(){
	var x = document.getElementById("sipr6-0").value;
	if(x == 2){	
  		$('.collapse_sipr6-0').collapse('show');
	}else{
		$('.collapse_sipr6-0').collapse('hide');
		clearcheckbox(document.getElementsByName("6-1cb"));
		document.getElementById("setselect6-1").selected = "true";
		document.getElementById("setselect6-2").selected = "true";		
	}
}

//LETRA C /// LINHA 6.3 (PSLC_6_3, QND_6_3)
function onblur_pslc63(){
	var x = document.getElementById("pslc6-3").value;
	if(x == 1){	
  		$('.collapse_pslc6-3').collapse('show');
	}else{
		$('.collapse_pslc6-3').collapse('hide');
		clearcheckbox(document.getElementsByName("6-4cb"));
		document.getElementById("setselect6-3").selected = "true";	
	}
}

//LETRA D.1 /// LINHA 6.5 (ETFO6-5, NDSE6-5)
function onblur_etfo65(){
	var x = document.getElementById("etfo6-5").value;
	if(x == 1){	
  		$('.collapse_etfo6-5').collapse('show');
	}else{
		$('.collapse_etfo6-5').collapse('hide');	
		document.getElementById("setselect6-4").selected = "true";
		document.getElementById("setselect6-5").selected = "true";
		document.getElementById("setselect6-6").selected = "true";	
		document.getElementById("setselect6-8id").selected = "true";
	}	
}

//LETRA D.2 /// LINHA 6.7 (TFJR6-7, QND6-7)
function onblur_tfjr67(){
	var x = document.getElementById("tfjr6-7").value;
	if(x == 1){	
  		$('.collapse_tfjr6-7').collapse('show');
	}else{
		$('.collapse_tfjr6-7').collapse('hide');
		document.getElementById("setselect6-7").selected = "true";
		document.getElementById("setselect6-8").selected = "true";
	}	
}

//LETRA E /// LINHA 6.10 (CRVC6-10, QND6-10)
function onblur_civo610(){
	var x = document.getElementById("civo6-10").value;
	if(x == 1){	
  		$('.collapse_civo6-10').collapse('show');
	}else{
		$('.collapse_civo6-10').collapse('hide');
		document.getElementById("setselect6-9").selected = "true";	
	}	
}

//LETRA F /// LINHA 6.12 (FUDM6-12, HQNT6-12, OQMD6-12)
function onblur_fudm612(){
	var x = document.getElementById("fudm6-12").value;
	if(x == 1){	
  		$('.collapse_fudm6-12').collapse('show');
	}else{
		$('.collapse_fudm6-12').collapse('hide');	
		document.getElementById("setselect6-10").selected = "true";
		document.getElementById("setselect6-11").selected = "true";
	}	
}

function onblur_tf67(){
	var x = document.getElementById("tf6-7").value;
	if(x == 1){	
  		$('.collapse_tf6-7').collapse('show');
	}else{
		$('.collapse_tf6-7').collapse('hide');	
		$('.collapse_tfjr6-7').collapse('hide');
		document.getElementById("setselect6-7").selected = "true";
		document.getElementById("setselect6-8").selected = "true";
		document.getElementById("setselect6-7id").selected = "true";
		$('.collapse_etfo6-5').collapse('hide');	
		document.getElementById("setselect6-4").selected = "true";
		document.getElementById("setselect6-5").selected = "true";
		document.getElementById("setselect6-6").selected = "true";
		document.getElementById("setselect6-8id").selected = "true";
		document.getElementById("setselect6-4id").selected = "true";	
	}	
}
