var canvas = new fabric.Canvas('myCanvas');
imagewidth = 30;
imageheight = 30;
player_x = 10;
player_y = 10;
var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("ironman.jpg", function(Img){
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x    
        });
        canvas.add(player_object);
     });
 }
 
 function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object= Img;
        block_image_object.scaleToWidth(image_width);
        block_image_object.scaleToHeight(image_height);
        block_image_object.set({
       top:player_y,
       left:player_x    
       });
       canvas.add(block_image_object);
    });
}