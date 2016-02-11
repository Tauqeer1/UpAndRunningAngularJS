/**
 * Created by Tauqeer Ahmed on 2/10/2016.
 */
angular.module('notesApp',[])
    .controller('MainCtrl',[function(){
        var self = this;
        self.submit = function(){
            console.log('User clicked submit with ',self.user);
        };
    }]);