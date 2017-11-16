function clearcheckbox(x){
	for (i = 0; i < x.length; i++){
      	x[i].checked = false;
	}
}


function getradiobuttons(radios){
	for(var i = 0; i < radios.length; i++){
		if(radios[i].checked){
			return radios[i].value;
		}
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
	if(document.getElementById("cpfmasp").value == 1){
 	 	v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
    	v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    	v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos de novo (para o segundo bloco de números)
    	v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    	return v	
    }else{
    	v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
    	v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    	v=v.replace(/(\d{2})(\d{1,1})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    	return v

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
}





