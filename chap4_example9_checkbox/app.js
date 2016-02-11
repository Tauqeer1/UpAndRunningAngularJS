/**
 * Created by Tauqeer Ahmed on 2/10/2016.
 */
angular.module('notesApp',[])
    .controller('MainCtrl',[function(){
        var self = this;

        self.sports = [
            {label : 'BasketBall',selected : 'YES'},
            {label : 'Cricket',selected : 'NO'},
            {label : 'Soccer',selected : 'NO'},
            {label : 'Swimming',selected : 'YES'}
        ];

    }]);