/**
 * Created by Tauqeer Ahmed on 2/29/2016.
 */

angular.module('filtersApp', [])
    .controller('MainCtrl', [function () {
        var _self = this;
        //Array
        _self.notes = [
            {label: 'FC todo', type: 'chore', done: false},
            {label: 'FT todo', type: 'task', done: false},
            {label: 'FF todo', type: 'fun', done: true},
            {label: 'SC todo', type: 'chore', done: false},
            {label: 'ST todo', type: 'task', done: true},
            {label: 'SF todo', type: 'fun', done: true},
            {label: 'TC todo', type: 'chore', done: false},
            {label: 'TT todo', type: 'task', done: false},
            {label: 'TF todo', type: 'fun', done: false}
        ];
        //Array
        _self.sortOrder = ['type', 'label'];
        _self.filterOptions = {
            "string": '',
            "object": {done: false, label: 'C'},
            "function": function (note) {
                return note.type === 'task' && note.done === false; //return true or false
            }
        };
        _self.currentFilter = 'string';
    }]);