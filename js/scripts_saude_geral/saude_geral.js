//LINHA 4.0 (DFL4-0, CB_DFL4-0)
function onblur_dfl40(){
	var x = document.getElementById("dfl4-0").value;
	if(x == 1){	
  		$('#collapse_dfl4-0').collapse('show');
	}else{
		$('#collapse_dfl4-0').collapse('hide');	
		clearcheckbox(document.getElementsByName("4-0cb"));
	}
}

//LINHA 4.1 (DOA4-1, CB_DOA4-1)
function onblur_doa41(){
	var x = document.getElementById("doa4-1").value;
	if(x == 1){	
  		$('#collapse_doa4-1').collapse('show');
	}else{
		$('#collapse_doa4-1').collapse('hide');
		clearcheckbox(document.getElementsByName("4-1cb"));	
	}
}

//LINHA 4.2 (DA4-2, CB_DA4-2)
function onblur_da42(){
	var x = document.getElementById("da4-2").value;
	if(x == 1){	
  		$('#collapse_da4-2').collapse('show');
	}else{
		$('#collapse_da4-2').collapse('hide');	
		clearcheckbox(document.getElementsByName("4-2cb"));
	}
}

//LINHA 4.3 (DNSF4-3, CB_DNSF4-3)
function onblur_dnsf43(){
	var x = document.getElementById("dnsf4-3").value;
	if(x == 1){	
  		$('#collapse_dnsf4-3').collapse('show');
	}else{
		$('#collapse_dnsf4-3').collapse('hide');
		clearcheckbox(document.getElementsByName("4-3cb"));	
	}
}

//LINHA 4.4 (SDRG4-4, CB_SDRG4-4)
function onblur_sdrg44(){
	var x = document.getElementById("sdrg4-4").value;
	if(x == 1){	
  		$('#collapse_sdrg4-4').collapse('show');
  		document.getElementById("sdrg4-4").style.height = "42px";
	}else{
		$('#collapse_sdrg4-4').collapse('hide');	
		clearcheckbox(document.getElementsByName("4-4cb"));
	}
}

//LINHA 4.5 (OASG4-5, CB_OASG4-5)
function onblur_oasg45(){
	var x = document.getElementById("oasg4-5").value;
	if(x == 1){	
  		$('#collapse_oasg4-5').collapse('show');
  		document.getElementById("oasg4-5").style.height = "30px";
	}else{
		$('#collapse_oasg4-5').collapse('hide');
		clearcheckbox(document.getElementsByName("4-5cb"));	
	}
}

//LETRA A /// LINHA 4.6 (FUDM4-6, CB_FUDM4-6)
function onblur_fudm46(){
	var x = document.getElementById("fudm4-6").value;
	if(x == 1){	
  		$('.collapse_fudm4-6').collapse('show');
  		document.getElementById("fudm4-6").style.height = "30px";
	}else{
		$('.collapse_fudm4-6').collapse('hide');
		clearcheckbox(document.getElementsByName("4-6cb"));	
		document.getElementById("input_ndm4-6").value = "";
	}
}

//LETRA B /// LINHA 4.7 (CCAG4.7)	
function onblur_ccag47(){
	var x = document.getElementById("ccag4-7").value;
	if(x == 1){	
  		$('#collapse_ccag4-7').collapse('show');
	}else{
		$('#collapse_ccag4-7').collapse('hide');
		document.getElementById("input_ccag4-7").value = "";	
	}	
}