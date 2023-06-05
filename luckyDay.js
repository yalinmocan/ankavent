
let rnd = Math.floor(Math.random() * 9) ;
$("#" + rnd).addClass("black") ;
$("td").click(function(e){
   if ( !$(this).hasClass("black")) return ; 
   do {
      rnd =  Math.floor(Math.random() * 9) ;
   } while( $("#" + rnd).hasClass("black")) ;
  $(this).removeClass("black");
  $("#" + rnd).addClass("black") ;
  // Animation
  $("body").append("<div class='click'>+10 Pts</div>")
             .children()
             .last()
             .offset({top:e.pageY - 25, left: e.pageX})
             .animate({fontSize : "+=10px", top : "-=100px"}, 1000,
             function() {
                 $(this).remove()
             })
})
