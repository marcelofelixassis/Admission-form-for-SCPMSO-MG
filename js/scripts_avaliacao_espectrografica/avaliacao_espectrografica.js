//LINHA 8.0 (SFU_8_0)
function onblur_spfu(){
	var x = document.getElementById("spfu").value;
	if(x == 3){	
  		$('.collapse_spfu').collapse('show');
	}else{
		$('.collapse_spfu').collapse('hide');	
	}	
}