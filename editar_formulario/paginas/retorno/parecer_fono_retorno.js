function onblur_prv() {
    var x = document.getElementById("prv").value;
	if(x == 2){	
  		$('.collapse_prv9-3_retorno').collapse('show');
	}else{
        clearcheckbox(document.getElementsByName("9-5-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-5-1cb_retorno")); 
        $('#ede').prop('checked', false);
        $('.collapse_ede9-5_retorno').collapse('hide');
        
        clearcheckbox(document.getElementsByName("9-6-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-6-1cb_retorno"));
        clearcheckbox(document.getElementsByName("9-6-2cb_retorno")); 
        $('#hip').prop('checked', false); 
        $('.collapse_hip9-6_retorno').collapse('hide');

        clearcheckbox(document.getElementsByName("9-7-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-7-1cb_retorno"));
        clearcheckbox(document.getElementsByName("9-7-2cb_retorno"));
        $('#ava').prop('checked', false);  
        $('.collapse_ava9-7_retorno').collapse('hide');

        $('.collapse_agpv9-4_retorno').collapse('hide');  

        clearcheckbox(document.getElementsByName("9-9-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-9-1cb_retorno"));
        $('#ibi').prop('checked', false); 
        $('.collapse_ibi9-9_retorno').collapse('hide');

        clearcheckbox(document.getElementsByName("9-10-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-10-1cb_retorno"));
        $('#iud').prop('checked', false); 
        $('.collapse_iud9-10_retorno').collapse('hide');  

        clearcheckbox(document.getElementsByName("9-11-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-11-1cb_retorno"));
        $('#iue').prop('checked', false); 
        $('.collapse_iue9-11_retorno').collapse('hide'); 

        clearcheckbox(document.getElementsByName("9-13-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-13-1cb_retorno"));
        $('#dep').prop('checked', false); 
        $('.collapse_dep9-13_retorno').collapse('hide');

        $('#rco').prop('checked', false);
        $('#hipe').prop('checked', false); 
        
        $('.collapse_bli9-8_retorno').collapse('hide');
        
        clearcheckbox(document.getElementsByName("9-15-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-15-1cb_retorno"));
        $('.collapse_cgl9-15_retorno').collapse('hide');

        clearcheckbox(document.getElementsByName("9-16-0cb_retorno")); 
        $('.collapse_mmo9-16_retorno').collapse('hide');
        
        $('#agpv').prop('checked', false);
        $('#bli').prop('checked', false);
        $('#cgl').prop('checked', false);
        $('#mmo').prop('checked', false);

		$('.collapse_prv9-3_retorno').collapse('hide');	
	}		
}

//-------------------------------------------------------------------

$('#agpv').click(function() {
    if($('#agpv').is(':checked')) {
        $('.collapse_agpv9-4_retorno').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-5-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-5-1cb_retorno")); 
        $('#ede').prop('checked', false);
        $('.collapse_ede9-5_retorno').collapse('hide');
        
        clearcheckbox(document.getElementsByName("9-6-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-6-1cb_retorno"));
        clearcheckbox(document.getElementsByName("9-6-2cb_retorno")); 
        $('#hip').prop('checked', false); 
        $('.collapse_hip9-6_retorno').collapse('hide');

        clearcheckbox(document.getElementsByName("9-7-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-7-1cb_retorno"));
        clearcheckbox(document.getElementsByName("9-7-2cb_retorno"));
        $('#ava').prop('checked', false);  
        $('.collapse_ava9-7_retorno').collapse('hide');

        $('.collapse_agpv9-4_retorno').collapse('hide');  
    }
});

$('#ede').click(function() {
    if($('#ede').is(':checked') ) {
        $('.collapse_ede9-5_retorno').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-5-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-5-1cb_retorno")); 
        $('.collapse_ede9-5_retorno').collapse('hide');  
    }
});

$('#hip').click(function() {
    if($('#hip').is(':checked') ) {
        $('.collapse_hip9-6_retorno').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-6-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-6-1cb_retorno"));
        clearcheckbox(document.getElementsByName("9-6-2cb_retorno"));  
        $('.collapse_hip9-6_retorno').collapse('hide');  
    }
});

$('#ava').click(function() {
    if($('#ava').is(':checked') ) {
        $('.collapse_ava9-7_retorno').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-7-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-7-1cb_retorno"));
        clearcheckbox(document.getElementsByName("9-7-2cb_retorno"));  
        $('.collapse_ava9-7_retorno').collapse('hide');  
    }
});


//------------------------------------------------------------------

$('#bli').click(function() {
    if($('#bli').is(':checked') ) {
        $('.collapse_bli9-8_retorno').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-9-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-9-1cb_retorno"));
        $('#ibi').prop('checked', false); 
        $('.collapse_ibi9-9_retorno').collapse('hide');

        clearcheckbox(document.getElementsByName("9-10-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-10-1cb_retorno"));
        $('#iud').prop('checked', false); 
        $('.collapse_iud9-10_retorno').collapse('hide');  

        clearcheckbox(document.getElementsByName("9-11-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-11-1cb_retorno"));
        $('#iue').prop('checked', false); 
        $('.collapse_iue9-11_retorno').collapse('hide'); 

        clearcheckbox(document.getElementsByName("9-13-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-13-1cb_retorno"));
        $('#dep').prop('checked', false); 
        $('.collapse_dep9-13_retorno').collapse('hide');

        $('#rco').prop('checked', false);
        $('#hipe').prop('checked', false); 
        
        $('.collapse_bli9-8_retorno').collapse('hide');  
    }
});

$('#ibi').click(function() {
    if($('#ibi').is(':checked') ) {
        $('.collapse_ibi9-9_retorno').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-9-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-9-1cb_retorno"));
        $('.collapse_ibi9-9_retorno').collapse('hide');  
    }
});

$('#iud').click(function() {
    if($('#iud').is(':checked') ) {
        $('.collapse_iud9-10_retorno').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-10-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-10-1cb_retorno"));
        $('.collapse_iud9-10_retorno').collapse('hide');  
    }
});

$('#iue').click(function() {
    if($('#iue').is(':checked') ) {
        $('.collapse_iue9-11_retorno').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-11-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-11-1cb_retorno"));
        $('.collapse_iue9-11_retorno').collapse('hide');  
    }
});

$('#dep').click(function() {
    if($('#dep').is(':checked') ) {
        $('.collapse_dep9-13_retorno').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-13-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-13-1cb_retorno"));
        $('.collapse_dep9-13_retorno').collapse('hide');  
    }
});

//------------------------------------------------------------------------

$('#cgl').click(function() {
    if($('#cgl').is(':checked') ) {
        $('.collapse_cgl9-15_retorno').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-15-0cb_retorno")); 
        clearcheckbox(document.getElementsByName("9-15-1cb_retorno"));
        $('.collapse_cgl9-15_retorno').collapse('hide');  
    }
});

//------------------------------------------------------------------------

$('#mmo').click(function() {
    if($('#mmo').is(':checked') ) {
        $('.collapse_mmo9-16_retorno').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-16-0cb_retorno")); 
        $('.collapse_mmo9-16_retorno').collapse('hide');  
    }
});