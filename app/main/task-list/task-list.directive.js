/**
 * Created by Andrey_Mazurevich on 11/9/2016.
 */
(function () {
    "use strict";

    angular
        .module('app')
        .directive('taskList', taskList);

    function taskList() {
        return {
            templateUrl: "/main/task-list/task-list.html"
        };
    }
})();