/**
 * Created by Tauqeer Ahmed on 2/9/2016.
 */

angular.module('notesApp',[])
    .controller('MainCtrl',[function(){
        var self = this;

        self.notes = {
            shyam : {id : 1 , label : 'First Note' , done : false},
            Misko : {id : 3 , label : 'Finished third note' , done : true},
            brad : { id : 2 , label : 'Second Note',done : false }
        };

    }]);