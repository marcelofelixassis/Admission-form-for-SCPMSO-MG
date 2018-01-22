function final() {
    $('#input_quais10-0').val("");
    $('.collapse_lbl3-mdp10-0').collapse('hide');

    clearcheckbox(document.getElementsByName("10-0cb")); 
    clearcheckbox(document.getElementsByName("10-1cb"));

    $('#exs10-2').val("");
    $('#dt10-2').val("");

    $('.collapse_pendente').collapse('hide');

    $('.collapse_pendente_obs').collapse('hide');

    $('.collapse_final').collapse('show');
}

$('#lbl3-fnl11-0').click(function() {
    if($('#cb3-fnl11-0').is(':checked') ) {
        $('.collapse_lbl3-fnl11-0').collapse('show'); 
        
    }else {
        $('#input_dias11-1').val("");
        $('#input_com11-1').val("");
        $('.collapse_lbl3-fnl11-0').collapse('hide');  
    }
});


$('#lbl4-fnl11-0').click(function() {
    if($('#cb4-fnl11-0').is(':checked') ) {
        $('.collapse_lbl4-fnl11-0').collapse('show'); 
        
    }else {
        $('#input_qual11-0').val("");
        $('.collapse_lbl4-fnl11-0').collapse('hide');  
    }
});

