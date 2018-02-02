var url = "http://10.16.90.76/php/";
var content = "application/json; charset=UTF-8";

window.onload = function(){
    $.ajax({
        type : "GET",
        url : url+"get_primeiros_registros.php",
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                inserir_resultado(json['data']);
            }else{
                alert('erro');
            }
        },
        error: function (e) {
            console.log(e);
        } 
    });
}

function buscar(){
    $.ajax({
        type : "GET",
        url : url+"buscar_masp_cpf.php?type="+$("#maspcpf").val()+"&number="+$("#inp_buscar").val(),
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                inserir_resultado(json['data']);
            }else{
                alert('erro');
            }
        },
        error: function (e) {
            console.log(e);
        } 
    });
}

function inserir_resultado(data){
    $('#tabela_ultimos_registros td').remove();
    for (let index = 0; index < data.length; index++) {
        if (data[index].state == "PENDENTE") {
            $("#tabela_ultimos_registros tbody").append(
                '<tr>'+
                    '<td>'+ data[index].nome_1_0 +'</td>'+
                    '<td>'+ data[index].cpf_1_1 +'</td>'+
                    '<td>'+ data[index].masp_1_1 +'</td>'+    
                    '<td>'+ data[index].dt_2_0 +'</td>'+ 
                    '<td style="color: yellow; font-weight: bold">'+ data[index].state +'</td>'+  
                    '<td>' +
                        '<div class="btn-group btn-group-sm">' + 
                            '<div class="btn-group"> ' +
                                '<a href="#" class="parents js-view-parents">' +
                                    '<span class="glyphicon glyphicon-eye-open" style="color:black;" onclick="visualizar('+ data[index].id_finalidade +','+ data[index].id_pessoa +')"></span>' +
                                '</a>' +
                            '</div>' +
                            '<div class="btn-group ">' +
                                '<a href="#">' +
                                '<span class="glyphicon glyphicon-pencil" aria-hidden="true" style="color: black; margin-left: 10px;" onclick="editar('+ data[index].id_finalidade +','+ data[index].id_pessoa +')"></span>' +
                                '</a>' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>'
            ); 
        }
        else {
            $("#tabela_ultimos_registros tbody").append(
                '<tr>'+
                    '<td>'+ data[index].nome_1_0 +'</td>'+
                    '<td>'+ data[index].cpf_1_1 +'</td>'+
                    '<td>'+ data[index].masp_1_1 +'</td>'+    
                    '<td>'+ data[index].dt_2_0 +'</td>'+ 
                    '<td style="color: green; font-weight: bold">'+ data[index].state +'</td>'+  
                    '<td>' +
                        '<div class="btn-group btn-group-sm">' + 
                            '<div class="btn-group"> ' +
                                '<a href="#" class="parents js-view-parents">' +
                                    '<span class="glyphicon glyphicon-eye-open" style="color:black;" onclick="visualizar('+ data[index].id_finalidade +','+ data[index].id_pessoa +')"></span>' +
                                '</a>' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>'
            ); 
        }
       
         
    }
    
}

function visualizar(finalidade, identificacao) {
    window.open("http://10.16.90.76/visualizar_formulario/index.php?id="+identificacao+"&fi="+finalidade);
}

function editar(finalidade, identificacao) {
    window.open("http://10.16.90.76/editar_formulario/index.php?id="+identificacao+"&fi="+finalidade);
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
    if(document.getElementById("maspcpf").value == 1){
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

