function pendente() {
    $('#input_dias11-1').val("");
    $('#input_com11-1').val("");
    $('.collapse_lbl3-fnl11-0').collapse('hide');
    $('#input_qual11-0').val("");
    $('.collapse_lbl4-fnl11-0').collapse('hide');

    clearcheckbox(document.getElementsByName("11-0cb"));

    $('#lcl11-2').val("");
    $('#dt11-2').val("");

    $('.collapse_final').collapse('hide');

    $('.collapse_final_obs').collapse('hide');

    $('.collapse_pendente').collapse('show');
}

$('#lbl3-mdp10-0').click(function() {
    if($('#cb3-mdp10-0').is(':checked') ) {
        $('.collapse_lbl3-mdp10-0').collapse('show'); 
        
    }else {
        $('#input_quais10-0').val("");
        $('.collapse_lbl3-mdp10-0').collapse('hide');  
    }
});

