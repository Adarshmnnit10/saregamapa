var numberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var innerButton=this.innerHTML;
        makesound(innerButton);
        buttonAnimation(innerButton);
    });
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});


function makesound(key){
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
       case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            var error=new Audio("sounds/error.mp3");
            error.play();
            
       }
}
const text=document.querySelector('.title');
const strText=text.textContent;
const splitText=strText.split("");
text.textContent="";
for(let i=0;i<splitText.length;i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}
let char=0;
let timer=setInterval(onTick,50);
function onTick(){
    const span=text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char===splitText.length){
       complete();
        return;
    }
}
function complete(){
    clearInterval(timer);
    timer=null;
}

function buttonAnimation(currentkey){
 var active=   document.querySelector("."+currentkey);
 active.classList.add("pressed");
 setTimeout(function(){
    active.classList.remove("pressed");},100
 );
}