function movePlayerHz(){
    if (rightArrowPressed){
      player.x += player.xSpeed;
      if (player.x + player.w > cnv.width + 100){
        //player.x = cnv.width - player.w; BORDER
        player.x = -110;
      } 
    } else if (leftArrowPressed) {
      player.x += -player.xSpeed;
      if (player.x < -20){
        player.x = 1050;
      }
    }
  }
  
  function movePlayerVt(){
    player.y += player.ySpeed;
    player.ySpeed += player.a;
    if (player.y + player.h > cnv.height){
      //player.ySpeed = -20;
      player.ySpeed = 0;
      player.y = cnv.height - player.h;
    // } //if (player.y + player.h > obstacle.h && obstacle.w){
      //player.ySpeed = 0;
      //player.y = obstacle.h - player.h
    } else if (player.y + player.h > cnv.height ){
      player.ySpeed = 0;
    }
  }
  
   var img = new Image();
   img.src="/character.png";
  function drawPlayer(){
  ctx.drawImage(img, player.x, player.y, player.w, player.h);
  }


  function drawObstacle(){
      ctx.fillStyle = "gray";
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
  }

  function drawObstacle2(){
    ctx.fillStyle = "gray";
    ctx.fillRect(obstacle2.x, obstacle2.y, obstacle2.w, obstacle2.h);
  }

  function flyingObstacle(){
    ctx.fillStyle = "white";
    ctx.fillRect(flyingObject.x, flyingObject.y, flyingObject.w, flyingObject.h)
    flyingObject++;
  }

if (player.x > platformx && player.x < platformx && player.y > platformy){
  console.log('Collision');
}