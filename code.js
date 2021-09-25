var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0ecb4e60-de1a-4c98-9fc8-a0486d931f10","209ae42a-2661-4534-bbb7-2fb89e2e8d6b","a05bde79-954f-4250-8454-b9125c076e39"],"propsByKey":{"0ecb4e60-de1a-4c98-9fc8-a0486d931f10":{"name":"birdside_03_1","sourceUrl":null,"frameSize":{"x":52,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"jEsu25Ht4x35aXdQLx8JHgRDJrbwvgEq","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":52,"y":30},"rootRelativePath":"assets/0ecb4e60-de1a-4c98-9fc8-a0486d931f10.png"},"209ae42a-2661-4534-bbb7-2fb89e2e8d6b":{"name":"kid_14_side_1","sourceUrl":null,"frameSize":{"x":19,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"CNpSYb1OXBbr4w4yfqgY7HOkC558rcdL","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":19,"y":30},"rootRelativePath":"assets/209ae42a-2661-4534-bbb7-2fb89e2e8d6b.png"},"a05bde79-954f-4250-8454-b9125c076e39":{"name":"cheetah_1","sourceUrl":null,"frameSize":{"x":38,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"ciIW6zJdRJs.UOfcYfAQ8hf88Nx8msoh","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":38,"y":30},"rootRelativePath":"assets/a05bde79-954f-4250-8454-b9125c076e39.png"}}};
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

  var wall1 = createSprite(190,80,10,100);
  var wall2 = createSprite(190,290,10,100);
  var wall3 = createSprite(67,85,10,100);
  var wall4 = createSprite(67,295,10,100);
  var wall5 = createSprite(313,85,10,100);
  var wall6 = createSprite(313,295,10,100);
  var wall7 = createSprite(41,170,50,3);
  var wall8 = createSprite(41,210,50,3);
  var wall9 = createSprite(337,210,50,3);
  var wall10 = createSprite(337,170,50,3);
  var wall11 = createSprite(18,190,3,40);
  var wall12 = createSprite(361,190,3,40);
  
  var boundry1 = createSprite(200,10,390 ,3);
    boundry1.shapeColor="maroon";

  var boundry2 = createSprite(200,390,390 ,3);
  boundry2.shapeColor="maroon";
  
  
  var Man = createSprite(40,190,13,13);
  Man.shapeColor = "green";
Man.setAnimation("kid_14_side_1");
    
  var fire1 = createSprite(100,10,10,10);
 fire1.shapeColor = "red";
 fire1.setAnimation("cheetah_1");
  var fire2 = createSprite(215,10,10,10);
  fire2.shapeColor = "red";
  fire2.setAnimation("cheetah_1");
  var fire3 = createSprite(165,370,10,10);
  fire3.shapeColor = "red";
  fire3.setAnimation("cheetah_1");
  var fire4 = createSprite(270,370,10,10);
  fire4.shapeColor = "red";
  fire4.setAnimation("cheetah_1");
  
  fire1.velocityY = 8;
  fire2.velocityY = 8;
  fire3.velocityY = 8;
  fire4.velocityY = 8;
  
  var count = 0;
  


function draw() {
  background("white");
  text("Deaths: " + count,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(18,170,52,40);
  rect(308,170,52,40);
  
  fire1.bounceOff(boundry1);
  fire1.bounceOff(boundry2);
  fire2.bounceOff(boundry1);
  fire2.bounceOff(boundry2);
  fire3.bounceOff(boundry1);
  fire3.bounceOff(boundry2);
  fire4.bounceOff(boundry1);
  fire4.bounceOff(boundry2);
  
 
  if(keyDown("right")){
    Man.x = Man.x + 8;
  }
  if(keyDown("left")){
    Man.x = Man.x - 8;
  }
  if (keyDown("space")) {
    
  }
  
  if(Man.isTouching(wall5)||
     Man.isTouching(wall6)||
     Man.isTouching(fire1)||
     Man.isTouching(fire2)||
     Man.isTouching(fire3)||
     Man.isTouching(fire4))
  {
     Man.x = 40;
     Man.y = 190;
     count = count + 1;
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
