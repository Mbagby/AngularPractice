var app = angular.module("pingPong", []);
app.controller("scoreKeeper", function($scope){
	$scope.playerOne= 0;
    $scope.playerTwo= 0;
    $scope.points= 0;
	$scope.addPointPlayerOne= function(){
		$scope.playerOne+= 1;
		$scope.points+= 1;
	}
    $scope.addPointPlayerTwo= function(){
    	$scope.playerTwo+= 1;
    	$scope.points+= 1;
    }
    $scope.reset = function(){
    	$scope.playerOne= 0;
    	$scope.playerTwo= 0;
    	$scope.points= 0;
	}
})
