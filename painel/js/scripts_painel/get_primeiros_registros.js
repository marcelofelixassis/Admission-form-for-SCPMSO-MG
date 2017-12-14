function celimjj(){
    $.ajax({
        type : "GET",
        url : url+"get_primeiros_registros.php",
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
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