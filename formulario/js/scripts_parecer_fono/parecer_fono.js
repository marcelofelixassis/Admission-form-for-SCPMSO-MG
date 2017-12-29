function onblur_prv93() {
    var x = document.getElementById("prv9-3").value;
	if(x == 2){	
  		$('.collapse_prv9-3').collapse('show');
	}else{
        clearcheckbox(document.getElementsByName("9-5-0cb")); 
        clearcheckbox(document.getElementsByName("9-5-1cb")); 
        $('#ede9-5').prop('checked', false);
        $('.collapse_ede9-5').collapse('hide');
        
        clearcheckbox(document.getElementsByName("9-6-0cb")); 
        clearcheckbox(document.getElementsByName("9-6-1cb"));
        clearcheckbox(document.getElementsByName("9-6-2cb")); 
        $('#hip9-6').prop('checked', false); 
        $('.collapse_hip9-6').collapse('hide');

        clearcheckbox(document.getElementsByName("9-7-0cb")); 
        clearcheckbox(document.getElementsByName("9-7-1cb"));
        clearcheckbox(document.getElementsByName("9-7-2cb"));
        $('#ava9-7').prop('checked', false);  
        $('.collapse_ava9-7').collapse('hide');

        $('.collapse_agpv9-4').collapse('hide');  

        clearcheckbox(document.getElementsByName("9-9-0cb")); 
        clearcheckbox(document.getElementsByName("9-9-1cb"));
        $('#ibi9-9').prop('checked', false); 
        $('.collapse_ibi9-9').collapse('hide');

        clearcheckbox(document.getElementsByName("9-10-0cb")); 
        clearcheckbox(document.getElementsByName("9-10-1cb"));
        $('#iud9-10').prop('checked', false); 
        $('.collapse_iud9-10').collapse('hide');  

        clearcheckbox(document.getElementsByName("9-11-0cb")); 
        clearcheckbox(document.getElementsByName("9-11-1cb"));
        $('#iue9-11').prop('checked', false); 
        $('.collapse_iue9-11').collapse('hide'); 

        clearcheckbox(document.getElementsByName("9-13-0cb")); 
        clearcheckbox(document.getElementsByName("9-13-1cb"));
        $('#dep9-13').prop('checked', false); 
        $('.collapse_dep9-13').collapse('hide');

        $('#rco9-12').prop('checked', false);
        $('#hipe9-14').prop('checked', false); 
        
        $('.collapse_bli9-8').collapse('hide');
        
        clearcheckbox(document.getElementsByName("9-15-0cb")); 
        clearcheckbox(document.getElementsByName("9-15-1cb"));
        $('.collapse_cgl9-15').collapse('hide');

        clearcheckbox(document.getElementsByName("9-16-0cb")); 
        $('.collapse_mmo9-16').collapse('hide');
        
        $('#agpv9-4').prop('checked', false);
        $('#bli9-8').prop('checked', false);
        $('#cgl9-15').prop('checked', false);
        $('#mmo9-16').prop('checked', false);

		$('.collapse_prv9-3').collapse('hide');	
	}		
}

//-------------------------------------------------------------------

$('#agpv9-4').click(function() {
    if($('#agpv9-4').is(':checked')) {
        $('.collapse_agpv9-4').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-5-0cb")); 
        clearcheckbox(document.getElementsByName("9-5-1cb")); 
        $('#ede9-5').prop('checked', false);
        $('.collapse_ede9-5').collapse('hide');
        
        clearcheckbox(document.getElementsByName("9-6-0cb")); 
        clearcheckbox(document.getElementsByName("9-6-1cb"));
        clearcheckbox(document.getElementsByName("9-6-2cb")); 
        $('#hip9-6').prop('checked', false); 
        $('.collapse_hip9-6').collapse('hide');

        clearcheckbox(document.getElementsByName("9-7-0cb")); 
        clearcheckbox(document.getElementsByName("9-7-1cb"));
        clearcheckbox(document.getElementsByName("9-7-2cb"));
        $('#ava9-7').prop('checked', false);  
        $('.collapse_ava9-7').collapse('hide');

        $('.collapse_agpv9-4').collapse('hide');  
    }
});

$('#ede9-5').click(function() {
    if($('#ede9-5').is(':checked') ) {
        $('.collapse_ede9-5').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-5-0cb")); 
        clearcheckbox(document.getElementsByName("9-5-1cb")); 
        $('.collapse_ede9-5').collapse('hide');  
    }
});

$('#hip9-6').click(function() {
    if($('#hip9-6').is(':checked') ) {
        $('.collapse_hip9-6').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-6-0cb")); 
        clearcheckbox(document.getElementsByName("9-6-1cb"));
        clearcheckbox(document.getElementsByName("9-6-2cb"));  
        $('.collapse_hip9-6').collapse('hide');  
    }
});

$('#ava9-7').click(function() {
    if($('#ava9-7').is(':checked') ) {
        $('.collapse_ava9-7').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-7-0cb")); 
        clearcheckbox(document.getElementsByName("9-7-1cb"));
        clearcheckbox(document.getElementsByName("9-7-2cb"));  
        $('.collapse_ava9-7').collapse('hide');  
    }
});

//------------------------------------------------------------------

$('#bli9-8').click(function() {
    if($('#bli9-8').is(':checked') ) {
        $('.collapse_bli9-8').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-9-0cb")); 
        clearcheckbox(document.getElementsByName("9-9-1cb"));
        $('#ibi9-9').prop('checked', false); 
        $('.collapse_ibi9-9').collapse('hide');

        clearcheckbox(document.getElementsByName("9-10-0cb")); 
        clearcheckbox(document.getElementsByName("9-10-1cb"));
        $('#iud9-10').prop('checked', false); 
        $('.collapse_iud9-10').collapse('hide');  

        clearcheckbox(document.getElementsByName("9-11-0cb")); 
        clearcheckbox(document.getElementsByName("9-11-1cb"));
        $('#iue9-11').prop('checked', false); 
        $('.collapse_iue9-11').collapse('hide'); 

        clearcheckbox(document.getElementsByName("9-13-0cb")); 
        clearcheckbox(document.getElementsByName("9-13-1cb"));
        $('#dep9-13').prop('checked', false); 
        $('.collapse_dep9-13').collapse('hide');

        $('#rco9-12').prop('checked', false);
        $('#hipe9-14').prop('checked', false); 
        
        $('.collapse_bli9-8').collapse('hide');  
    }
});

$('#ibi9-9').click(function() {
    if($('#ibi9-9').is(':checked') ) {
        $('.collapse_ibi9-9').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-9-0cb")); 
        clearcheckbox(document.getElementsByName("9-9-1cb"));
        $('.collapse_ibi9-9').collapse('hide');  
    }
});

$('#iud9-10').click(function() {
    if($('#iud9-10').is(':checked') ) {
        $('.collapse_iud9-10').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-10-0cb")); 
        clearcheckbox(document.getElementsByName("9-10-1cb"));
        $('.collapse_iud9-10').collapse('hide');  
    }
});

$('#iue9-11').click(function() {
    if($('#iue9-11').is(':checked') ) {
        $('.collapse_iue9-11').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-11-0cb")); 
        clearcheckbox(document.getElementsByName("9-11-1cb"));
        $('.collapse_iue9-11').collapse('hide');  
    }
});

$('#dep9-13').click(function() {
    if($('#dep9-13').is(':checked') ) {
        $('.collapse_dep9-13').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-13-0cb")); 
        clearcheckbox(document.getElementsByName("9-13-1cb"));
        $('.collapse_dep9-13').collapse('hide');  
    }
});

//------------------------------------------------------------------------

$('#cgl9-15').click(function() {
    if($('#cgl9-15').is(':checked') ) {
        $('.collapse_cgl9-15').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-15-0cb")); 
        clearcheckbox(document.getElementsByName("9-15-1cb"));
        $('.collapse_cgl9-15').collapse('hide');  
    }
});

//------------------------------------------------------------------------

$('#mmo9-16').click(function() {
    if($('#mmo9-16').is(':checked') ) {
        $('.collapse_mmo9-16').collapse('show'); 
    }else {
        clearcheckbox(document.getElementsByName("9-16-0cb")); 
        $('.collapse_mmo9-16').collapse('hide');  
    }
});
















