$(document).ready(function() {
 
    $('#one').click( function(event){
        //event.preventDefault();
        $('#overlay').fadeIn(400, // анимируем показ обложки
            function(){ // далее показываем мод. окно
                $('#ask_discount') 
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
        });
    });
 
    // закрытие модального окна
    $('.close, #overlay').click( function(){
        $('#ask_discount')
            .animate({opacity: 0, top: '45%'}, 200,  // уменьшаем прозрачность
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // скрываем окно
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });
 
        $('#two').click( function(event){
        //event.preventDefault();
        $('#overlay').fadeIn(400, // анимируем показ обложки
            function(){ // далее показываем мод. окно
                $('#form_to_discount') 
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
        });
    });
 
    // закрытие модального окна
    $('.close, #overlay').click( function(){
        $('#form_to_discount')
            .animate({opacity: 0, top: '45%'}, 200,  // уменьшаем прозрачность
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // скрываем окно
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });
     $('#three').click( function(event){
        //event.preventDefault();
        $('#overlay').fadeIn(400, // анимируем показ обложки
            function(){ // далее показываем мод. окно
                $('#policy') 
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
        });
    });
 
    // закрытие модального окна
    $('.close, #overlay').click( function(){
        $('#policy')
            .animate({opacity: 0, top: '45%'}, 200,  // уменьшаем прозрачность
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // скрываем окно
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });
     $('#four').click( function(event){
        //event.preventDefault();
        $('#overlay').fadeIn(400, // анимируем показ обложки
            function(){ // далее показываем мод. окно
                $('#congratulation') 
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
        });
    });
 
    // закрытие модального окна
    $('.close, #overlay').click( function(){
        $('.pop_up')
            .animate({opacity: 0, top: '45%'}, 200,  // уменьшаем прозрачность
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // скрываем окно
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });
    
});