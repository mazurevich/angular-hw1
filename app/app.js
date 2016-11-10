(function () {
    "use strict";

    angular.module("app", ["ngSanitize"])
        .run(runApp)
        .value("model", {
            "user": "Vitaliy",
            "userPhoto": "images/VZ.jpg"
        });

    function runApp($http, model) {
        $http
            .get("todo.json")
            .then((response) => {
                model.items = response.data.map(
                    item=> {
                        item.deadline = new Date(item.deadline);
                        return item
                    })
            });
    }
    runApp.$inject = ['$http', 'model'];

    angular.element(document).ready(() => {
        angular.bootstrap(document, ["app"]);
    });

})();