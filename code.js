var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall_1 = createSprite(50,90,100,15);
var wall_2 = createSprite(170,4,17,250);
var wall_3 = createSprite(205,46,80,20);
var wall_4 = createSprite(90,142,100,15);
var wall_5 = createSprite(198,195,20,80);
var wall_6 = createSprite(281,15,15,150);
var wall_7 = createSprite(344,41,50,15);
var wall_8 = createSprite(82,189,15,85);
var wall_9 = createSprite(217,185,55,15);
var wall_10 = createSprite(50,90,100,15);
var wall_11 = createSprite(126,242,15,134);
var wall_12 = createSprite(205,300,145,20);
var wall_13 = createSprite(320,200,19,150);
var wall_14 = createSprite(275,190,15,100);
var wall_15 = createSprite(189,309,15,100);
var wall_16 = createSprite(45,301,15,100);
var wall_17 = createSprite(330,201,70,15);
var wall_18 = createSprite(30,390,100,15);
var wall_19 = createSprite(92,5,10,50);
var wall_20 = createSprite(375,2,15,93);
var wall_21 = createSprite(393,399,10,175);
var wall_22 = createSprite(292,399,200,15);
var sofia = createSprite(32,30,20,20);
var award = createSprite(380,352,10,70);

sofia.shapeColor="blue";
award.shapeColor="yellow";

function draw() {
  background("pink");
  if (keyDown("up")) {
    sofia.y = sofia.y-10;
  }
  if (keyDown("down")){
    sofia.y = sofia.y+10;
  } 
  
  if (keyDown("right")){
    sofia.x=sofia.x+10;
  }
  
  if (keyDown("left")){
    sofia.x=sofia.x-10;
  }
  textSize("20");   
  text("sofia",24,21);   
  textSize("20");
  text("cup",340,361);
  
     
     
  createEdgeSprites(); 
  sofia.bounceOff(topEdge);
  sofia.bounceOff(bottomEdge);
  sofia.bounceOff(rightEdge);
  sofia.bounceOff(leftEdge);
  sofia.bounceOff(wall_1);
  sofia.bounceOff(wall_2);
  sofia.bounceOff(wall_3);
  sofia.bounceOff(wall_4);
  sofia.bounceOff(wall_5);
  sofia.bounceOff(wall_6);
  sofia.bounceOff(wall_7);
  sofia.bounceOff(wall_8);
  sofia.bounceOff(wall_9);
  sofia.bounceOff(wall_10);
  sofia.bounceOff(wall_11);
  sofia.bounceOff(wall_12);
  sofia.bounceOff(wall_13);
  sofia.bounceOff(wall_14);
  sofia.bounceOff(wall_15);
  sofia.bounceOff(wall_16);
  sofia.bounceOff(wall_17);
  sofia.bounceOff(wall_18);
  sofia.bounceOff(wall_19);
  sofia.bounceOff(wall_20);
  sofia.bounceOff(wall_21);
  sofia.bounceOff(wall_22);

  
  
  if (sofia.isTouching(award)){
    fill("red");
    textSize(25);
    textFont("impact");
    text("You Win",244,348);
    
  }
  
  
drawSprites();

}






























































// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
