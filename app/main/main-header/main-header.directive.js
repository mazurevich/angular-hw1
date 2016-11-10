/**
 * Created by Andrey_Mazurevich on 11/9/2016.
 */
(function () {
    "use strict";

    angular
        .module('app')
        .directive('mainHeader', headerDirective);

    function headerDirective() {
        return {
            templateUrl: '/main/main-header/main-header.html',
            restricted: 'AE'
        }
    }
})();