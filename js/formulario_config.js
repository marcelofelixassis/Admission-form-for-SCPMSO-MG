window.onload = function() {
	document.getElementById("visible_apfd2-0").style.visibility = "hidden";
}



function clearcheckbox(x){
	for (i = 0; i < x.length; i++){
      	x[i].checked = false;
	}
}
















function onblur_taba60(){
	var x = document.getElementById("taba6-0").value;
	if(x == 1){	
  		$('.collapse_taba6-0').collapse('show');
	}else{
		$('.collapse_taba6-0').collapse('hide');
		document.getElementById("setselect5-1").selected = "true";
		document.getElementById("setselect5-2").selected = "true";	
	}
}

function onblur_extaba61(){
	var x = document.getElementById("extaba6-1").value;
	if(x == 1){	
  		$('.collapse_extaba6-1').collapse('show');
	}else{
		$('.collapse_extaba6-1').collapse('hide');	
		document.getElementById("setselect5-3").selected = "true";
		document.getElementById("setselect5-4").selected = "true";	
	}	
}

function onblur_dril62(){
	var x = document.getElementById("dril6-2").value;
	if(x == 1){	
  		$('.collapse_dril6-2').collapse('show');
	}else{
		$('.collapse_dril6-2').collapse('hide');	
		clearcheckbox(document.getElementsByName("5-2cb"));
		document.getElementById("inputsessao5").value = "";	
	}	
}

function onblur_etil63(){
	var x = document.getElementById("etil6-3").value;
	if(x == 1){	
  		$('.collapse_etil6-3').collapse('show');
	}else{
		$('.collapse_etil6-3').collapse('hide');
		document.getElementById("setselect5-5").selected = "true";
		document.getElementById("setselect5-6").selected = "true";	
	}	
}



function onblur_sipr70(){
	var x = document.getElementById("sipr7-0").value;
	if(x == 2){	
  		$('.collapse_sipr7-0').collapse('show');
	}else{
		$('.collapse_sipr7-0').collapse('hide');
		clearcheckbox(document.getElementsByName("6-1cb"));
		document.getElementById("setselect6-1").selected = "true";
		document.getElementById("setselect6-2").selected = "true";		
	}
}

function onblur_pslc73(){
	var x = document.getElementById("pslc7-3").value;
	if(x == 1){	
  		$('.collapse_pslc7-3').collapse('show');
	}else{
		$('.collapse_pslc7-3').collapse('hide');
		clearcheckbox(document.getElementsByName("6-4cb"));
		document.getElementById("setselect6-3").selected = "true";	
	}
}

function onblur_etfo75(){
	var x = document.getElementById("etfo7-5").value;
	if(x == 1){	
  		$('.collapse_etfo7-5').collapse('show');
	}else{
		$('.collapse_etfo7-5').collapse('hide');	
		document.getElementById("setselect6-4").selected = "true";
		document.getElementById("setselect6-5").selected = "true";
		document.getElementById("setselect6-6").selected = "true";	
	}	
}

function onblur_tfjr76(){
	var x = document.getElementById("tfjr7-6").value;
	if(x == 1){	
  		$('.collapse_tfjr7-6').collapse('show');
	}else{
		$('.collapse_tfjr7-6').collapse('hide');
		document.getElementById("setselect6-7").selected = "true";
		document.getElementById("setselect6-8").selected = "true";
	}	
}

function onblur_civo77(){
	var x = document.getElementById("civo7-7").value;
	if(x == 1){	
  		$('.collapse_civo7-7').collapse('show');
	}else{
		$('.collapse_civo7-7').collapse('hide');
		document.getElementById("setselect6-9").selected = "true";	
	}	
}

function onblur_fudm792(){
	var x = document.getElementById("fudm7-9-2").value;
	if(x == 1){	
  		$('.collapse_fudm7-9-2').collapse('show');
	}else{
		$('.collapse_fudm7-9-2').collapse('hide');	
		document.getElementById("setselect6-10").selected = "true";
		document.getElementById("setselect6-11").selected = "true";
	}	
}

function onblur_nfpa90(){
	var x = document.getElementById("nfpa9-0").value;
	if(x == 1){	
  		$('.collapse_nfpa9-0').collapse('show');
	}else{
		$('.collapse_nfpa9-0').collapse('hide');	
	}		
}

function onblur_spfu(){
	var x = document.getElementById("spfu").value;
	if(x == 3){	
  		$('.collapse_spfu').collapse('show');
	}else{
		$('.collapse_spfu').collapse('hide');	
	}	
}



function testename2(){
	var sessao = document.getElementsByName("sessao1");
	var vet = new Array();
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}
	var json = JSON.stringify(vet);
	console.log(json);


	
	/*console.log("///////// sessao 2 //////////");
	var x = document.getElementsByName("sessao2");
	for(var i = 0; i < 5; i++){
		console.log(i+" = "+x[i].value);
	}*/



	// console.log("//////// sessao 3 //////////");
	// var x = document.getElementsByName("sessao3");
	// console.log(x[0].value);
	// console.log(x[1].value);
	// console.log(x[2].value);
	// var y = document.getElementsByName("3-9cb");
	// var str = "";
	// for(var i = 0; i < y.length; i++){
	// 	if(y[i].checked == true){
	// 		str += y[i].value + ", ";
	// 	}	
	// }
	// console.log(str);
	// console.log("//////// sessao 3.1 //////////");
	// var x = document.getElementsByName("sessao3-3");
	// for(var i = 0; i < x.length; i++){
	// 	console.log(i+" = "+x[i].value);
	//}
	/*if(x[0].value == 1){
		console.log("------CARGO 1-------");
		var x = document.getElementsByName("sessao4-1");
		for(i = 0; i < 12; i++){
			console.log(x[i].value);
		}
	}else if(x[0].value == 2){
		console.log("------CARGO 1-------");
		var x = document.getElementsByName("sessao4-1");
		for(i = 0; i < 12; i++){
			console.log(x[i].value);
		}
		console.log("------CARGO 2-------");
		var x = document.getElementsByName("sessao4-2");
		for(i = 0; i < 12; i++){
			console.log(x[i].value);
		}		
		//for no primeiro e segundo cargo
	}else if(x[0].value == 3){
		console.log("------CARGO 1-------");
		var x = document.getElementsByName("sessao4-1");
		for(i = 0; i < 12; i++){
			console.log(x[i].value);
		}
		console.log("------CARGO 2-------");
		var x = document.getElementsByName("sessao4-2");
		for(i = 0; i < 12; i++){
			console.log(x[i].value);
		}
		console.log("------CARGO 3-------");
		var x = document.getElementsByName("sessao4-3");
		for(i = 0; i < 12; i++){
			console.log(x[i].value);
		}						
		//for no primeiro, sgundo e terceiro cargo
	}

	/*



	console.log("/////////// sessao 4 /////////");
	var x = document.getElementsByName("sessao4-4");
	console.log(x[0].value);
	if(x[0].value == 1){
		console.log("------CARGO ANTERIOR 1-------");
		var x = document.getElementsByName("sessao4-5");
		for(i = 0; i < 2; i++){
			console.log(x[i].value);
		}		
	}else if(x[0].value == 2){
		console.log("------CARGO ANTERIOR 1-------");
		var x = document.getElementsByName("sessao4-5");
		for(i = 0; i < 2; i++){
			console.log(x[i].value);
		}
		console.log("------CARGO ANTERIOR 2-------");
		var x = document.getElementsByName("sessao4-6");
		for(i = 0; i < 2; i++){
			console.log(x[i].value);
		}
	}else if(x[0].value == 3){
		console.log("------CARGO ANTERIOR 1-------");
		var x = document.getElementsByName("sessao4-5");
		for(i = 0; i < 2; i++){
			console.log(x[i].value);
		}
		console.log("------CARGO ANTERIOR 2-------");
		var x = document.getElementsByName("sessao4-6");
		for(i = 0; i < 2; i++){
			console.log(x[i].value);
		}
		console.log("------CARGO ANTERIOR 3-------");
		var x = document.getElementsByName("sessao4-7");
		for(i = 0; i < 2; i++){
			console.log(x[i].value);
		}				
	}else if(x[0].value == 4){
		console.log("------CARGO ANTERIOR 1-------");
		var x = document.getElementsByName("sessao4-5");
		for(i = 0; i < 2; i++){
			console.log(x[i].value);
		}
		console.log("------CARGO ANTERIOR 2-------");
		var x = document.getElementsByName("sessao4-6");
		for(i = 0; i < 2; i++){
			console.log(x[i].value);
		}
		console.log("------CARGO ANTERIOR 3-------");
		var x = document.getElementsByName("sessao4-7");
		for(i = 0; i < 2; i++){
			console.log(x[i].value);
		}
		console.log("------CARGO ANTERIOR 4-------");
		var x = document.getElementsByName("sessao4-8");
		for(i = 0; i < 2; i++){
			console.log(x[i].value);
		}						
	}*/

	/*var x = document.getElementsByName("sessao6-0");
	if(x[0].value == 0){
		console.log("lalal")
		x[1].value = "-";
		x[2].value = "-";
	}
	console.log(x[0].value);
	console.log(x[1].value);
	console.log(x[2].value);*/
		
	/*var x = document.getElementsByName("sessao6-2cb");
	var str = "";
	for(var i = 0; i < x.length; i++){
		if(x[i].checked == true){
			str += x[i].value + ", ";
		}	
	}
	console.log(str);*/




}





