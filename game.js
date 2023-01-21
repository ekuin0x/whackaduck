const palette = Array("#FD8A8A", "#F1F7B5", "#A8D1D1", "#9EA1D4", "#FD8A8A", "#9ADCFF")
for(var i = 1; i <= 9 ; i++ ){
    var rand_color = Math.floor(Math.random() * palette.length ) ;
    $(`#w-game :nth-child(${i})`).css({"background-color": `${palette[rand_color]}`}) ;
} 
var score = 0 ,prev_rand = 0 , rand, start = 0, hight = 0 ,game, sec, timer, colorize ;

$("#start").click(function(){
    if(start == 0){
        sec = 60;
        score = 0 ; 
        $("#counter .score").text(score)
        $("#start").html(" <i class='bi bi-pause-fill'></i><span class='play-desk'> Stop The Gam</span>");
        start = 1 ;
        game = setInterval(function(){
            do{
                rand = Math.round(Math.random() * 9) ;         
            }
            while(rand == prev_rand) ;
            prev_rand = rand ;
            $("#w-game div").css({"background-image": "none"})
            $(`#w-game :nth-child(${rand})`).css({"background-image": "url('quack.png')"})  
        }, 700) 
        
        colorize = setInterval(function(){
            for(var i = 1; i <= 9 ; i++ ){
                var rand_color = Math.floor(Math.random() * palette.length ) ;
                $(`#w-game :nth-child(${i})`).css({"background-color": `${palette[rand_color]}`}) ;
            } 
        }, 500)
        timer = setInterval(function(){
            sec-- ;
            $("#timer span").text(sec); 
            if(sec == 0){
                alert("Time Out !")
                start = 1 ;
                $("#timer span").text(sec);
                clearInterval(game);
                clearInterval(timer);
            clearInterval(colorize);
                $("#start").html("<i class='bi bi-arrow-clockwise'></i><span class='play-desk'> Restart The Game ?</span>");
            } 
        }, 1000)    
    }else{
        sec = 60;
        $("#timer span").text(sec);
        $("#start").html("<i class='bi bi-arrow-clockwise'></i><span class='play-desk'> Restart The Game ?</span> ");
        clearInterval(game);
        clearInterval(timer);
        clearInterval(colorize);
        start = 0 ;
        if(score > hight){
            hight = score ;
            $(".hight-score").text(score);
            alert("NEW HIGHT SCORE ACHIEVED !  ");
        }
    }
})
$("#w-game div").click(function(){
    if($(this).css("background-image") != "none" && start == 1){
        score++ ;
        $("#counter .score").text(score)
        
        $("#w-game div").css({"transform": "initial", "transition" : "0s"})
        $(this).css({"transform":"rotateY(180deg)", "transition":".4s"})
    }
})
