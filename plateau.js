module.exports = {

	createPlateau: function(x, y) {

		this.x = x;
	  	this.y = y; 
		return this;

	},
	checkPlateauLimits: function(plateau, x, y){

		if (plateau.x < x || plateau.y < y){ 
			console.error('The rover cannot move further.');
	        process.exit(1); 
		} 
		
	}

}