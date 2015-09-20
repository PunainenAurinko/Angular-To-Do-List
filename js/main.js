//Codepen:
//http://codepen.io/tonk0006/pen/JYKdeK

//GitHub page:
//http://tonk0006.github.io/Angular-To-Do-List/index.html

//GitHub project files:
//https://github.com/tonk0006/Angular-To-Do-List

// APP CONTROLLER

var todoApp = angular.module('todoList', []);
todoApp.controller('todoListController', ['$scope', function ($scope) {

    $scope.name = 'to-do list';
        
    // DEFAULT LIST ITEMS
    
    $scope.items = [
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
    
    // ADD ITEMS TO THE LIST
    
    $scope.addItem = function () {

        $scope.items.push({
            'title': $scope.newItem,
            'done': false
        });

        $scope.newItem = '';
    }

    // CLEAR COMPLETD ITEMS
    
    $scope.clearCompleted = function () {
        $scope.items = $scope.items.filter(function (listItem) {
            return !listItem.done;
        })
    }

    // DELETE AN ITEM FROM THE LIST
    
    $scope.deleteItem = function (index) {
        $scope.items.splice(index, 1);
    }
    
}]);