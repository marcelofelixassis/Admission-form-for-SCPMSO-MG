// 8° FASE >>> FASE DE INSERTS NA TABELA DE AVALIACAO ESPECTROGRAFICA
function parecer_fono(id_da_finalidade){
        
        var vet = new Array();
        var sessao = document.getElementsByName("sessao9");
        for(var i = 0; i < sessao.length; i++){
            vet[i] = sessao[i].value;
        }
    
        // var sessao = document.getElementsByName("8-1cb");
        // var vetcb = new Array();
        // for(var i = 0; i < sessao.length; i++){
        //     if(sessao[i].checked){
        //         vetcb[i] = sessao[i].value;
        //     }else{
        //         vetcb[i] = '0';
        //     }
            
        // }
        // vet.push(vetcb);
        vet.push(id_da_finalidade);
        console.log(vet);
    
    
    }