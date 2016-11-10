/**
 * Created by Andrey_Mazurevich on 11/9/2016.
 */
(function () {
    "use strict";

    angular
        .module('app')
        .directive('main', mainDirective);

    function mainDirective() {
        return {
            templateUrl: '/main/main.html',
        }
    }
})();