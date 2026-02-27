let gameSeq=[];
let userSeq=[];

let started=false;
let level = 0;
let btns=["yellow","red","purple","green"];
let h2= document.querySelector("h2")
document.addEventListener("keypress",function(){
    if (started==false){
        console.log ("game is started");
     started==true;
     levelUp();
    }
    function btnFlash(btn){
        btn.classList.add("flash");
        setTimeout(function(){
            btn.classList.remove("flash");},10000
        );
    }
    function levelUp(){
        level++;
     h2.innerText = `level ${level}`;
     let randIdx=Math.floor(Math.random()*4);
     let randColor=btns[randIdx];
     let randbtn= document.querySelector(`.${randColor}`);
     console.log(randIdx);
     console.log(randColor);
     console.log(randbtn);
     btnFlash(randbtn);
    }
});

