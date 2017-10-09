function onblur_apfd20(){
	var x = document.getElementById("apfd2-0").value;
	if(x == 4){	
		document.getElementById("visible_apfd2-0").style.visibility = "visible";
	}else{
		document.getElementById("visible_apfd2-0").style.visibility = "hidden";	
		document.getElementById("inputsessao2").value = "";
	}		
}
