window.onload = function() {
	document.getElementById("visible_apfd2-0").style.visibility = "hidden";
}



function clearcheckbox(x){
	for (i = 0; i < x.length; i++){
      	x[i].checked = false;
	}
}
















function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}

function cpf(v){
    v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                             //de novo (para o segundo bloco de números)
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    return v
}


















function onblur_spfu(){
	var x = document.getElementById("spfu").value;
	if(x == 3){	
  		$('.collapse_spfu').collapse('show');
	}else{
		$('.collapse_spfu').collapse('hide');	
	}	
}

function getradiobuttons(radios){
	for(var i = 0; i < radios.length; i++){
		if(radios[i].checked){
			return radios[i].value;
		}
	}
}




function testename2(){
	var vet = new Array();
	var sessao = document.getElementsByName("sessao7");
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}

	var vetrb = new Array();
	var sessao = document.getElementsByName("7-1grb");
	vetrb.push(getradiobuttons(sessao))

	var sessao = document.getElementsByName("7-1srb");
	vetrb.push(getradiobuttons(sessao))

	var sessao = document.getElementsByName("7-1trb");
	vetrb.push(getradiobuttons(sessao))

	var sessao = document.getElementsByName("7-1rrb");
	vetrb.push(getradiobuttons(sessao))

	var sessao = document.getElementsByName("7-1arb");
	vetrb.push(getradiobuttons(sessao))

	var sessao = document.getElementsByName("7-1irb");
	vetrb.push(getradiobuttons(sessao))

	vet.push(vetrb);
	
	for(var i = 0; i < sessao.length; i++){
		if(sessao[i].checked){
			console.log(sessao[i].value);
		}
	}

	var vetcb = new Array();
	vetcb.push(getcheckboxs(document.getElementsByName("7-10acb")));
	vetcb.push(getcheckboxs(document.getElementsByName("7-10icb")));
	vetcb.push(getcheckboxs(document.getElementsByName("7-10ucb")));

	vet.push(vetcb)

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





