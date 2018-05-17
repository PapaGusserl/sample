$(document).ready(function() {
    
    $("#whirligig>#r").click(function(event) {
        var new_llpic = $("#rrpic").css("background-image");
        var new_lpic = $("#llpic").css("background-image");
        var new_cpic = $("#lpic").css("background-image");
        var new_rpic = $("#cpic").css("background-image");        
        var new_rrpic = $("#rpic").css("background-image");

        
        $("#llpic").css("background-image", new_llpic);
        $("#lpic").css("background-image", new_lpic);
        $("#cpic").css("background-image", new_cpic);
        $("#rpic").css("background-image", new_rpic);
        $("#rrpic").css("background-image", new_rrpic);
    });
    
    $("#whirligig>#l").click(function(event) {
        var new_llpic = $("#lpic").css("background-image");
        var new_lpic = $("#cpic").css("background-image");
        var new_cpic = $("#rpic").css("background-image");
        var new_rpic = $("#rrpic").css("background-image");
        var new_rrpic = $("#lpic").css("background-image");
        
        $("#llpic").css("background-image", new_llpic);
        $("#lpic").css("background-image", new_lpic);
        $("#cpic").css("background-image", new_cpic);
        $("#rpic").css("background-image", new_rpic);
        $("#rrpic").css("background-image", new_rrpic);
    });
})