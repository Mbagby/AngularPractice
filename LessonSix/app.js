var app = angular.module("lessonSix", []);
app.controller("controllerSix", function($scope){
    $scope.pickRandomNumber = function(){
    	$scope.number = Math.floor(Math.random() * 10) + 1
	}
	$scope.word = ""
	$scope.wordReverser = function(){
		$scope.reversedWord = $scope.word.split('').reverse().join('');
	}
})

