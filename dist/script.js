var fgImg = null;
var bgImg = null;
var greenThreshold = 240;

function f1(){
  var img = document.getElementById("id1");
  
  fgImg = new SimpleImage(img);
  
  var canvas = document.getElementById("fgcan");
  fgImg.drawTo(canvas);
}

function f2(){
  var img = document.getElementById("id2");
  
  bgImg = new SimpleImage(img);
  
  var canvas = document.getElementById("bgcan");
  bgImg.drawTo(canvas);
}

function greenScreen(){
  if(fgImg == null || !fgImg.complete()){
    alert("Foreground not loaded");
    return;
  }
  if(bgImg == null || !bgImg.complete()){
    alert("Background not loaded");
    return;
  }
  
  var output = new SimpleImage(fgImg.getWidth(),fgImg.getHeight());
  for(pixel of fgImg.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    
    if(pixel.getGreen() > greenThreshold){
      var bgPixel = bgImg.getPixel(x,y);
      output.setPixel(x,y,bgPixel);
    }
    else{
      output.setPixel(x,y,pixel);
    }
    
  }
  
  var canvas = document.getElementById("opcan");
  output.drawTo(canvas);
}