(function () {
    "use strict";

    angular.module('app')
        .factory('LocalStorageService', localStorageService);


    localStorageService.$inject = ['$window'];
    function localStorageService($window) {
        return {
            getObject
        };

        function getObject(key) {
            const serialized = $window.localStorage.getItem(key);
            if (serialized == null)
                throw new Error('key was not found');
            return JSON.parse(serialized);
        }

        function setObject(key, object) {
            if (object == null)
                throw new Error('object was not provided');
            const objectStr = JSON.stringify(object);
            $window.localStorage.setItem(key, objectStr);
        }
    }
})();