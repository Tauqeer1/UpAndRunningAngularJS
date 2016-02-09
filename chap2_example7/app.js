/**
 * Created by Tauqeer Ahmed on 2/9/2016.
 */

angular.module('notesApp',[])
    .controller('MainCtrl',[function(){
        var self = this;
        //the variable which is declared with var in the controller can not access in the view
        var notes = [
            {id : 1 , label : 'First note', done : false,someRandom : 31431},
            {id : 2 , label : 'Second note' , done : false},
            {id : 3 , label : 'Finished Third note' , done : true}
        ];
        //Both notes1 and notes2 array are identical in all respect
        self.notes1 = angular.copy(notes);
        self.notes2 = angular.copy(notes);
        self.changesNotes = function(){
            notes = [
                {id : 1 , label : 'Change first note',done : false,someRandom : 4242},
                {id : 2 , label : 'Change Second note',done : false},
                {id : 3 , label : 'Finished third note',done : true}
            ];
            self.notes1 = angular.copy(notes);
            self.notes2 = angular.copy(notes);
        }
    }]);