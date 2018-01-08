function insert_concluidos(id_do_parecer_fon){

    var vet = new Array();
    var sessao = document.getElementsByName("sessao11");
    for(var i = 0; i < sessao.length; i++){
        vet[i] = sessao[i].value;
    }

    vet.push(getcheckboxs(document.getElementsByName("11-0cb")));
    vet.push(getcheckboxs(document.getElementsByName("11-2cb")));

    vet.push(id_do_parecer_fon);

    console.log(vet);

    $.ajax({
        type : "GET",
        url : url+"final.php?data="+JSON.stringify(vet),
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                console.log(json);
            }else{
                console.log(json);
            }
        },
        error: function (e) {
            loading(6, false);
            console.log(e);
        } 
    });	
}