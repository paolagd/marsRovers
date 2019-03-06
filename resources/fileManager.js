'use strict';

module.exports = {

	readFile: function() {

		var content;
		var fs = require('fs');

		if (process.argv.length !== 3) {
		    console.error('One more argument is required. (Ex. node test.js input.txt)');
		    process.exit(1);
		}

		var input = process.argv[2]; 

		if (!fs.existsSync(input)) {

		    console.error('The input file: "' + input + '" does not exist.');
		    
		}else {  
			content = fs.readFileSync(input, 'utf8'); 

			var lines   = content.split('\n');
			if (lines.length != 5) {
				console.error('The input file does not have the right format');
		        process.exit(1);
			}
			
		    return content;

		}

	},
	writeFile: function(rovers){

		var output = "output.txt";	
		var fs = require('fs');
		var finalRovers = "";  

        for (var i = 0; i < rovers.length; i++ ) {
        	finalRovers = finalRovers + rovers[i].x + " " + rovers[i].y +  " " + rovers[i].orientation + "\r\n";	      
	    } 

		fs.writeFile(output, finalRovers, function (err) {
	        if (err) throw err;

	    }); 
	}

}