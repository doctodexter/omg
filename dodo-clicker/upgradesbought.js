var sketch = function(p){
  p.x = 100;
  p.y = 100;
p.setup = function(){
p.createCanvas(200,200);
p.background(51);
}
p.draw = function(){
  p.fill(255,0,200,25);
  p.noStroke();
  p.ellipse(p.x,p.y,48,48);
  p.x += p.random(-1,1);
  p.y += p.random(-1,1);
}
}
var myp5 = new p5(sketch);
// class Ball{
//   constructor(){
//     this.x  = 0;
//     this.y = 0;
//     this.xspeed = 3;
//     this.yspeed = 3;
//     this.r = 25;
//   }
//   show(){
//     noFill();
//     stroke(255);
//     ellipse(this.x,this.y,this.r*2);
//   }
//   move(){
//     if(this.x > width || this.x < 0){
//       this.xspeed *= -1;
//     }
//     if(this.y > height || this.y < 0){
//       this.yspeed *= -1;
//     }
//     this.x += this.xspeed;
//     this.y += this.yspeed;
//   }
// }
