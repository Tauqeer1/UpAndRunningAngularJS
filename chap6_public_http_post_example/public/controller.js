/**
 * Created by Tauqeer Ahmed on 2/27/2016.
 */


angular.module('notesApp', [])
    .controller('MainCtrl', ['$http', function ($http) {
        var _self = this;
        _self.items = [];
        //_self.newTodo = {};
        var fetchTodos = function () {
            return $http.get('/api/note').then(
                function (response) {
                    _self.items = response.data;
                }, function (errResponse) {
                    console.error('Error while fetching data');
                }
            );
        };
        fetchTodos();   //Call only for the first time when controller loaded

        _self.add = function () {
            $http.post('/api/note', _self.newTodo).then(fetchTodos).then(function (response) {
                _self.newTodo = {};
            });
        };
    }]);