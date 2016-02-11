/**
 * Created by Tauqeer Ahmed on 2/11/2016.
 */
angular.module('notesApp', [])
    .controller('MainCtrl', [function () {
        var self = this;
        self.tab = 'first';
        self.open = function (tab) {
            self.tab = tab;
        };
    }])
    .controller('SubCtrl', ['ItemService', function (ItemService) {
        var self = this;
        //Controller own variable self.list
        self.list = function () {
            //Calling ItemService.list() method from ItemService and return the length of list
            return ItemService.list();
        };
        self.add = function () {
            ItemService.add({
                id: self.list().length + 1,
                label: 'Item ' + self.list().length
            });
        };
    }])
    //Creating a service function using factory
    .factory('ItemService', [function () {
        var items = [
            {id: 1, label: 'Item 0'},
            {id: 2, label: 'Item 1'}
        ];
        return {
            list: function () {
                return items;
            },
            add: function (item) {
                items.push(item);
            }
        };
    }]);