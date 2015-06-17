// PONG
// Julian Spiessens 2015
// Made for the T.Num.Av.2 exam at Haute ecole Albert Jacquard
//source: about every javascript pong tutorial i could find and my previous experience in video-game making.

 $(document).ready(function(){		

		// 60 fps
  		var animate = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||	window.mozRequestAnimationFrame || 
  		function(callback) { window.setTimeout(callback, 1000/60) };

  		//var

  		var canvas = $('canvas');
  		var canvas = document.createElement('canvas');
		var width = 400;
		var height = 600;
		canvas.width = width;
		canvas.height = height;
		var context = canvas.getContext('2d');

		var rand_ballX = Math.floor(Math.random()*401);
		var rand_ballY = 500;

		var player = new Player();
		var ordi = new Ordi();
		var ball = new Ball(rand_ballX, rand_ballY); 

		var score = 0;
		var vie = 0;

		var keysDown = {};

		$( window ).keydown(function(event) {
			//Get keycode
		  keysDown[event.keyCode] = true;
		});

		$(window).keyup(function(event) {
		  delete keysDown[event.keyCode];
		});


		//Functions


		function randomIntFromInterval(min,max)
		{
		    return Math.floor(Math.random()*(max-min+1)+min);
		}

		function Player() {
		   this.pad = new Pad(175, 10, 50, 10);
		}

		function Ordi() {
		  this.pad = new Pad(175, 580, 50, 10);
		}

		function Pad(x, y, width, height) {
		  this.x = x;
		  this.y = y;
		  this.width = width;
		  this.height = height;
		  this.x_speed = 0;
		  this.y_speed = 0;
		}

		function Ball(x, y) {
		  this.x = x;
		  this.y = y;
		  this.x_speed = Math.floor(Math.random()*5)+1;
		  this.y_speed = 4;
		  this.radius = 5;
		}


		// Call onload
		$(window).ready(function() {
			$('body').append(canvas);
			animate(step);
		});			 
		// Animation		

		var step = function() {
  		update();
  		render();
  		animate(step);
		};
   // Animation complete.


		// UPDATE 

		var update = function() {
		  player.update();
		  ordi.update(ball);
		  ball.update(player.pad, ordi.pad);
		  $("#VIE").html('I.A.: '+ vie);
		  $("#SCORE").html('Player: '+ score);
		};

		Ball.prototype.update = function(pad1, pad2) {
		  this.x -= this.x_speed;
		  this.y -= this.y_speed;
		  var top_x = this.x - 5;
		  var top_y = this.y - 5;
		  var bottom_x = this.x + 5;
		  var bottom_y = this.y + 5;

		  //wall

		  if(this.x - 5 < 0) { 
		    this.x = 5;
		    this.x_speed = -this.x_speed;
		  } else if(this.x + 5 > 400) { 
		    this.x = 395;
		    this.x_speed = -this.x_speed;
		  }

		  if(this.y < 0) { // point scored back to start
		    this.x_speed = Math.floor(Math.random()*5)+1;
		    this.y_speed = 4;
		    this.x = Math.floor(Math.random()*401);
		    this.y = 500;
		    vie++;


		  }

		  if(this.y > 600) { // point scored back to start
		    this.x_speed = Math.floor(Math.random()*5)+1;
		    this.y_speed = 4;
		    this.x = Math.floor(Math.random()*401);
		    this.y = 500;
		    score++;


		  }





		  if(top_y > 300) {
		    if(top_y < (pad2.y + pad2.height) && bottom_y > pad2.y && top_x < (pad2.x + pad2.width) && bottom_x > pad2.x) {
		      
		      this.y_speed = +3;
		      this.x_speed -= (pad1.x_speed / 2);
		      this.y -= this.y_speed;
		    }
		  } else {
		    if(top_y < (pad1.y + pad1.height) && bottom_y > pad1.y && top_x < (pad1.x + pad1.width) && bottom_x > pad1.x) {
		      
		      this.y_speed = -3;
		      this.x_speed -= (pad2.x_speed / 2);
		      this.y -= this.y_speed;
		    }
		  }
		};

		// IA: pad follows ball
		// Update: Restricted max speed to make it able for a human to score

		Ordi.prototype.update = function(ball) {
		  var x_pos = ball.x;
		  var diff = -((this.pad.x + (this.pad.width / 2)) - x_pos);
		  if(diff < 0 && diff < -4) { 
		    diff = -5;
		  } else if(diff > 0 && diff > 4) {
		    diff = 5;
		  }
		  this.pad.move(diff, 0);
		  if(this.pad.x < 0) {
		    this.pad.x = 0;
		  } else if (this.pad.x + this.pad.width > 400) {
		    this.pad.x = 400 - this.pad.width;
		  }
		};


		Player.prototype.update = function() {
		  for(var key in keysDown) {
		    var value = Number(key);
		    if(value == 37) { //left
		      this.pad.move(-4, 0);
		    } else if (value == 39) { //right
		      this.pad.move(4, 0);
		    } else {
		      this.pad.move(0, 0);
		    }
		  }
		};

		Pad.prototype.move = function(x, y) {
		  this.x += x;
		  this.y += y;
		  this.x_speed = x;
		  this.y_speed = y;
		  if(this.x < 0) { 
		    this.x = 0;
		    this.x_speed = 0;
		  } else if (this.x + this.width > 400) { 
		    this.x = 400 - this.width;
		    this.x_speed = 0;
		  }
		}

		//RENDERING

		var render = function() {
		  context.fillStyle = "#000000";
		  context.fillRect(0, 0, width, height);
		  player.render();
		  ordi.render();
		  ball.render();
		};

		Pad.prototype.render = function() {
		  context.fillStyle = "#FFFFFF";
		  context.fillRect(this.x, this.y, this.width, this.height);
		};

		Player.prototype.render = function() {
		  this.pad.render();
		};

		Ordi.prototype.render = function() {
		  this.pad.render();
		};

		Ball.prototype.render = function() {
		  context.beginPath();
		  context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
		  context.fillStyle = "#FFFFFF";
		  context.fill();
		};

});