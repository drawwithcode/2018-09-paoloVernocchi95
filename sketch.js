var myLoc;
var atalaricoLat;
var atalaricoLong;
var myMap;
var canvas;
var mappa=new Mappa("Leaflet");
var atalaricoLat= 44.4303619;
var atalaricoLong=12.1980816;
var milanoLat=45.501902;
var milanoLong= 9.165741;
var boloLat=44.6360695;
var boloLong= 10.4114535;
var options = {
  lat:atalaricoLat,
  lng:atalaricoLong,
  zoom: 10,
  style:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

var wallys;

function preload(){
myLoc= getCurrentPosition();
}
var fence;
var polygon = [
    {lat: 34.045303, lon: -118.334650},  // top left
    {lat: 34.045252, lon: -118.334462},  // top right
    {lat: 34.045131, lon: -118.334498},  // bottom right
    {lat: 34.045185, lon: -118.334684},  // bottom left
];
function setup() {
  canvas=createCanvas(windowWidth,windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  atalaricoLat= 44.4303619
  atalaricoLong=12.1980816
  //wallys = new Ball(44.4303619- 1*random(),12.1980816- 1*random(), 50);
fence = new geoFenceCircle(44.979779, -93.325499, 0.05, insideTheFence, outsideTheFence, 'mi');

}

function draw() {
//  wallys.display();
  clear();
  fill(random(255),random(255),random(255));

  var point = myMap.latLngToPixel(atalaricoLat,atalaricoLong);
  var point2 = myMap.latLngToPixel(milanoLat,milanoLong);
  var point3 = myMap.latLngToPixel(boloLat,boloLong);
  fill(255,0,0,100);
  beginShape();
vertex(point.x,point.y);
vertex(point2.x,point2.y);
vertex(point3.x,point3.y);
endShape(CLOSE);
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
function insideTheFence(position){
    print("INlat: " + position.latitude);
    print("INlong: " + position.longitude);
    print("user is inside of the fence")
}

function outsideTheFence(position){
    print("OUTlat: " + position.latitude);
    print("OUTlong: " + position.longitude);
    print("user is outside of the fence")
}
function mousePressed(){
	fence.clear();
}
