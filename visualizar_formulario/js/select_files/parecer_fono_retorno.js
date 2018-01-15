function get_parecer_fono_retorno(){
    $.ajax({
        type : "GET",
        url : url+"get_parecer_fono_retorno.php?number="+finalidade,
        contentType: content,
        success: function (response) {
            var json = JSON.parse(response);
            if(json['success']){
                console.log(json['data'][0]);
                preencher_pareceres(json['data']);
            }else{
                console.log("erro fase de parecer fono retorno");
            }
        },
        error: function (e) {
            console.log(e);
        } 
    }); 
}


function preencher_pareceres(data) {
    
    if(data.length == 1) {
        $.get("paginas/retorno/primeiro/parecer_fono_retorno_primeiro.html", function (data) {
            $("#collapse_parecer_fono_retorno").append(data);
        });
        setTimeout(function(){
            primeiro(data[0]);
            apresentar_dados();
        }, 2000); 
    }   

    if(data.length == 2) {
        $.get("paginas/retorno/primeiro/parecer_fono_retorno_primeiro.html", function (data) {
            $("#collapse_parecer_fono_retorno").append(data);
        });
        setTimeout(function(){
            primeiro(data[0]);
            $.get("paginas/retorno/segundo/parecer_fono_retorno_segundo.html", function (data) {
                $("#collapse_parecer_fono_retorno").append(data);
            });
            setTimeout(function(){
                segundo(data[1]);
                apresentar_dados();
            }, 2000);
        }, 2000);  
    }   

    if(data.length == 3) {
        $.get("paginas/retorno/primeiro/parecer_fono_retorno_primeiro.html", function (data) {
            $("#collapse_parecer_fono_retorno").append(data);
        });
        setTimeout(function(){
            primeiro(data[0]);
            $.get("paginas/retorno/segundo/parecer_fono_retorno_segundo.html", function (data) {
                $("#collapse_parecer_fono_retorno").append(data);
            });
            setTimeout(function(){
                segundo(data[1]);
                $.get("paginas/retorno/terceiro/parecer_fono_retorno_terceiro.html", function (data) {
                    $("#collapse_parecer_fono_retorno").append(data);
                });
                setTimeout(function(){
                    terceiro(data[2]);
                    apresentar_dados();
                }, 2000); 
            }, 2000);
        }, 2000); 
    }   

    if(data.length == 4) {
        $.get("paginas/retorno/primeiro/parecer_fono_retorno_primeiro.html", function (data) {
            $("#collapse_parecer_fono_retorno").append(data);
        });
        setTimeout(function(){
            primeiro(data[0]);
            $.get("paginas/retorno/segundo/parecer_fono_retorno_segundo.html", function (data) {
                $("#collapse_parecer_fono_retorno").append(data);
            });
            setTimeout(function(){
                segundo(data[1]);
                $.get("paginas/retorno/terceiro/parecer_fono_retorno_terceiro.html", function (data) {
                    $("#collapse_parecer_fono_retorno").append(data);
                });
                setTimeout(function(){
                    terceiro(data[2]);
                    $.get("paginas/retorno/quarto/parecer_fono_retorno_quarto.html", function (data) {
                        $("#collapse_parecer_fono_retorno").append(data);
                    });
                    setTimeout(function(){
                        quarto(data[3]);
                        apresentar_dados();
                    }, 2000);
                }, 2000); 
            }, 2000); 
        }, 2000);      
    }   
}


function primeiro(data) {
    preecher_parecer_fono_retorno_primeiro(data);
}

function segundo(data) {
    preecher_parecer_fono_retorno_segundo(data);
}

function terceiro(data) {
    preecher_parecer_fono_retorno_terceiro(data);
}

function quarto(data) {
    preecher_parecer_fono_retorno_quarto(data);
}