window.onload = function() {
	document.getElementById("visible_apfd2-0").style.visibility = "hidden";
}



function clearcheckbox(x){
	for (i = 0; i < x.length; i++){
      	x[i].checked = false;
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





