
let pelotas=[];


function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('rgba(0,0,0,0.03)');
    for(let i = 0; i< pelotas.length;i++){
      if (pelotas[i].isAlife) {
    pelotas[i].update();
    pelotas[i].display(); 
  }  else {
    pelotas.splice(i, 1);
 }
}
}
function mouseClicked(){
for(let i=0; i<200;i++){
let nuevaPelota= new RandomWalek(mouseX,mouseY);
pelotas.push(nuevaPelota);

}
}

class RandomWalek{
  constructor(_mouseX,_mouseY){
    this.red=random(0,120);
    this.green=random(10,50);
    this.blue=random(10,150);
    this.white=random(220,0);
    
    this.t=0;
    this.tSpeed=random(0.1);
    this.noiseShift= random(5,5);
    this.lifespan=int(random(30,50));
    this.isAlife = true;

    this.pos=createVector(_mouseX, _mouseY);
    this.speed =createVector(random(-2,2),random(-2,2));
    this.diametro= random(10,30);
    this.pelotaFinal=this.diametro/2;
    print('Hola: pelota' + this.lifespan + ' frames.');
  }
  update(){
    this.speed.rotate(map(noise(this.t + this.noiseShift),10,-10,-0.10,0.10,));
    this.pos.add(this.speed);
    this.t += this.tSpeed;
		this.lifespan--;

  }
  display(){
    stroke(this.white,this.blue,this.green);
    fill(this.red,this.green,this.blue);
    //ellipse(this.pos.x,this.pos.y,this.diametro,this.diametro);
    rect(this.pos.x,this.pos.y,this.diametro,this.diametro);
    if (this.lifespan <= 0) {
			this.muriending();
  }
}
muriending() {
  this.diametro -= 0.6;
  if (this.diametro <= 0) {
    this.isAlife = false;
    print('desaparezco' + this.isAlife);
    //ellipse(this.pos.x, this.pos.y, this.pelotaFinal, this.pelotaFinal);
  }
  }

  }