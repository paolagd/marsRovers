module.exports = {

  Rover: function(x, y, orientation, instructions) {

    this.x = parseInt(x);
    this.y = parseInt(y);
    this.orientation  = orientation;
    this.instructions = instructions;

    this.moveUp = function(y) {
      this.y = y + 1;
    };

    this.moveDown = function(y) {
      this.y = y - 1;
    };

    this.moveLeft = function(x) { 
      this.x = x - 1;
    };

    this.moveRight = function(x) {
      this.x = x + 1;
    };

    return this;

  }, // Creating the rovers
  createRovers: function(input){
    var rovers = [];
    for (var i = 1; i < input.length; i = i + 2 ) {
      var position     = input[i].split(" "); 
      
      if (position[0] == null || position[1] == null || position[2]  == null || input[i+1] == null){
        console.error('There is information missing, unable to deploy the rovers');
        process.exit(1);  
      }

      rovers.push( new this.Rover(position[0], position[1], position[2], input[i+1])); 
    } 

    return rovers; 

  }, //It's time to go send some information back to Earth! Navigating the plateau.
  explorePlateau: function(plateau, rovers){

    var cardinals = ['N','E','S','W'];

    for (var i = 0; i < rovers.length; i++) {
 
      var instructions = rovers[i].instructions;
      var newOrientation;
 
      instructions = instructions.split("");

      for (var e = 0; e < instructions.length; e++) { 
          
        if (instructions[e] == "L") {   

          if (rovers[i].orientation == "N") rovers[i].orientation = "W";
          else{
            newOrientation     = cardinals.indexOf(rovers[i].orientation);
            rovers[i].orientation  = cardinals[newOrientation - 1]; 
          } 
  
        }else if (instructions[e] == "R"){  

          if (rovers[i].orientation == "W") rovers[i].orientation = "N";
          else{
            newOrientation     = cardinals.indexOf(rovers[i].orientation);
            rovers[i].orientation  = cardinals[newOrientation + 1]; 
          } 
 
        }else if (instructions[e] == "M"){ 
  
          if(rovers[i].orientation == "N"){

            this.validateMovement(plateau, i, rovers, rovers[i].x, rovers[i].y+1);
            rovers[i].moveUp(rovers[i].y);

          }else if (rovers[i].orientation == "S"){

            this.validateMovement(plateau, i, rovers,  rovers[i].x, rovers[i].y-1);
            rovers[i].moveDown(rovers[i].y);

          }else if (rovers[i].orientation == "E"){

            this.validateMovement(plateau, i, rovers,  rovers[i].x+1, rovers[i].y);
            rovers[i].moveRight(rovers[i].x);

          }else if (rovers[i].orientation == "W"){

            this.validateMovement(plateau, i, rovers,  rovers[i].x-1, rovers[i].y);
            rovers[i].moveLeft(rovers[i].x); 

          }  
 
        } 
 
      }   

    } 

  },
  validateMovement: function(plateau, roverI, rovers, x, y){
    plateau.checkPlateauLimits(plateau, x, y);
    this.checkCollision(roverI, rovers, x, y);

  },
  checkCollision: function(roverI, rovers, x, y){
    if(roverI == 0)  

      if (rovers[1].x == x && rovers[1].y == y) {
        console.error('The rovers are stuck, if the rovers move there will be a collision.');
        process.exit(1); 
      } 
    else 

      if (rovers[0].x == x && rovers[0].y == y) {
        console.error('The rovers are stuck, if the rovers move there will be a collision.');
        process.exit(1); 
      }  
  }

    
}