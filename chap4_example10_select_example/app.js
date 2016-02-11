/**
 * Created by Tauqeer Ahmed on 2/11/2016.
 */
angular.module('notesApp',[])
    .controller('MainCtrl',[function(){
        var self = this;

        self.countries = [
            {label : 'USA',id : 1},
            {label : 'India',id : 2},
            {label : 'Other',id : 3}
        ];
        self.selectedCountryId = 2;
        self.selectedCountry = self.countries[1];
    }]);