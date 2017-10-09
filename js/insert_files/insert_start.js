var url = "http://10.16.90.76/php/";
var content = "application/json; charset=UTF-8";

// 0° FASE >>> STARTA OS INSERTS

function start_insert(){
	identificacao();
}





function testename(){
	var sessao = document.getElementsByName("sessao6");
	var vet = new Array();
	for(var i = 0; i < sessao.length; i++){
		vet[i] = sessao[i].value;
		console.log(i+" = "+sessao[i].value);
	}
	vet.push(getcheckboxs(document.getElementsByName("6-1cb")));
	vet.push(getcheckboxs(document.getElementsByName("6-4cb")));
	console.log(JSON.stringify(vet));




// 	var sessao = document.getElementsByName("5-0cb");
// 	console.log("asdasd");
// 	console.log(sessao);
// 	var vet = new Array();
// 	// for(var i = 0; i < sessao.length; i++){
// 	// 	vet[i] = sessao[i].value;
// 	// 	console.log(i+" = "+sessao[i].value);
// 	// }
// 	// vet.push(11);
// 	// vet.push(2);
// 	// console.log(JSON.stringify(vet));
// 	var union = new Array();
// 	for(var i = 0; i < sessao.length; i++){
// 		if (sessao[i].checked){
// 			vet.push(sessao[i].value);
// 		}
// 	}
// union.push(vet.toString());
// console.log(JSON.stringify(union));

	

}


