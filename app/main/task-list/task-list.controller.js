/**
 * Created by Andrey_Mazurevich on 11/9/2016.
 */
(function () {
    "use strict";

    angular.module("app")
        .controller("TaskListController", TaskListController);

    function TaskListController($scope, model, todoService) {
        let $ctrl = this;
        $ctrl.showComplete = true;
        $ctrl.now = Date.now();

        $ctrl.showRemoveCompleted = hasCompleted()
        $scope.$watch('tasksCtrl.todo.items', function () {
            $ctrl.showRemoveCompleted = hasCompleted()
        }, true);

        $ctrl.todo = model;
        // $ctrl.showComplete = true;

        $ctrl.toggleEditing = todoService.toggleEditing;
        $ctrl.warningLevel = todoService.warningLevel;
        $ctrl.removeItem = todoService.removeItem;
        $ctrl.removeAllCompleted = todoService.removeAllCompleted;

        function hasCompleted() {
            return model.items.filter(i=>i.done).length>0;
        }

    }
    TaskListController.$inject= ['$scope', 'model', 'todoService'];

})();