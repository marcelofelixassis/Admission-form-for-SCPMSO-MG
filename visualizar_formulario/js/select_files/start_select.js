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

function markcheckbox(stringToSplit, checkBoxGroup){
    var x = stringToSplit.split(',');

    for (let i = 0; i < checkBoxGroup.length; i++) {
        for (let y = 0; y < x.length; y++) {
            if(checkBoxGroup[i].value == x[y]){
                checkBoxGroup[i].checked = true;
            }
        }
    }
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
}