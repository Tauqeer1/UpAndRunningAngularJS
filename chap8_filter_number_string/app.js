/**
 * Created by Tauqeer Ahmed on 2/29/2016.
 */

angular.module('filtersApp',[])
    .controller('MainCtrl',[function(){
        var _self = this;

        _self.amount = 1024;
        _self.name = "Tauqeer";
        _self.obj = {test : 'value' , num : 123};
        _self.startTime = new Date().getTime();
    }]);