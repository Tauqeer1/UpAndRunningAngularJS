/**
 * Created by Tauqeer Ahmed on 2/9/2016.
 */

angular.module('notesApp',[])
    .controller('MainCtrl',[function(){
        var self = this;

        self.submit = function(){

            console.log('user clicked submit with ',self.user );
        }
    }]);