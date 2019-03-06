var plateauOb 		= require("./resources/plateau.js");
var roverOb   		= require("./resources/rovers.js");
var fileManager     = require("./resources/fileManager.js");

function main(){
	 
	var content = fileManager.readFile();  
	var lines   = content.split('\n');
	//Splitting the variables
	var plateauBoundaries = lines[0].split(" ");
	//Defining plateau
	var plateau  		  = plateauOb.createPlateau(plateauBoundaries[0], plateauBoundaries[1]);
	//Initializing rovers
	var rovers 			  = roverOb.createRovers(lines);
	//Navigating plateau
	roverOb.explorePlateau(plateau, rovers);

	console.log( "WOHO! The rovers have successfully navigated the plateau! These are the final coordinates: \n Rover 1: " + rovers[0].x + " " + rovers[0].y + " " + rovers[0].orientation + "\n Rover 2: " + rovers[1].x + " " + rovers[1].y + " " + rovers[1].orientation );
	
	fileManager.writeFile(rovers);
    
}

main();