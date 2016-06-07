
	angular.module('dungy',[])
	.controller('worldController', worldController)
	.controller('playerController', playerController)

	function World(){
		world = this

	}
	function display(){
		for(var i = 0; i < arguments.length; i++){
			console.log(arguments[i])
		}
	}

	var Player = function (name){
		this.name = name
		this.alive = true
		this.health = 100
		this.location = [0,0] //first index is y coordinate, second is x
		this.inventory = ['dagger','compass']
	}
	Player.prototype.move = function(player, direction){
		if (direction == 'north'){
			display("You went North")
			console.log(Player)
			player.location[0] += 1
		}
		else if (direction == 'east'){
			display("You went East")
			Player.location[1] += 1
		}
		else if (direction == 'south'){
			display("You went South")
			Player.location[0] -= 1
		}
		else if ( direction == 'west'){
			display("You went West")
			Player.location[1] -= 1

		}
		else{
			display("You didn't go anywhere.")
		}
	}

	function worldController(){

	}

	function playerController(player){
		playerCtrl = this
		playerCtrl.move = function(player,direction){
			player.move(player, direction)
		}
		


	}
	var player = new Player(player)


