let gameSeq=[];
let userSeq=[];

let started=false;
let level = 0;
let h2= document.querySelectorAll("h2")
document.addEventListener("keypress",function(){
    if (started==false){
        console.log ("game is started");
     started==true;

     levelUp();
    }
    function levelup(){
        level++;
     h2.innerText = 'level ${level}';
    }
});

