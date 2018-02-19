function get_obs(){
    $.ajax({
        type : "GET",
        url : url+"get_obs.php?number="+finalidade,
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                preencher_obs(json['data'][0]);
            }else{
                console.log("erro na fase de observações");
            }
        },
        error: function (e) {
            console.log(e);
        } 
    }); 
}

function preencher_obs(data) {
    var sessao = document.getElementsByName("textobs");

    console.log(sessao);
    
    if(data.obs_finalidade != "") { 
        $('.collapse_obs_finalidade').collapse('show');
        sessao[0].value = data.obs_finalidade;
    }

    if(data.obs_complementares != "") { 
        $('.collapse_obs_complementares').collapse('show');
        sessao[1].value = data.obs_complementares;
    }

    if(data.obs_saude_geral != "") { 
        $('.collapse_obs_saude_geral').collapse('show');
        sessao[2].value = data.obs_saude_geral;
    }

    if(data.obs_habitos != "") { 
        $('.collapse_obs_habitos').collapse('show');
        sessao[3].value = data.obs_habitos;
    }

    if(data.obs_saude_vocal != "") { 
        $('.collapse_obs_saude_vocal').collapse('show');
        sessao[4].value = data.obs_saude_vocal;
    }

    if(data.obs_avaliacao_percep != "") { 
        $('.collapse_obs_avaliacao_percep').collapse('show');
        sessao[5].value = data.obs_avaliacao_percep;
    }

    if(data.obs_avaliacao_especto != "") { 
        $('.collapse_obs_avaliacao_especto').collapse('show');
        sessao[6].value = data.obs_avaliacao_especto;
    }

    if(data.obs_parecer_fon != "") { 
        $('.collapse_obs_parecer_fon').collapse('show');
        sessao[7].value = data.obs_parecer_fon;
    }

    if(data.obs_conclcuido != "") { 
        $('.collapse_obs_concluido').collapse('show');
        sessao[8].value = data.obs_conclcuido;
    }else {
        $('.collapse_obs_pendente').collapse('show');
        sessao[8].value = data.obs_pendente;
    }
}