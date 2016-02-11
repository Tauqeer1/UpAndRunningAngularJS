/**
 * Created by Tauqeer Ahmed on 2/9/2016.
 */

angular.module('notesApp',[])
    .controller('MainCtrl',[function(){
        var self = this;

        self.submit1 = function(){
            //Create user object and send to the server
            var user = {
                username : self.username,
                password : self.password
            }
            console.log('First form submit with ',user);
        };
        self.submit2 = function(){
            console.log('Second form submit with ',self.user);
        };
    }]);