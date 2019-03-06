module.exports = {

	createPlateau: function(x, y) {

		this.x = parseInt(x);
	  	this.y = parseInt(y); 
		return this;

	},
	validateBoundaries: function(x, y){

		if ( x == null || y == null){ 
			console.error('Wrong plateau information');
	        process.exit(1); 
		} 
		
	},
	checkPlateauLimits: function(plateau, x, y){

		if (plateau.x < x || plateau.y < y || y < 0 || x < 0 ){ 
			console.error('The rover cannot move further.');
	        process.exit(1); 
		} 
		
	}

}