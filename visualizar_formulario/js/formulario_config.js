//limpa os checkbox's
function clearcheckbox(x){
	for (i = 0; i < x.length; i++){
      	x[i].checked = false;
	}
}

//pega radios marcados
function getradiobuttons(radios){
	for(var i = 0; i < radios.length; i++){
		if(radios[i].checked){
			return radios[i].value;
		}
	}
}

//mascara de cpf e masp
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