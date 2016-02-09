/**
 * Created by Tauqeer Ahmed on 2/9/2016.
 */

angular.module('notesApp',[])
    .controller('MainCtrl',[function(){
        var self = this;
        self.notes = [
            {label : 'First Note',done : true,assignee : 'Shyam'},
            {label : 'Second Note',done : false , assignee: "abc"},
            {label : 'Done Note',done : true,assignee : "def"},
            {label : 'Last Note',done : true , assignee : 'Brad'}
        ];
        self.getNoteClass = function(status){
            return {
                done : status,  //false
                pending : !status   //true
            };
        };
    }]);