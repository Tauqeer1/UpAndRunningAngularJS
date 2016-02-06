/**
 * Created by Tauqeer Ahmed on 2/7/2016.
 */


angular.module('notesApp',[])
    .controller('mainCtrl',[function(){
        var self = this;
        self.message = 'Hello';
        self.changeMessage = function(){
            self.message = 'Good bye';
        };
    }]);