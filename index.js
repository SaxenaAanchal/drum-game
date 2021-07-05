
var noOfKeys=document.querySelectorAll(".drum").length;

for(var i=0; i<noOfKeys; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
var letterOnButton=this.innerHTML;
makesound(letterOnButton);
showanimation(letterOnButton);
});
}
// for mousepress identification

document.addEventListener("keypress", function(event)  //event tells us which key is pressed
{
makesound(event.key);            //key is one of the property of event(which gives just the letter of key pressed on keyboard)
showanimation(event.key);

});
//for keyboard press identification

function makesound(key)
{
    switch(key)
    {
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
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            console.log(letterOnButton);
    }
}

function showanimation(currentkey)
{
var activebutton= document.querySelector("."+ currentkey);
activebutton.classList.add("pressed");              //pressed is a class made in css file

setTimeout(function(){
activebutton.classList.remove("pressed");              //this removes the already added class pressed after 100 milliseconds
},100);
}