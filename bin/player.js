var Player = function (name){
		this.name = name
		this.alive = true
		this.health = 100
		this.location = ['0','0'] //first index is y coordinate, second is x
		this.inventory = ['dagger','compass']
	}
Player.prototype.move = function(direction){
		if (direction == 'north'){
			display("You went North")
		}
		else if (direction == 'east'){
			display("You went East")
		}
		else if (direction == 'south'){
			display("You went South")
		}
		else if ( direction == 'west'){
			display("You went West")
		}
		else{
			display("You didn't go anywhere.")
		}
	}