var myLoc;
var atalaricoLat;
var atalaricoLong;
var myMap;
var canvas;
var mappa=new Mappa("MapboxGL","pk.eyJ1IjoicGFvbG92cm4iLCJhIjoiY2pwMDVyMGhrMDIxaTNxcGpwaGRicTM2ZCJ9.o-_V3UFPnwIq0C4Q2IxHRg");
var lombLat=45.501902;
var lombLong= 9.165741;
var emiliaLat=44.7017301;
var emiliaLong= 10.5682279;
var venetoLat=45.7322813;
var venetoLong= 11.7407832;
var lazioLat=41.8083258;
var lazioLong= 12.617275;
var campaniaLat=40.7456232;
var campaniaLong= 13.6630268;
var toscanaLat=43.351701;
var toscanaLong= 10.90782;
var siciliaLat=37.8350974;
var siciliaLong= 13.9451173;
var pugliaLat=41.0047401;
var pugliaLong= 16.6059907;
var abruzzoLat=42.2882456;
var abruzzoLong= 14.3402867;
var trentinoLat=46.3788459;
var trentinoLong= 10.3085097;
var romagnaLat=44.4123367;
var roamgnaLong= 12.1654897;
var sardegnaLat=40.0583216;
var sardegnaLong= 8.8576609;



var options = {
  lat:lazioLat,
  lng:lazioLong,
  zoom: 5,
  style:"mapbox://styles/paolovrn/cjp0bhzkz03ua2sp1f357jsdl"
}


function preload(){
myLoc= getCurrentPosition();
}
function setup() {
  canvas=createCanvas(windowWidth,windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  textAlign(CENTER);
  //wallys = new Ball(44.4303619- 1*random(),12.1980816- 1*random(), 50);

}
var hitlomb = false;
var hitreggio = false;
var hitveneto = false;
var hitlazio = false;
var hitcamp = false;
var hitsic = false;
var hitpuglia = false;
var hittosc = false;
var hittrent = false;
var hitabruzz = false;
function draw() {
//  wallys.display();
  clear();
  fill(random(255),random(255),random(255));


  var pointlomb = myMap.latLngToPixel(lombLat,lombLong);
  var pointreggio = myMap.latLngToPixel(emiliaLat,emiliaLong);
  var pointveneto = myMap.latLngToPixel(venetoLat,venetoLong);
  var pointlazio = myMap.latLngToPixel(lazioLat,lazioLong);
  var pointcamp = myMap.latLngToPixel(campaniaLat,campaniaLong);
  var pointsic = myMap.latLngToPixel(siciliaLat,siciliaLong);
  var pointpuglia = myMap.latLngToPixel(pugliaLat,pugliaLong);
  var pointtoscana = myMap.latLngToPixel(toscanaLat,toscanaLong);
  var pointtrento = myMap.latLngToPixel(trentinoLat,trentinoLong);
  var pointabruzz = myMap.latLngToPixel(abruzzoLat,abruzzoLong);
  var pointromagna = myMap.latLngToPixel(romagnaLat,roamgnaLong);
  var pointsardegna = myMap.latLngToPixel(sardegnaLat,sardegnaLong);
  noStroke();
  fill(255,0,0,0);
    ellipse(pointlomb.x,pointlomb.y,90);
    ellipse(pointreggio.x,pointreggio.y,90);
      ellipse(pointveneto.x, pointveneto.y,90);
      ellipse( pointlazio.x, pointlazio.y,90);
        ellipse(pointcamp.x,pointcamp.y,90);
        ellipse(pointsic.x,pointsic.y,90);
          ellipse(pointpuglia.x,pointpuglia.y,90);
          ellipse(pointtoscana.x,pointtoscana.y,90);
            ellipse(pointtrento.x,pointtrento.y,90);
            ellipse(pointabruzz.x,pointabruzz.y,90);
            ellipse(pointromagna.x,pointromagna.y,90);
            ellipse(pointsardegna.x,pointsardegna.y,90);
            point(mouseX,mouseY);

	hitlomb = collidePointCircle(mouseX,mouseY,pointlomb.x,pointlomb.y,90)
  hitreggio = collidePointCircle(mouseX,mouseY,pointreggio.x,pointreggio.y,90)
  hitveneto = collidePointCircle(mouseX,mouseY,pointveneto.x, pointveneto.y,90)
  hitlazio = collidePointCircle(mouseX,mouseY,pointlazio.x, pointlazio.y,90)
  hitcamp = collidePointCircle(mouseX,mouseY,pointcamp.x,pointcamp.y,90)
  hitsic = collidePointCircle(mouseX,mouseY,pointsic.x,pointsic.y,90)
  hitpuglia = collidePointCircle(mouseX,mouseY,pointpuglia.x,pointpuglia.y,90)
  hittosc = collidePointCircle(mouseX,mouseY,pointtoscana.x,pointtoscana.y,90)
  hittrent = collidePointCircle(mouseX,mouseY,pointtrento.x,pointtrento.y,90)
  hitabruzz = collidePointCircle(mouseX,mouseY,pointabruzz.x,pointabruzz.y,90)
  hitromagna = collidePointCircle(mouseX,mouseY,pointromagna.x,pointromagna.y,90)
    hitsardegna = collidePointCircle(mouseX,mouseY,pointsardegna.x,pointsardegna.y,90)
  if(hitlomb == true){
    fill(255);
    textSize(50);
  text('ue pirla',mouseX,mouseY);
  }
  if(hitreggio == true){
    fill(255);
    textSize(50);
  text('In dó vêt?',mouseX,mouseY);
  }
  if(hitveneto == true){
    fill(255);
    textSize(50);
  text('ciao fioi come ea?',mouseX,mouseY);
  }
  if(hitlazio == true){
    fill(255);
    textSize(50);
  text('SCIAO CÌ',mouseX,mouseY);
  }
  if(hitcamp == true){
    fill(255);
    textSize(50);
  text('ué ué ',mouseX,mouseY);
  }
  if(hitsic == true){
    fill(255);
    textSize(50);
  text('compà ',mouseX,mouseY);
  }
  if(hitpuglia == true){
    fill(255);
    textSize(50);
  text('L muert e l stramuert d maam t! ',mouseX,mouseY);
  }
  if(hittosc == true){
    fill(255);
    textSize(50);
  text('bona gigi , ci si vede ',mouseX,mouseY);
  }
  if(hittrent == true){
    fill(255);
    textSize(50);
  text(' Tei hat finì de rozàr? ',mouseX,mouseY);
  }
  if(hitabruzz == true){
    fill(255);
    textSize(50);
  text(' o buongiorn! ',mouseX,mouseY);
  }
  if(hitromagna == true){
    fill(255);
    textSize(50);
  text(' ue tabac! ',mouseX,mouseY);
  }
  if(hitsardegna == true){
    fill(255);
    textSize(50);
  text(' ajo ',mouseX,mouseY);
  }
fill(255);
textSize(70)
text("Scopri alcuni saluti italiani", windowWidth/2,windowHeight/8);

  //var point = myMap.latLngToPixel(atalaricoLat,atalaricoLong);
  //ellipse(point.x,point.y,30);
}

/*function Ball (_x, _y, _diameter) {
  // Properties defined by constructor
  this.size = _diameter;
  this.x = _x;
  this.y = _y;
  // Hardcoded properties
  this.color = 'red';
  /*this.speed = 2;
  // Methods
  this.move = function() {
     this.x += this.speed;
     this.y += this.speed;
  }

  this.display = function() {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
}*/
