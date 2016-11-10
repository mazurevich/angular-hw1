/**
 * Created by Andrey_Mazurevich on 11/9/2016.
 */
(function () {
    "use strict";

    angular.module("app")
        .controller("MainController", MainController);

    function MainController(model, todoService) {
        let $ctrl = this;
        $ctrl.todo = model;

        $ctrl.incompleteCount = todoService.incompleteCount;
        $ctrl.warningLevel = todoService.warningLevel;
    }

    MainController.$inject = ['model', 'todoService'];
})();