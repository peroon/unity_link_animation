var myaudio:GameObject;
var player:GameObject;

function Start(){
        myaudio = GameObject.Find('audio');
        player = GameObject.Find('player');
}

function OnGUI () {
    var X = 10;
    var Y = 10;
    var W = 120;
    var H = 80;
	if (GUI.Button (Rect (X,Y,W,H), "idle")) {
            player.SendMessage("play_animation", "idle");
	}
    X = X + W + 10;
	if (GUI.Button (Rect (X,Y,W,H), "walk")) {
            player.SendMessage("play_animation", "walk");
	}
    X = X + W + 10;
	if (GUI.Button (Rect (X,Y,W,H), "vertical_cut")) {
        player.SendMessage("play_animation", "vertical_cut");
        myaudio.SendMessage('play_ei');
	}
    X = X + W + 10;
	if (GUI.Button (Rect (X,Y,W,H), "horizontal_cut")) {
        player.SendMessage("play_animation", "horizontal_cut");
        myaudio.SendMessage('play_ya');
	}
    X = X + W + 10;
	if (GUI.Button (Rect (X,Y,W,H), "circle_cut")) {
        player.SendMessage("play_animation", "circle_cut");
        myaudio.SendMessage('play_tou');
	}
    X = X + W + 10;
	if (GUI.Button (Rect (X,Y,W,H), "amaze")) {
        player.SendMessage("play_animation", "amaze");
        myaudio.SendMessage('play_uwa');
	}
}

