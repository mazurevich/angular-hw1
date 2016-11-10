/**
 * Created by Andrey_Mazurevich on 11/9/2016.
 */
(function () {
    "use strict";

    angular.module("app")
        .controller("TaskFormController", TaskFormController);

    function TaskFormController(todoService) {
        let $ctrl = this;

        $ctrl.addNewItem = todoService.addNewItem;
    }

    TaskFormController.$inject = ['todoService']
})();