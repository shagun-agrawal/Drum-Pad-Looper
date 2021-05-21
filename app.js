
const allbuttons = document.querySelectorAll(".drum");
const buttonlength = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttonlength; i++) {
    allbuttons[i].addEventListener("click",function(){
        var buttoninnervalue = this.value;
        switch (buttoninnervalue) {
            case "a":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "b":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            case "c":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case "d":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "e":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "f":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case "g":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "h":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case "i":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "j":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case "k":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case "l":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "m":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case "n":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "o":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            case "p":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;

            default:
                break;
        }
        

    })
};
