var identificacao = 0;
var finalidade = 0;
var url = "http://10.16.90.76/visualizar_formulario/php/";
var content = "application/json; charset=UTF-8";

function apresentar_dados() {
    document.getElementById("textloader").style.display = "none";
    document.getElementById("loader").style.display = "none";
    document.getElementById("conteudo").style.display = "block";
}

window.onload = function(){
    $('.noclick').click(false);
    $('#collapse_taba5-0_extaba').collapse('show');
	$('#collapse_taba5-0_taba').collapse('show');
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

function markradiobutton(number, radiobuttongroup) {
    switch (number) {
        case '0':
            $(radiobuttongroup[0]).addClass("active");
        break;

        case '1':
            $(radiobuttongroup[1]).addClass("active");
        break;

        case '2':
            $(radiobuttongroup[2]).addClass("active");
        break;

        case '3':
            $(radiobuttongroup[3]).addClass("active");
        break;
    }
}