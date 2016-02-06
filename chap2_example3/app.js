/**
 * Created by Tauqeer Ahmed on 2/7/2016.
 */

angular.module('notesApp',[])
    .controller('mainCtrl',[function(){
        var self = this;

        self.notes = [
            {id : 1 , label : 'First Note' , done : false},
            {id : 2 , label : 'Second Note', done : false},
            {id : 3 , label : 'Third Note', done : true},
            {id : 4 , label : 'Fourth Note', done : true}
        ]

    }]);