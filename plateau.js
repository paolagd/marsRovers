module.exports = {

	createPlateau: function(x, y) {

		this.x = x;
	  	this.y = y; 
		return this;
		
	},
	checkPlateauLimits: function(x, y, plateau){

		if (plateau.x > x){
			console.error('Te saliste del campo');
	        process.exit(1); 
		}else if (plateau.y > y){
			console.error('Te saliste del campo');
	        process.exit(1); 
		}

	}

}