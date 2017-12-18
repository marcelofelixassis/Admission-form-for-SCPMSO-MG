function loading(index, state){
  $('.progress .circle').removeClass().addClass('circle');
  $('.progress .bar').removeClass().addClass('bar');
  for(var i = 1; i <= index; i++){
    if(state){
      $('.progress .circle:nth-of-type(' + i + ')').addClass('active');
      
      $('.progress .circle:nth-of-type(' + (i-1) + ')').removeClass('active').addClass('done');

      $('.progress .circle:nth-of-type(' + (i-1) + ') .label').html('&#10003;');
      
      $('.progress .bar:nth-of-type(' + (i-1) + ')').addClass('active');
      
      $('.progress .bar:nth-of-type(' + (i-2) + ')').removeClass('active').addClass('done');
    }else{
      $('.progress .circle:nth-of-type(' + i + ')').addClass('err');
      
      $('.progress .circle:nth-of-type(' + (i-1) + ')').removeClass('err').addClass('done');
      
      $('.progress .circle:nth-of-type(' + (i-1) + ') .label').html('&#10003;');
      
      $('.progress .bar:nth-of-type(' + (i-1) + ')').addClass('err');
      
      $('.progress .bar:nth-of-type(' + (i-2) + ')').removeClass('err').addClass('done');
    }
  }
}