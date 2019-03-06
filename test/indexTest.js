const assert = require("chai").assert;
var should = require('chai').should();
var fileManager     = require("../resources/fileManager.js");
var plateau 		= require("../resources/plateau.js");
var rover    		= require("../resources/rovers.js");

describe('Index', function(){
	var content = fileManager.readFile(true);
	content 	= content.split('\n');

	it('The file should contain 5 lines of information', function(){
		assert.lengthOf(content, 5); 
	})
    
    //Create plateau
	it('Plateau has been created sucessfully', function(){ 
		var plateauBoundaries = content[0].split(" "); 
		plateau.validateBoundaries(plateauBoundaries[0], plateauBoundaries[1]);
		var plateauCreated = plateau.createPlateau(plateauBoundaries[0], plateauBoundaries[1]);
		assert.isOk(plateauCreated, 'this will fail');
	})
 
	//Creating the rovers
	it('Rovers created sucessfully', function(){
		var rovers = rover.createRovers(content);
		assert.lengthOf(rovers, 2); 
	})

	//Explore 
	it('Rovers have explored the plateau sucessfully', function(){
		var rovers = rover.createRovers(content); 
	    var result = rover.explorePlateau(plateau, rovers);
		assert.isOk(rovers, 'this will fail');
	})
});