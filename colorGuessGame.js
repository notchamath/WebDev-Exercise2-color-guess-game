var numSq=6;
var colors = [];
var goalColor;

var squares = document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#msg");
var h1=document.querySelector("h1");
var resetBttn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");


setGame();

function setGame(){
    setModeBtns();
    setUpSquares();    
    reset();
}

function setModeBtns(){
    for(var i=0;i<modeBtns.length;i++){
        modeBtns[i].addEventListener("click",function(){
            for(var i=0;i<modeBtns.length;i++)
                modeBtns[i].classList.remove("selected");
            this.classList.add("selected");
            this.textContent==="Easy"? numSq=3: numSq=6;    //if textContent === easy then numSq=3 else numSq=6
            reset();
        })
    }
    
    resetBttn.addEventListener("click",function(){
        reset();
    });
}

function setUpSquares(){
    for(var i=0;i<squares.length;i++){
        //listeners
        squares[i].addEventListener("click",function(){
            //clicked sq color is compared to goalColor
            var clickedColor = this.style.backgroundColor;
    
            if(clickedColor===goalColor){
                msgDisplay.textContent="Correct!"
                resetBttn.textContent="Play Again";
                h1.style.backgroundColor=clickedColor;
                changeColors(clickedColor);
            }else{
                this.style.backgroundColor ="#232323";
                msgDisplay.textContent="Try Again";
            }
        })
    }
}

function reset(){
    colors =  generateRandom(numSq);
    goalColor=pickColor();
    colorDisplay.textContent=goalColor;
    resetBttn.textContent="New Colors";
    msgDisplay.textContent="";
    h1.style.backgroundColor="steelblue";

    for(var i=0;i<squares.length;i++){
        if(colors[i]){
             squares[i].style.backgroundColor=colors[i];
             squares[i].style.display="block";
        }else{
            squares[i].style.display="none";
        }
    }
}

function changeColors (color){
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
   var random = Math.floor(Math.random()*colors.length);
   return colors[random];
}

function generateRandom(num)
{
    var arr = [];

    for(var i=0;i<num;i++){
        var r = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        
        arr.push("rgb("+r+", "+g+", "+b+")");
    }
    return arr;
}