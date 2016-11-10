/**
 * Created by Andrey_Mazurevich on 11/9/2016.
 */
(function () {
    "use strict";

    angular
        .module('app')
        .directive('taskForm', taskForm);

    function taskForm() {
        return {
            templateUrl: "/main/task-form/task-form.html"
        };
    }
})();