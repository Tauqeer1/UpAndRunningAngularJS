/**
 * Created by Tauqeer Ahmed on 2/9/2016.
 */


angular.module('notesApp',[])
    .controller('MainCtrl',[function(){
        var self = this;
        self.change = function(){
            self.username = 'changed';
            self.password = 'password';
        };
        self.submit = function(){
          console.log('User clicked submit with ',self.username,self.password);
        };
    }]);