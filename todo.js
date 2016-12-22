var app = angular.module('app', []);
app.controller('todo', function($scope) {

    var todoList = [];

    $scope.todoAdd = function() {

        var todoText = $scope.todoInput;
        todoList.push(todoText);
        $scope.finalList = todoList;
        
    };

$scope.todoclear = function(){
	$scope.finalList = [];
	$scope.todoInput = '';
	
}


    /*$scope.clear = function(){
    	var oldList = $scope.todoList;
    	todoList.pull(todoInput);
    	$scope.finalList = todoList;

    };
    */

});
