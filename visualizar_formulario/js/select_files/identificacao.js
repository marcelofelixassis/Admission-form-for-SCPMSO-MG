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
                console.log("sdasd");
            }
        },
        error: function (e) {
            console.log(e);
            loading(9, false);
        } 
    }); 
}


function preencher_identificacao(data){
    var sessao = document.getElementsByName("sessao1");
    sessao[0].value = data.nome_1_0;

    switch (data.sexo_1_0) {
        case '1':
            $("#select_sexo_1_0").val('1');
        break;
    
        default:
            $("#select_sexo_1_0").val('2');
        break;
    }
    
    sessao[2].value = data.dt_1_1;

    switch (data.ec_1_1) {
        case '1':
            $("#select_ec_1_1").val('1');
        break;

        case '2':
            $("#select_ec_1_1").val('2');
        break;

        case '3':
            $("#select_ec_1_1").val('3');
        break;
    
        case '4':
            $("#select_ec_1_1").val('4');
        break;

        default:
            $("#select_ec_1_1").val('0');
        break;
    }

    if(data.cpf_1_1 == 0){
        $("#cpfmasp").val('2');
        sessao[5].value = data.masp_1_1; 
    }else{
        $("#cpfmasp").val('1'); 
        sessao[5].value = data.cpf_1_1;      
    }

    get_finalidade();

    // console.log(data);
    // console.log(sessao);
}