module.exports = {

  Rover: function(x, y, orientation, instructions) {
    this.x = x;
    this.y = y;
    this.orientation  = orientation;
    this.instructions = instructions;

    this.getStatus = function() {

      console.log("This is my status : x: " + this.x + " ; y: " + this. y + ", and I am looking to the " + this.orientation);

    };

    return this;
  }, // Creating the rovers
  createRovers: function(input){
    var rovers = [];
    for (var i = 1; i < input.length; i=i+2) {
      var position     = input[i].split(" "); 
      rovers.push( new this.Rover(position[0], position[1], position[2], input[i+1])); 
    } 

    return rovers; 

  }, //It's time to go send some information back to Earth! Navigating the plateau.
  explorePlateau: function(plateau, rovers){
    console.log(rovers);

  }
    
}