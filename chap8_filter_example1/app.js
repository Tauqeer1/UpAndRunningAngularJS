/**
 * Created by Tauqeer Ahmed on 2/29/2016.
 */

angular.module('filterApp',[])
    .controller('MainCtrl',[function(){
        var _self = this;
        _self.amount = 1024;
        _self.totalCost = 4906;
        _self.name = "Tauqeer";
        _self.startTime = new Date().getTime();
    }]);