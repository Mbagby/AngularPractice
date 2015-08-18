var app = angular.module('contactsApp', []);

app.controller("contacts", function($scope){
	$scope.contacts = []

	$scope.addContact = function(){
		var newContact = $scope.contact
		$scope.contacts.push(newContact)
		$scope.contact = {}
	}
})