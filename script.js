$(function(){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    
    var y = 150;
    var cw = 450;
    var ch = 300;
    
    context.strokeStyle='blue';
    
    for (x=0;x<=450;x+1){
      if(x%4==0){
        context.moveTo(x,y);
        context.lineTo(0,0);
      }else if(x%4==1){
        context.moveTo(x,y);
        context.lineTo(cw,0);
      }else if(x%4==2){
        context.moveTo(x,y);
        context.lineTo(0,ch);
      }else if(x%4==3){
        context.moveTo(x,y);
        context.lineTo(cw,ch);
      }else{
        context.lineTo(x,y);
      }
        context.stroke();
      }   
    });