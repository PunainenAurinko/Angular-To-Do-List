var todoApp = angular.module('todoList', []);
todoApp.controller('todoListController', ['$scope', function ($scope) {

    $scope.name = 'to-do list';

    $scope.tasks = [
        {
            'title': 'Learn some stuff',
            'done': false
        },
        {
            'title': 'Code some stuff',
            'done': false
        },
        {
            'title': 'Code some more',
            'done': false
        }
            ];

    $scope.addTask = function () {

        $scope.tasks.push({
            'title': $scope.newTask,
            'done': false
        });

        $scope.newTask = '';
    }

    $scope.clearCompletedTasks = function () {
        $scope.tasks = $scope.tasks.filter(function (item) {
            return !item.done;
        })
    }

    $scope.deleteTask = function (item) {
        var index = $scope.tasks.indexOf(item);
        $scope.tasks.splice(index, 1);
    }

}]);