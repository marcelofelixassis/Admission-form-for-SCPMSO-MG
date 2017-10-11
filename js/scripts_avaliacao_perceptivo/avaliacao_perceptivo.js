//LINHA 7.9 (TMDF_7_9)
function onblur_tmdf79(){
	var x = document.getElementById("tmdf7-9").value;
	if(x == 1){	
  		$('.collapse_tmdf7-9').collapse('show');
	}else{
		$('.collapse_tmdf7-9').collapse('hide');
		clearcheckbox(document.getElementsByName("7-10acb"));	
		clearcheckbox(document.getElementsByName("7-10icb"));	
		clearcheckbox(document.getElementsByName("7-10ucb"));
		document.getElementById("input_a").value = "";		
		document.getElementById("input_i").value = "";	
		document.getElementById("input_u").value = "";	
		document.getElementById("input_s").value = "";	
		document.getElementById("input_z").value = "";	
		document.getElementById("input_sz").value = "";		
	}		
}

//LINHA 7.11 (S_7_11, Z_7_11, RSZ_7_11)
function onblur_calc_sz(){
	var s = document.getElementById("input_s").value;
	var numero1 = parseFloat(s.replace(',', '.'));
	var z = document.getElementById("input_z").value;
	var numero2 = parseFloat(z.replace(',', '.'));
	document.getElementById("input_sz").value = (parseFloat(numero1) / parseFloat(numero2)).toFixed(2);
}


