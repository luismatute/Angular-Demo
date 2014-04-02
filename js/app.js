var todoApp = angular.module('todoApp', []);

todoApp.controller('TodoController', function($scope, $http) {
    function todo_proto () {
        this.id = '';
        this.title = '';
        this.completed = false;
    }

    $scope.todos = [];
    $scope.addTodo = function(title) {
        var todo = new todo_proto();
        todo.id = new Date().getTime();
        todo.title = title;
        $scope.newTodoTitle = '';
        $scope.todos.push(todo);
    };

    $scope.changeStatus = function (todo) {
        for (var i = 0; i < $scope.todos.length; i++) {
            if ( $scope.todos[i].id === todo.id ) {
                $scope.todos[i].completed = !$scope.todos[i].completed;
                break;
            }
        }
    };

    $scope.removeCompletedItems = function() {
        var completed_todos = [];
        for (var i = 0; i < $scope.todos.length; i++) {
            if ( $scope.todos[i].completed === true ) {
                completed_todos.push($scope.todos[i]);
            }
        };

        completed_todos.forEach(function(t) { deleteTodo(t); });
    };

    function deleteTodo(todo) {
        // Getting the index of the todo passed for deletion
        var index = $scope.todos.indexOf($scope.todos.filter(function(t) {
            return t.id === todo.id;
        })[0]);
        if (index !== -1) {
            $scope.todos.splice(index, 1);
        }
    }

});