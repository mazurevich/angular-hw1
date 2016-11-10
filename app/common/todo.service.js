/**
 * Created by Andrey_Mazurevich on 11/9/2016.
 */
(function () {
    "use strict";

    angular
        .module('app')
        .factory('todoService', todoService);

    function todoService(model) {
        // API
        return {
            addNewItem,
            incompleteCount,
            warningLevel,
            removeItem,
            toggleEditing,
            removeAllCompleted
        };

        // IMPL
        function addNewItem(newItem) {
            const items = model.items
            if (newItem && newItem.action) {
                items.push(Object.assign({done: false}, newItem));

                resetFields(newItem)
            }
        }

        function incompleteCount(items) {
            let count = 0;

            angular.forEach(items, (item) => {
                if (!item.done)
                    count++;
            });

            return count;
        }

        function warningLevel(items) {
            return incompleteCount(items) < 3
                ? "label-success"
                : "label-warning";
        }

        function removeAllCompleted() {
            model.items = model.items.filter(i=>i.done === false);
        }

        function removeItem(item) {
            const index = model.items.indexOf(item);
            if (index > -1)
                model.items.splice(index, 1);
        }

        function toggleEditing(item) {
            item.isEditing = !item.isEditing;
        }

        function resetFields(newItem) {
            newItem.action = '';
            newItem.deadline = null;
            newItem.responsible = '';
            newItem.estimateHours = null;
        }
    }

    todoService.$inject = ['model'];
})();