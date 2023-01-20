
var score = 0 ,prev_rand = 0 , rand, start = 0, game, hight = 0 , sec, timer ;

$("#start").click(function(){
    if(start == 0){
        sec = 60;
        score = 0 ; 
        $("#counter span").text(score)
        $("#start").text("Stop The Game");
        start = 1 ;

        game = setInterval(function(){
            do{
                rand = Math.round(Math.random() * 9) ;         
            }
            while(rand == prev_rand) ;
            prev_rand = rand ;
        
            $("#w-game div").css({"background-image": "none"})
            $(`#w-game :nth-child(${rand})`).css({"background-image": "url('quack.png')"})  
        }, 1000) 

        timer = setInterval(function(){
            sec-- ;
            $("#timer span").text(sec); 
            if(sec == 0){
                alert("Time Out !")
                start = 1 ;
                $("#timer span").text(sec);
                clearInterval(game);
                clearInterval(timer);
                $("#start").text("Restart The Game ?");
            } 
        }, 600)

        
          
    }else{
        sec = 60;
        $("#timer span").text(sec);
        $("#start").text("Restart The Game ?");
        clearInterval(game);
        clearInterval(timer)
        start = 0 ;
        if(score > hight){
            hight = score ;
            $("#hight span").text(score);
            alert("New High Score Achieved !  ");
        }
    }
    
})

$("#w-game div").click(function(){
    if($(this).css("background-image") != "none" && start == 1){
        score++ ;
        $("#counter span").text(score)
    }
})













