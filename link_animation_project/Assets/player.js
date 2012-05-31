#pragma strict

function play_animation(a:String){
        switch(a){
                case "idle": 
                case "walk": 
                case "vertical_cut": 
                case "horizontal_cut": 
                case "circle_cut": 
                case "amaze": 
                animation.Play(a);
                break;
        }
}
