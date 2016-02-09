/**
 * Created by Tauqeer Ahmed on 2/9/2016.
 */

angular.module('notesApp',[])
    .controller('MainCtrl',[function(){
        var self = this;
        self.notes = [
            {id : 1, label : 'First Note', done : false},
            {id : 2, label : 'Second Note', done : false},
            {id : 3, label : 'Finished Third Note', done : true}
        ];
    }]);