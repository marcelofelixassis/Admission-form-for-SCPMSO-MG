function final() {
    $('#input_quais10-0_retorno').val("");
    $('.collapse_lbl3-mdp10-0_retorno').collapse('hide');

    clearcheckbox(document.getElementsByName("10-0cb_retorno")); 
    clearcheckbox(document.getElementsByName("10-1cb_retorno"));

    $('#exs10-2_retorno').val("");
    $('#dt10-2_retorno').val("");

    $('.collapse_pendente_retorno').collapse('hide');

    $('.collapse_final_retorno').collapse('show');
}

$('#lbl3-fnl11-0_retorno').click(function() {
    if($('#cb3-fnl11-0_retorno').is(':checked') ) {
        $('.collapse_lbl3-fnl11-0_retorno').collapse('show'); 
        
    }else {
        $('#input_dias11-1').val("");
        $('#input_com11-1').val("");
        $('.collapse_lbl3-fnl11-0_retorno').collapse('hide');  
    }
});


$('#lbl4-fnl11-0_retorno').click(function() {
    if($('#cb4-fnl11-0_retorno').is(':checked') ) {
        $('.collapse_lbl4-fnl11-0_retorno').collapse('show'); 
        
    }else {
        $('#input_qual11-0_retorno').val("");
        $('.collapse_lbl4-fnl11-0_retorno').collapse('hide');  
    }
});