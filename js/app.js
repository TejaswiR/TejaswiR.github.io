// $(document).ready(function(){
//   var bars = $('.number-pb').NumberProgressBar({min: 20, max: 100, current: 0, duration: 6000});
//   bars.reach(80, 1000);  //dest is the progress # at which you want to reach
// });

$(document).ready(function(){


  $('#all9').click(function(ev){
    ev.preventDefault();
    $('.all').fadeIn(1500);
  });

  $('#GAME9').click(function(ev){
    ev.preventDefault();
    $('.all').hide();
    $('.GAME').fadeIn(1500);
  });

  $('#psd9').click(function(ev){
     ev.preventDefault();
    $('.all').hide();
    $('.psd').fadeIn(1500);
  });

  // $('#calci9').click(function(ev){
  //    ev.preventDefault();
  //   $('.all').hide();
  //   $('.calci').fadeIn(1500);
  // });

  $('#angular9').click(function(ev){
     ev.preventDefault();
    $('.all').hide();
    $('.angular').fadeIn(1500);
  });

  // $('#phonecat9').click(function(ev){
  //    ev.preventDefault();
  //   $('.all').hide();
  //   $('.phonecat').fadeIn(1500);
  // });

  // $('#psd1').click(function(){
  //   bootbox.alert('<img class="img-responsive" src="../images/psd.JPG">');
    
  // });

});

// $(document).ready(portfolio);


// }


