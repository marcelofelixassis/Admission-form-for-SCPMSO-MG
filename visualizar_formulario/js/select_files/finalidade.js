function get_finalidade(){
    $.ajax({
        type : "GET",
        url : url+"get_finalidade.php?number="+finalidade,
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                console.log(json);
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