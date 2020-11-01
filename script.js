
let wishes = [
    {
     name:"💕Rishabh💕",
     avatar:1,
     wish:"💗💗Happiest Birthday to you my most caring and loving babu 😘😘😘😘😘😘 , You always motivate me to dream big and never allow me to feel low and depressed, vse to hmse kuch kaam na hota jabtk tmhri hadki na pde but aj bina khe itna kaam kia, and i really love this. you are not my love only your are my life! 🌎 , This year corona ne sara plan chaupat kr liya but sbse acchi bat ye hai ki in this corona crisis we and our families are safe. and as you know i don't know how to express my feelings bs itna khna hai ki i love you the most ❤️❤️❤️🧡🧡🧡 and always be with youin any situation will be and will make tasty recipes too as i always do for u , my cute maau rontru b bat bat me rone lgti 😂😂😂 , most angry b gussa ane per panje marne ka try krti fr khisiyani billi trh kch kr ni pati to muh bana k baith jati 🤣🤣🤣🤣🤣🤣 , It's so long time or pta b ni chla kse kb gujar gya but our bond is getting more stronger and stronger as time passes away! time ka pata hi ni chala itne sal kse khatam ho gye , bs jaldi se sb settle ho jye yhi chaiye is time bs🤗🤗🤗🤗. Happy birthday to you maau 🐱🐱🐱🐱"
    },

    {
     name:"😎 Dinesh 😎",
     avatar:2,
     wish:"Wish you a beautiful😍😍 birthday 🎂🎂🎂and I hope you get double😇 of everything 😋you want in your life❤️😍😍. Happy Birthday!🥰🥰Niaaa🤩🤩",
    },
    {
     name:"💝 Vibhu 💝",
     avatar:3,
     wish:"Happiest birthday to my #BholuRam 😘😘 May god bless you with all the love,happiness and success. 💐💐May you keep smiling and shining like a star 🤩I love you so much yarr❤️❤️Thanku for always being with me. Thank you for being so caring and loving You have proved the actual meaning of \"True Friendship\"  Love you Infinity ❤️\n "
    },
    {
     name:"😚 Prabha 😚",
     avatar:4,
     wish:"Your smile is so precious for me always be happy thanks baby to come in my life ...for all the stupid memories🤪... We will create more beautiful memories ... Hum do hmare ek ek mtlb hm char bhut masti krne wale h I m damn sure 💋💋💋💋💋 \n Enjoy your birthday n baby study hard ... We will meet after my result!😘😘😍😍"
    },
    {
     name:"😙 Mansi 🐼🐼",
     avatar:5,
     wish:"Birthdays come around every year, but friend like you only come once in a lifetime. I’m so glad you came into my life. Best wishes on your special day. Happy Birthday nia❤️❤️ love u so much "
    },
    {
     name:"😗 Ritu 😗",
     avatar:6,
     wish:"Happy birthday dear😘😘sending u lots of luv n lovely wishes may all ur dream comes true 😘 . Stay healthy n be blessed . Luv u babes❤️❤️ "
    },
    {
     name:"🤗 Shefali 🤗",
     avatar:7,
     wish:"I jst want 2 wish uh lots of luck....gud health nd yessss lots of wealth...On dis special day...,\nWish uh a super birthday..."
    },
    {
     name:" 🤗 Shanika 🤗",
     avatar:8,
     wish:"May god bless you beautiful ❤ Happy birthday dear , wish you all the happiness of the world!"
    },
    {
     name:" 🥰 Shalini 🤗",
     avatar:9,
     wish:"Sending you smiles for every moment of your special day…Have a wonderful time and a very happy birthday.  Hope your special day brings you all that your heart desires🥰🥰💋💋❤️❤️❤️"
    },
    {
     name:"🥴 Sahil 😆",
     avatar:10,
     wish:"Let this day be full of joy and celebration🤩🥳. I wish you an outstanding and fabulous birthday🎂, my friend!🥰❤️"
    },
    {
     name:"🤩😍 Mansi 👶👶",
     avatar:11,
     wish:"May god shower all his blessings on you..😇 keep shining.. keep rocking❤️❤️  Wish you a very very happy birthday🥳🥳🥳🥳🥳🥳🥳🍫🎂🍫🎂🍫🎉🎉"
    },
    
    {
     name:"😯😯 ujjaval 👨 😎",
     avatar:12,
     wish:"May god shower all his blessings on you..😇 keep shining.. keep rocking❤️❤️  Wish you a very very happy birthday🥳🥳🥳🥳🥳🥳🥳🍫🎂🍫🎂🍫🎉🎉"
    },
    
   
   ];
   document.getElementById("music").play();

   const container = document.querySelector(".container");
   
   function addWishes(data) {
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
     <div>
     <div class="img">
     <img src="images/${data.avatar}.png" alt="" >
     </div>
     <h2 class="card_title" >${data.name}</h2>
     <p class="card_text" >"${data.wish}"</p>
     </div>`;
    container.appendChild(div)
   }
   function showWishes(){
    wishes.forEach(wish => {
     addWishes(wish)
    document.getElementById("music").pause();

    });
   }
   function start() {
    document.querySelector(".loader").style.display = "none";
    document.querySelector('.main').style.display = "block";

    showWishes()
   }
  
   function showGift(){
    document.querySelector(".loader").style.display = "none";
    document.querySelector('.main').style.display = "none";
    document.querySelector('.teddy_area').style.display = "block";
   }
   document.querySelector('.main').style.display = "none";
   document.querySelector('.teddy').style.display = 'none';


   // for gift box and fireworks
   
window.requestAnimFrame = function () {
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  }();
  
  // now we will setup our basic variables for the demo
  var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  // full screen dimensions
  cw = window.innerWidth,
  ch = window.innerHeight,
  // firework collection
  fireworks = [],
  // particle collection
  particles = [],
  // starting hue
  hue = 120,
  // when launching fireworks with a click, too many get launched at once without a limiter, one launch per 5 loop ticks
  limiterTotal = 5,
  limiterTick = 0,
  // this will time the auto launches of fireworks, one launch per 80 loop ticks
  timerTotal = 80,
  timerTick = 0,
  mousedown = false,
  // mouse x coordinate,
  mx,
  // mouse y coordinate
  my;
  
  // set canvas dimensions
  canvas.width = cw;
  canvas.height = ch;
  
  // now we are going to setup our function placeholders for the entire demo
  
  // get a random number within a range
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // calculate the distance between two points
  function calculateDistance(p1x, p1y, p2x, p2y) {
    var xDistance = p1x - p2x,
    yDistance = p1y - p2y;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  }
  
  // create firework
  function Firework(sx, sy, tx, ty) {
    // actual coordinates
    this.x = sx;
    this.y = sy;
    // starting coordinates
    this.sx = sx;
    this.sy = sy;
    // target coordinates
    this.tx = tx;
    this.ty = ty;
    // distance from starting point to target
    this.distanceToTarget = calculateDistance(sx, sy, tx, ty);
    this.distanceTraveled = 0;
    // track the past coordinates of each firework to create a trail effect, increase the coordinate count to create more prominent trails
    this.coordinates = [];
    this.coordinateCount = 3;
    // populate initial coordinate collection with the current coordinates
    while (this.coordinateCount--) {
      this.coordinates.push([this.x, this.y]);
    }
    this.angle = Math.atan2(ty - sy, tx - sx);
    this.speed = 2;
    this.acceleration = 1.05;
    this.brightness = random(50, 70);
    // circle target indicator radius
    this.targetRadius = 1;
  }
  
  // update firework
  Firework.prototype.update = function (index) {
    // remove last item in coordinates array
    this.coordinates.pop();
    // add current coordinates to the start of the array
    this.coordinates.unshift([this.x, this.y]);
  
    // cycle the circle target indicator radius
    if (this.targetRadius < 8) {
      this.targetRadius += 0.3;
    } else {
      this.targetRadius = 1;
    }
  
    // speed up the firework
    this.speed *= this.acceleration;
  
    // get the current velocities based on angle and speed
    var vx = Math.cos(this.angle) * this.speed,
    vy = Math.sin(this.angle) * this.speed;
    // how far will the firework have traveled with velocities applied?
    this.distanceTraveled = calculateDistance(this.sx, this.sy, this.x + vx, this.y + vy);
  
    // if the distance traveled, including velocities, is greater than the initial distance to the target, then the target has been reached
    if (this.distanceTraveled >= this.distanceToTarget) {
      createParticles(this.tx, this.ty);
      // remove the firework, use the index passed into the update function to determine which to remove
      fireworks.splice(index, 1);
    } else {
      // target not reached, keep traveling
      this.x += vx;
      this.y += vy;
    }
  };
  
  // draw firework
  Firework.prototype.draw = function () {
    ctx.beginPath();
    // move to the last tracked coordinate in the set, then draw a line to the current x and y
    ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
    ctx.lineTo(this.x, this.y);
    ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
    ctx.stroke();
  
    ctx.beginPath();
    // draw the target for this firework with a pulsing circle
    ctx.arc(this.tx, this.ty, this.targetRadius, 0, Math.PI * 2);
    ctx.stroke();
  };
  
  // create particle
  function Particle(x, y) {
    this.x = x;
    this.y = y;
    // track the past coordinates of each particle to create a trail effect, increase the coordinate count to create more prominent trails
    this.coordinates = [];
    this.coordinateCount = 5;
    while (this.coordinateCount--) {
      this.coordinates.push([this.x, this.y]);
    }
    // set a random angle in all possible directions, in radians
    this.angle = random(0, Math.PI * 2);
    this.speed = random(1, 10);
    // friction will slow the particle down
    this.friction = 0.95;
    // gravity will be applied and pull the particle down
    this.gravity = 1;
    // set the hue to a random number +-20 of the overall hue variable
    this.hue = random(hue - 20, hue + 20);
    this.brightness = random(50, 80);
    this.alpha = 1;
    // set how fast the particle fades out
    this.decay = random(0.015, 0.03);
  }
  
  // update particle
  Particle.prototype.update = function (index) {
    // remove last item in coordinates array
    this.coordinates.pop();
    // add current coordinates to the start of the array
    this.coordinates.unshift([this.x, this.y]);
    // slow down the particle
    this.speed *= this.friction;
    // apply velocity
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed + this.gravity;
    // fade out the particle
    this.alpha -= this.decay;
  
    // remove the particle once the alpha is low enough, based on the passed in index
    if (this.alpha <= this.decay) {
      particles.splice(index, 1);
    }
  };
  
  // draw particle
  Particle.prototype.draw = function () {
    ctx.beginPath();
    // move to the last tracked coordinates in the set, then draw a line to the current x and y
    ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
    ctx.lineTo(this.x, this.y);
    ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
    ctx.stroke();
  };
  
  // create particle group/explosion
  function createParticles(x, y) {
    // increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
    var particleCount = 30;
    while (particleCount--) {
      particles.push(new Particle(x, y));
    }
  }
  
  // main demo loop
  function loop() {
    // this function will run endlessly with requestAnimationFrame
    requestAnimFrame(loop);
  
    // increase the hue to get different colored fireworks over time
    hue += 0.5;
  
    // normally, clearRect() would be used to clear the canvas
    // we want to create a trailing effect though
    // setting the composite operation to destination-out will allow us to clear the canvas at a specific opacity, rather than wiping it entirely
    ctx.globalCompositeOperation = 'destination-out';
    // decrease the alpha property to create more prominent trails
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, cw, ch);
    // change the composite operation back to our main mode
    // lighter creates bright highlight points as the fireworks and particles overlap each other
    ctx.globalCompositeOperation = 'lighter';
  
    // loop over each firework, draw it, update it
    var i = fireworks.length;
    while (i--) {
      fireworks[i].draw();
      fireworks[i].update(i);
    }
  
    // loop over each particle, draw it, update it
    var i = particles.length;
    while (i--) {
      particles[i].draw();
      particles[i].update(i);
    }
  
    // launch fireworks automatically to random coordinates, when the mouse isn't down
    if (timerTick >= timerTotal) {
      if (!mousedown) {
        // start the firework at the bottom middle of the screen, then set the random target coordinates, the random y coordinates will be set within the range of the top half of the screen
        fireworks.push(new Firework(cw / 2, ch, random(0, cw), random(0, ch / 2)));
        timerTick = 0;
      }
    } else {
      timerTick++;
    }
  
    // limit the rate at which fireworks get launched when mouse is down
    if (limiterTick >= limiterTotal) {
      if (mousedown) {
        // start the firework at the bottom middle of the screen, then set the current mouse coordinates as the target
        fireworks.push(new Firework(cw / 2, ch, mx, my));
        limiterTick = 0;
      }
    } else {
      limiterTick++;
    }
  }
  
  window.onload = function () {
    var merrywrap = document.getElementById("merrywrap");
    var box = merrywrap.getElementsByClassName("giftbox")[0];
    var step = 1;
    var stepMinutes = [2000, 2000, 1000, 1000];
    function init() {
      box.addEventListener("click", openBox, false);
      document.getElementById("music").play();

      
    }
    function stepClass(step) {
      merrywrap.className = 'merrywrap';
      merrywrap.className = 'merrywrap step-' + step;
      
    }
    function openBox() {
      document.querySelector('.teddy').style.display = 'block';
      if (step === 1) {
        box.removeEventListener("click", openBox, false);
      }
      stepClass(step);
      if (step === 3) {
    
      }
      if (step === 4) {
        reveal();
        return;
      }
      setTimeout(openBox, stepMinutes[step - 1]);
      step++;
    }
  
    init();
  
  };
  
  function reveal() {
    document.querySelector('.merrywrap').style.backgroundColor = 'transparent';
    document.getElementById("music").src="./songs/song2.mp3";
    document.getElementById("music").play();
    document.getElementById('birthday_wish').innerHTML = "I Love You So Much!"


  
    loop();
  
    
   
  }
  
  // for image gallery....
  function showWishesCards(){
    window.location.href=window.location.href = "./image_gallary/image_gallary.html";
  }

  