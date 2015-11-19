var five = require("johnny-five");
var board = new five.Board();

var stdin = process.openStdin(); 
require('tty').setRawMode(true);    

var elbowServo, shoulderServo = null;
var elbowOffset = 38;
var shoulderOffset = 5;
var elbowPosition = 90 + elbowOffset, shoulderPosition = 90+shoulderOffset;
board.on("ready", function() {
  
 	elbowServo = new five.Servo({
	  pin: 6,
	  startAt: 90 + elbowOffset
	});
 	//elbowServo.sweep();

 	shoulderServo = new five.Servo({
	  pin: 5,
	  startAt: 90 + shoulderOffset
	});
 	//shoulderServo.sweep();
 	// deviasi 56derajat
 	board.repl.inject({
 	test: function(){
 		console.log('test');
 	}
 });
});
function test(){
	console.log('sparta');
}
/*
stdin.on('keypress', function (chunk, key) {
  // if (key && key.ctrl && key.name == 'c') process.exit();
  if(chunk == 'a'){
  	shoulderPosition += 1;
  	shoulderServo.to(shoulderPosition);
  	console.log('move shoulder to '+ shoulderPosition);
  }
  if(chunk == 'o'){
  	shoulderPosition -= 1;
  	shoulderServo.to(shoulderPosition);
  	console.log('move shoulder to '+ shoulderPosition);
  }
  if(chunk == 'e'){
  	elbowPosition += 1;
  	elbowServo.to(elbowPosition);
  	console.log('move elbow to '+elbowPosition);
  }
  if(chunk == 'u'){
  	elbowPosition -= 1;
  	elbowServo.to(elbowPosition);
  	console.log('move elbow to '+elbowPosition);
  }
});
  */
 
 