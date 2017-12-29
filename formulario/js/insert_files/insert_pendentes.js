// 8° FASE >>> FASE DE INSERTS NA TABELA DE AVALIACAO ESPECTROGRAFICA
function insert_pendentes(id_do_parecer_fon){
        
    var vet = new Array();
    var sessao = document.getElementsByName("sessao10");
    for(var i = 0; i < sessao.length; i++){
        vet[i] = sessao[i].value;
    }

    vet.push(getcheckboxs(document.getElementsByName("10-0cb")))
    vet.push(getcheckboxs(document.getElementsByName("10-1cb")))

    vet.push(id_do_parecer_fon);
}