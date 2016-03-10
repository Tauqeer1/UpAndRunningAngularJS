/**
 * Created by Tauqeer Ahmed on 2/27/2016.
 */

angular.module('notesApp',[])
    .controller('MainCtrl',['$http',function($http){

        var _self = this;
        _self.items = [];
        $http.get('/api/note').then(function(response){
            _self.items = response.data;
        },function(errResponse){
            console.error('Error while fetching');
        });
    }]);