function pendente() {
    $('#input_dias11-1_retorno').val("");
    $('#input_com11-1_retorno').val("");
    $('.collapse_lbl3-fnl11-0_retorno').collapse('hide');
    $('#input_qual11-0_retorno').val("");
    $('.collapse_lbl4-fnl11-0_retorno').collapse('hide');

    clearcheckbox(document.getElementsByName("11-0cb_retorno"));

    $('#lcl11-2_retorno').val("");
    $('#dt11-2_retorno').val("");

    $('.collapse_final_retorno').collapse('hide');

    $('.collapse_final_obs').collapse('hide');

    $('.collapse_pendente_retorno').collapse('show');
}

$('#lbl3-mdp10-0_retorno').click(function() {
    if($('#cb3-mdp10-0_retorno').is(':checked') ) {
        $('.collapse_lbl3-mdp10-0_retorno').collapse('show'); 
        
    }else {
        $('#input_quais10-0_retorno').val("");
        $('.collapse_lbl3-mdp10-0_retorno').collapse('hide');  
    }
});

