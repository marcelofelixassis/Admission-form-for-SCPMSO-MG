function get_identificacao(){
    $.ajax({
        type : "GET",
        url : url+"get_identificacao.php?number="+identificacao,
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                preencher_identificacao(json['data'][0]);
            }else{
                console.log("erro fase de identificacao");
            }
        },
        error: function (e) {
            console.log(e);
        } 
    }); 
}


function preencher_identificacao(data){
    var sessao = document.getElementsByName("sessao1");
    sessao[0].value = data.nome_1_0;

    $("#select_sexo_1_0").val(data.sexo_1_0);
    
    sessao[2].value = data.dt_1_1;

    $("#select_ec_1_1").val(data.ec_1_1);

    if(data.cpf_1_1 == 0){
        $("#cpfmasp").val('2');
        sessao[5].value = data.masp_1_1; 
    }else{
        $("#cpfmasp").val('1'); 
        sessao[5].value = data.cpf_1_1;      
    }

    get_finalidade();
}