/* The code below is set up to demonstrate three functions that run on the Sphero RVR. Each function runs a single stage.


Stage one: drive forward three VEX field tiles (120 cm) using a PID algorithm at a heading of 90 degrees.
Note: This uses the y-coordinate of the robot as the setpoint.

Stage two - make a 90 degree turn using Weinberg's hacky method that also happens to work really well.

Stage three - drive forward two tiles on the floor at a heading of 90 degrees.
Note: this stage uses the x-coordinate of the robot as the setpoint.

Take a look at the code to get an idea of how each one works.

Your task is to plan a ten stage path on the VEX field using a series of commands like these.

One catch is that each of you must contribute three stages yourself as commits to this repository.

Another catch is that your stages should be submitted as issues on this repository, and as they are completed, closed by you (or me).

I will be syncing with this repository on my computer and pasting the code into the Sphero RVR software for testing purposes.

*/

async function startProgram() {
	//Jake' Movement Here (Stage 1):
	await JakeStage1()
	await JakeStage2()
	await JakeStage3()
	//Jaden's Movement Here (Stage 2):
	await JadenStage1()
	await JadenStage2()
	await JadenStage3()
	await JadenStage4()
	//Son's movemen
	
	//Tung's Movement Here (Stage 4):
	await TungStage1()
	await TungStage2()
	await TungStage3()
	//Other People's Movement Here:
	
	exitProgram()
}

async function JakeStage1(){


	let setpoint = 240;
	let k = 2.0;
	let kD = 0.5;
	let kI = 0.001;
	var accumulatedError = 0;
	var oldError = 0;
	var successTimer = 0.0;
	var maxSpeed = 100;
	var directionSign = 1; //-1 for moving left or down, 1 for moving right or up
	var stageComplete = false;

	//Visual feedback to know which stage we are on
	await setMainLed({r:255,g:0,b:0})

	while(stageComplete != true){
		//get the current location of the robot.
		var location = getLocation().y;

		//Use a PID algorithm to set the position of the robot
		var error = directionSign*(setpoint - location);
		var changeError = error - oldError;
		accumulatedError = error + accumulatedError


		var output = k*error - kD*changeError + kI*accumulatedError;
		oldError = error

		if(output >maxSpeed){

			output = maxSpeed;

		}
		if(output < -255){

			output = -maxSpeed;
		}

		//This function rolls the motors at a heading of 0, with a motor speed of output, for 0.2 seconds.
		await roll(0,output,0.2);

		if(error < 2.0){
			successTimer += 0.1;

		}

		//If the error has been less than 2.0 cm for more than half a second, finish the stage.
		if(successTimer > 0.5){
			stageComplete = true
		}

		await delay(0.025);
		//If our error is less than 1.0 cm, keep track of how long that has been the case.

	}

}

async function JakeStage2(){

//This is a hacky way to quickly do a point turn to 90 degrees.

//This function rolls the motors at a heading of 90, with a motor speed of 50, for 0.1 seconds.
await roll(90,50,0.1)
//...and then this moves it back.
await roll(90,-50,0.1)
}


async function JakeStage3(){

	//Travel for eighty centimeters at a heading of 90 degrees

	let setpoint = 300;
	let k = 2.0;
	let kD = 0.5;
	let kI = 0.001;
	var accumulatedError = 0;
	var oldError = 0;
	var successTimer = 0.0;
	var maxSpeed = 100;
	var directionSign = 1; //-1 for moving left or down, 1 for moving right or up
	stageComplete = false;

	await setMainLed({r:0,g:0,b:255})

	while(stageComplete != true){
		//get the current location of the robot. Note that this uses the x-coordinate this time, not y.
		var location = getLocation().x;

		//Use a PID algorithm to set the position of the robot
		var error = directionSign*(setpoint - location);
		var changeError = error - oldError;
		accumulatedError = error + accumulatedError


		var output = k*error - kD*changeError + kI*accumulatedError;
		oldError = error

		if(output > maxSpeed){

			output = maxSpeed;

		}
		if(output < -maxSpeed){

			output = -maxSpeed;
		}
		//We want all of this to be happening at a heading of 90 degrees

		await roll(90,output,0.2);

		if(error < 2.0){
			successTimer += 0.1;

		}

		//If the error has been less than 2.0 cm for more than half a second, finish the stage.
		if(successTimer > 0.5){
			stageComplete = true
		}

		await delay(0.025);
		//If our error is less than 1.0 cm, keep track of how long that has been the case.

	}

}
async function JadenStage1(){


//This is a hacky way to quickly do a point turn to 90 degrees.

//This function rolls the motors at a heading of 90, with a motor speed of 50, for 0.1 seconds.
await roll(180,50,0.1)
//...and then this moves it back.
await roll(180,-50,0.1)
}

async function JadenStage2(){


	let setpoint = 180;

	let k = 2.0;
	let kD = 0.5;
	let kI = 0.001;
	var accumulatedError = 0;
	var oldError = 0;
	var successTimer = 0.0;
	var maxSpeed = 100;
	var directionSign = -1; //-1 for moving left or down, 1 for moving right or up

	var stageComplete = false;

	//Visual feedback to know which stage we are on
	await setMainLed({r:255,g:0,b:0})

	while(stageComplete != true){
		//get the current location of the robot.
		var location = getLocation().y;

		//Use a PID algorithm to set the position of the robot
		var error = directionSign*(setpoint - location);
		var changeError = error - oldError;
		accumulatedError = error + accumulatedError


		var output = k*error - kD*changeError + kI*accumulatedError;
		oldError = error

		if(output >maxSpeed){

			output = maxSpeed;

		}
		if(output < -255){

			output = -maxSpeed;
		}

		//This function rolls the motors at a heading of 0, with a motor speed of output, for 0.2 seconds.
		await roll(180,output,0.2);

		if(error < 2.0){
			successTimer += 0.1;

		}

		//If the error has been less than 2.0 cm for more than half a second, finish the stage.
		if(successTimer > 0.5){
			stageComplete = true
		}

		await delay(0.025);
		//If our error is less than 1.0 cm, keep track of how long that has been the case.


	}

}

async function JadenStage3(){

//This is a hacky way to quickly do a point turn to 90 degrees.

//This function rolls the motors at a heading of 90, with a motor speed of 50, for 0.1 seconds.
await roll(270,-50,0.1)
//...and then this moves it back.
await roll(270,50,0.1)
}

async function JadenStage4(){

	//Travel for eighty centimeters at a heading of 90 degrees

	let setpoint = 180; //drive for 3 tiles

	let k = 2.0;
	let kD = 0.5;
	let kI = 0.001;
	var accumulatedError = 0;
	var oldError = 0;
	var successTimer = 0.0;
	var maxSpeed = 100;
	var directionSign = -1; //-1 for moving left or down, 1 for moving right or up

	var stageComplete = false;

	//Visual feedback to know which stage we are on
	await setMainLed({r:255,g:0,b:0})

	while(stageComplete != true){
		//get the current location of the robot.
		var location = getLocation().x;

		//Use a PID algorithm to set the position of the robot
		var error = directionSign*(setpoint - location);
		var changeError = error - oldError;
		accumulatedError = error + accumulatedError


		var output = k*error - kD*changeError + kI*accumulatedError;
		oldError = error

		if(output >maxSpeed){

			output = maxSpeed;

		}
		if(output < -255){

			output = -maxSpeed;
		}

		//This function rolls the motors at a heading of 0, with a motor speed of output, for 0.2 seconds.
		await roll(270,output,0.2);

		if(error < 2.0){
			successTimer += 0.1;

		}

		//If the error has been less than 2.0 cm for more than half a second, finish the stage.
		if(successTimer > 0.5){
			stageComplete = true
		}

		await delay(0.025);
		//If our error is less than 1.0 cm, keep track of how long that has been the case.


	}

}

async function TungStage1(){

	//Travel for (???) centimeters at a heading of 90 degrees

	let setpoint = 250; //drive for 1 tiles to the left

	let k = 2.0;
	let kD = 0.5;
	let kI = 0.001;
	var accumulatedError = 0;
	var oldError = 0;
	var successTimer = 0.0;
	var maxSpeed = 100;
	var directionSign = -1; //-1 for moving left or down, 1 for moving right or up

	var stageComplete = false;

	//Visual feedback to know which stage we are on
	await setMainLed({r:255,g:0,b:0})

	while(stageComplete != true){
		//get the current location of the robot.
		var location = getLocation().x;

		//Use a PID algorithm to set the position of the robot
		var error = directionSign*(setpoint - location);
		var changeError = error - oldError;
		accumulatedError = error + accumulatedError


		var output = k*error - kD*changeError + kI*accumulatedError;
		oldError = error

		if(output >maxSpeed){

			output = maxSpeed;

		}
		if(output < -255){

			output = -maxSpeed;
		}

		//This function rolls the motors at a heading of 0, with a motor speed of output, for 0.2 seconds.
		await roll(270,output,0.2);

		if(error < 2.0){
			successTimer += 0.1;

		}

		//If the error has been less than 2.0 cm for more than half a second, finish the stage.
		if(successTimer > 0.5){
			stageComplete = true
		}

		await delay(0.025);
		//If our error is less than 1.0 cm, keep track of how long that has been the case.


	}

}

async function TungStage2(){

//This is a hacky way to quickly do a point turn to 90 degrees.

//This function rolls the motors at a heading of 90, with a motor speed of 50, for 0.1 seconds.
await roll(90,-50,0.1)
//...and then this moves it back.
await roll(270,50,0.1)
}

async function TungStage3(){

	//Travel for (???) centimeters at a heading of 90 degrees

	let setpoint = 0; //drive for 1 tiles downward

	let k = 2.0;
	let kD = 0.5;
	let kI = 0.001;
	var accumulatedError = 0;
	var oldError = 0;
	var successTimer = 0.0;
	var maxSpeed = 100;
	var directionSign = -1; //-1 for moving left or down, 1 for moving right or up

	var stageComplete = false;

	//Visual feedback to know which stage we are on
	await setMainLed({r:255,g:0,b:0})

	while(stageComplete != true){
		//get the current location of the robot.
		var location = getLocation().y;

		//Use a PID algorithm to set the position of the robot
		var error = directionSign*(setpoint - location);
		var changeError = error - oldError;
		accumulatedError = error + accumulatedError


		var output = k*error - kD*changeError + kI*accumulatedError;
		oldError = error

		if(output >maxSpeed){

			output = maxSpeed;

		}
		if(output < -255){

			output = -maxSpeed;
		}

		//This function rolls the motors at a heading of 0, with a motor speed of output, for 0.2 seconds.
		await roll(270,output,0.2);

		if(error < 2.0){
			successTimer += 0.1;

		}

		//If the error has been less than 2.0 cm for more than half a second, finish the stage.
		if(successTimer > 0.5){
			stageComplete = true
		}

		await delay(0.025);
		//If our error is less than 1.0 cm, keep track of how long that has been the case.


	}

}
