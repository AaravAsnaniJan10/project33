const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;


function preload() {
    // create getBackgroundImg() here
    bg = loadImage("sunsrise1.png","sunsrise2.png","sunsrise3.png","sunsrise4.png","sunsrise5.png","sunsrise6.png","sunsrise7.png","sunsrise8.png","sunsrise9.png","sunsrise10.png")
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

          

    Engine.update(engine);



}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
    var responseJSON = await response.json()
    var datetime=responseJSON.datetime
    
   var hour  = datetime.slice(11,13)
   console.log(hour)
 
     if(hour>=04 && hour<=06){
     bg = "snow1.png"
     }else if (hour>=00 && hour<=07){
     bg = "snow2.png"
    }else if   (hour>=08 && hour<=14){
     bg = "snow3.png"  
    }else if (hour>=15 && hour<=20){
     bg = "snow4.png"
    }else if   (hour>=19 && hour<=24){
     bg = "snow5.png"  
    }}