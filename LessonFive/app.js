var app = angular.module("lessonFive", []);
app.controller("people", function($scope){
    $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
    $scope.symbols = ["&spades;", "&clubs;" , "&hearts;", "&diams;"];
    $scope.duplicates= [1,2,3,4,4,6,7];
})
