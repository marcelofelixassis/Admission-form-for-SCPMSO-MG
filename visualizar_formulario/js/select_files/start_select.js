var identificacao = 0;
var finalidade = 0;
var url = "http://10.16.90.76/visualizar_formulario/php/";
var content = "application/json; charset=UTF-8";

window.onload = function(){
    getUrlVars();
    get_identificacao();
}

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars[hash[0]] = hash[1];
    }
    identificacao = vars["id"];
    finalidade = vars["fi"];
}