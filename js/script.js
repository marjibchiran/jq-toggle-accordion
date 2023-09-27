
// JQary

$('#toggle1').on('click', function(){
    $('#h2-text').toggle();
})

$('#fadeout').on('mouseover', function(){
    $('#fade-text').fadeOut();
})

$('#fadein').on('mouseover', function(){
    $('#fade-text').fadeIn();
})

$('#fadetoggle').on('mouseover', function(){
    $('#fade-text').toggle();
})

$( document ).on( "ajaxError", function() {
    $( ".log" ).text( "Triggered ajaxError handler." );
  } );

  $( "button#trigger" ).on( "click", function() {
    $( "div.result" ).load( "ajax/missing.html" );
  } );


$( document ).on( "ajaxError", function( event, jqxhr, settings, thrownError ) {
    if ( settings.url == "ajax/missing.html" ) {
      $( "div.log" ).text( "Triggered ajaxError handler." );
    }
  } );

  $('.ques').on('click', function(){
    $('.answ').slideToggle(500);
  })



