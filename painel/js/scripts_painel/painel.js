var url = "http://10.16.90.76/painel/php/";
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
                console.log(json['data']);
    
                
            }else{
                aler('erro');   
            }
        },
        error: function (e) {
            console.log(e);
        } 
    });
}

function inserir_resultado(data){
    for (let index = 0; index < 4; index++) {
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
                                    '<span class="glyphicon glyphicon-eye-open" style="color:white;"></span>' +
                                '</a>' +
                            '</div>' +
                            '<div class="btn-group ">' +
                                '<a href="#">' +
                                '<span class="glyphicon glyphicon-pencil" aria-hidden="true" style="color: white; margin-left: 10px;"></span>' +
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
                                    '<span class="glyphicon glyphicon-eye-open" style="color:white;"></span>' +
                                '</a>' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>'
            ); 
        }
       
         
    }
    
}