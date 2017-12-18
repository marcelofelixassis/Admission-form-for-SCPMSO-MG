//LINHA 2.0 (APFD_2_0, DIAS_2_0, AD_2_0)
function onblur_apfd20(){
	var x = document.getElementById("apfd2-0").value;
	if(x == 4 || x == 5){	
		document.getElementById("visible_apfd2-0").style.visibility = "visible";
	}else{
		document.getElementById("visible_apfd2-0").style.visibility = "hidden";	
		document.getElementById("dias2-0").value = "";
	}		
}