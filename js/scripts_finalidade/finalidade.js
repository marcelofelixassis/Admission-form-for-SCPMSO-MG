//LINHA 2.0 (APFD2-0, DIAS2-0, AD2-0)
function onblur_apfd20(){
	var x = document.getElementById("apfd2-0").value;
	if(x == 4 || x == 5){	
		document.getElementById("visible_apfd2-0").style.visibility = "visible";
	}else{
		document.getElementById("visible_apfd2-0").style.visibility = "hidden";	
		document.getElementById("inputsessao2").value = "";
	}		
}