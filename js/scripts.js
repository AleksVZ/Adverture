$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:5
            }
        }
    });

    $( function() {
        // run the currently selected effect
        function runEffect() {
          // get effect type from
          var selectedEffect = $( "#effectTypes" ).val();
     
          // Most effect types need no options passed by default
          var options = {};
          // some effects have required parameters
          if ( selectedEffect === "scale" ) {
            options = { percent: 50 };
          } else if ( selectedEffect === "size" ) {
            options = { to: { width: 200, height: 60 } };
          }
     
          // Run the effect
          $( "#effect" ).hide( selectedEffect, options, 1000, callback );
        };
     
        // Callback function to bring a hidden box back
        function callback() {
          setTimeout(function() {
            $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
          }, 1000 );
        };
     
        // Set effect from select menu value
        $( "#button" ).on( "click", function() {
          runEffect();
        });
      } );
});          