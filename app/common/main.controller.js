/**
 * Created by Andrey_Mazurevich on 11/9/2016.
 */
(function () {
    "use strict";

    angular.module("app")
        .controller("MainController", MainController);

    MainController.$inject = ['model', 'todoService', 'rankService'];
    function MainController(model, todoService, rankService) {
        let $ctrl = this;
        $ctrl.todo = model;

        $ctrl.incompleteCount = todoService.incompleteCount;
        $ctrl.warningLevel = todoService.warningLevel;

        console.log(rankService.getStars(100));
        console.log(rankService.getStars(200));
        console.log(rankService.getStars(500));
        console.log(rankService.getStars(1000));
        console.log(rankService.getStars(300));
    }


})();