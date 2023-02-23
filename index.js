
var userar=[]; 
var webar =[];

// creation of random number

function nextSequence () {
    var randomN= Math.random();


    var num= Math.round(randomN*3);

    return num;
}

var randomNumber = nextSequence();


// function to give random pattern

function repeatweb(random){
    

    if(random===0){
        webar.push("g");
        var audr = new Audio("sounds/green.mp3");
        audr.play();
        bclassname="g";
    }

    else if(random===1){
        webar.push("r");

        var audr = new Audio("sounds/red.mp3");
    audr.play();
    bclassname="r";
    }
   
    else if(random===2){
        webar.push("b");

        var audr = new Audio("sounds/blue.mp3");
    audr.play();
    bclassname="b";
    }
    
    else {
        webar.push("y");

        var audr = new Audio("sounds/yellow.mp3");
    audr.play();
    bclassname="y";
    }


    
    $( "."+bclassname) .fadeOut(200).fadeIn(100) ({opacity:0.5});

    // webar.push("r");  
    $("h1").text("Level 0");
   
   
}


 $(".btnre").hide();

// gives random pattern when any key is pressed

document.addEventListener("keypress", function(){

   randomNumber= nextSequence();
    
   repeatweb(randomNumber);
      
});   

$(".btn0").on("click",function(){

$(".btn0").hide();

randomNumber=nextSequence();

repeatweb(randomNumber);


})

  var userlen=0;
  var webarlen=1;
  var i=0;
  var levelValue= 0;
  var updateValue=0;

  

  // function for click buttons

$(".btn1").on("click", function(){

  $(".btn0").hide();

  var newcl= this;

  newcl.classList.add("pressed");

      setTimeout(function(){
        newcl.classList.remove("pressed");
      } , 100 );
       
      if (newcl.innerHTML==="g"){
        userar.push("g");

      var aud1 = new Audio("sounds/green.mp3");
            aud1.play();
      }
      else if(newcl.innerHTML==="r"){
        userar.push("r");

        var aud1 = new Audio("sounds/red.mp3");
            aud1.play();
      }

      else if(newcl.innerHTML==="b"){
        userar.push("b");
        var aud1 = new Audio("sounds/blue.mp3");
        aud1.play();
      }
    
      else {
        userar.push("y");

        var aud1 = new Audio("sounds/yellow.mp3");
        aud1.play();
      }


      
         userlen++;
         i++;
         
         use=userlen-1;
         web=webarlen-1;
            

        //  check console, how the pattern works of both user and website

         console.log(userlen);
         console.log(webarlen);
         
         console.log(userar);
         console.log(webar);

         
       //  checking the rules of game

       if(userar[userlen-1]===webar[webarlen-1] && userlen===webarlen){
        userlen=0;

        i=0;

        levelValue= updateValue+webarlen;
        $("h1").text("Level "+levelValue);

        webarlen++;
        userar=[];
        randomNumber=nextSequence();
        setTimeout(function(){
            repeatweb(randomNumber);

        } ,800);
         
       }
      
       else if ( userar[userlen-1]===webar[i-1]){
          

        console.log("you clicked correct box.");
         
        
       }

       else {
        console.log("you clicked wrong box.");


        var audd1= new Audio("sounds/wrong.mp3");

        audd1.play();

        $("h1").text("Game-over");



        for(var j=0; j<4;j++){

          document.querySelectorAll("button")[j].classList.add("game-over"); 
          }
         setTimeout(function(){

          for(var k=0; k<4;k++){

            document.querySelectorAll("button")[k].classList.remove("game-over");
    
            }
        }  , 5)
       
        $("#hideimg").show();

          setTimeout(function(){
            $("#hideimg").hide();

            $("h1").text("Your Score: "+webarlen);

          } ,2000);

          

          $(".btnre").show();

          $(".btnre").on("click",function(){
           
            var newre=this;
            newre.classList.add("pressed");
            setTimeout(function(){
              newre.classList.remove("pressed");
            } , 100 );
           

          setTimeout(function(){

            location.reload();
 
           },500);

          });


        


       }


});


    $("#hideimg").hide();


    $(".hidebtn").on("click", function(){
        updateValue=8;

    })


    




