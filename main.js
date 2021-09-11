var canvas = new fabric.Canvas('mycanvas');
Imageheight = 30;
Imagewidth = 30;
playerx = 10;
playery = 10;
playerobject = "";
imageobject = "";
function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerobject = Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top: playery,
            left: playerx
        });
        canvas.add(playerobject);
    });

}
function newimage(getimage) {
    fabric.Image.fromURL(getimage, function (Img) {
        imageobject = Img;
        imageobject.scaleToWidth(Imagewidth);
        imageobject.scaleToHeight(Imageheight);
        imageobject.set({
            top: playery,
            left: playerx
        });
        canvas.add(imageobject);
    });
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == '80') {
        Imageheight = Imageheight + 10;
        Imagewidth = Imagewidth + 10;

        document.getElementById("width").innerHTML = Imagewidth;
        document.getElementById("height").innerHTML = Imageheight;
    }
    if(e.shiftKey && keypressed == '77') { console.log("m and shift pressed together");
    Imagewidth = Imagewidth - 10; Imageheight = Imageheight - 10;
     document.getElementById("width").innerHTML = Imagewidth;
    document.getElementById("height").innerHTML = Imageheight; }
    if (keypressed == '82') {
        newimage("roof.jpj");
    }
    if (keypressed == '37') {
        left();
    }
    if (keypressed == '38') {
        up();
    }
    if (keypressed == '39') {
        right();
    }
    if (keypressed == '40') {
        down();
    }
    if (keypressed == '87') {
        newimage("wall.jpg");
    }
    if (keypressed == '71') {
        newimage("ground.png");
    }
    if (keypressed == '76') {
        newimage("light_green.png");
    }
    if (keypressed == '84') {
        newimage("trunk.jpg");
    }
    if (keypressed == '82') {
        newimage("roof.jpg");
    }
    if (keypressed == '89') {

        newimage("yellow_wall.png");
    }
    if (keypressed == '68') {
        newimage("dark_green.png");
    }
    if (keypressed == '85') {
        newimage("unique.png");
    }
    if (keypressed == '67') {
        newimage("cloud.jpj");
    }
}
function up(){
    if(playery >=0) {
         playery = playery - Imageheight;
         canvas.remove(playerobject);
         player_update();
    }
    
}
function down(){
    if(playery <=500) {
         playery = playery + Imageheight;
         canvas.remove(playerobject);
         player_update();
    }
}
function left(){
    if(playerx >=0) {
         playerx = playerx - Imageheight;
         canvas.remove(playerobject);
         player_update();
    }
}
function right(){
    if(playerx <=815) {
         playerx = playerx + Imageheight;
         canvas.remove(playerobject);
         player_update();
    }
}