var plateauOb = require("./plateau.js");
var roverOb   = require("./rovers.js");

function explorePlateau(){

	var fs = require('fs');

	if (process.argv.length !== 3) {
	    console.error('One more argument is required. (Ex. node test.js input.txt)');
	    process.exit(1);
	}

	var input = process.argv[2];
	var output = "output.txt";
	
	if (!fs.existsSync(input)) {

	    console.error('The input file: "' + input + '" does not exist.');
	    
	}else { 
		// Read the entire file creating an array of *****
		fs.readFile(input, 'utf-8', function (err, content) {
		    if (err) throw err;
 			
			var lines = content.split('\n');

			//Splitting the variables
			var plateauBoundaries = lines[0].split(" ");
			//Defining plateau
			var plateau  		  = plateauOb.createPlateau(plateauBoundaries[0], plateauBoundaries[1]);
			//Initializing rovers
			var rovers = roverOb.createRovers(lines);
			roverOb.explorePlateau(plateau, rovers);
 		
		    fs.writeFile(output, "asd", function (err) {
		        if (err) throw err;
		    });
		});
	}
}

explorePlateau();