$(document).ready(function() {

    $(".show").click( function(event) {
        event.preventDefault();
        var p = $(this).siblings().eq(1);
        
        if ( $(p).css("display") !== "block" ) {
            $(p).show(400);
        } else {
            $(p).hide(400);
        }
        
    })
    //$("#show_2").click( function(event) {
//        if ( $(".que #2").css("display") !== "block" ) {
//            $(".que #2").show(400);
//        } else {
//            $(".que #2").hide(400);
//        }
//        
//    })
//    $("#show_3").click( function(event) {
//        if ( $(".que #3").css("display") !== "block" ) {
//            $(".que #3").show(400);
//        } else {
//            $(".que #3").hide(400);
//        }
//        
//    })
//    $("#show_4").click( function(event) {
//        if ( $(".que #4").css("display") !== "block" ) {
//            $(".que #4").show(400);
//        } else {
//            $(".que #4").hide(400);
//        }
//        
//    })
})