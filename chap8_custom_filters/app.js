/**
 * Created by Tauqeer Ahmed on 3/2/2016.
 */


angular.module('filtersApp', [])
    .controller('MainCtrl', [function () {
        var _self = this;
        _self.startTime = new Date().getTime();
        _self.someTimeAgo = new Date().getTime() - (1000 * 60 * 60 * 40);

    }])
    .filter('timeAgo', [function () {
        var one_minute = 1000 * 60;
        var one_hour = one_minute * 60;
        var one_day = one_hour * 24;
        var one_month = one_day * 30;

        return function (ts) {
            console.log(ts);
            var currentTime = new Date().getTime();
            var diff = currentTime - ts;
            if (diff < one_minute) {
                return 'second ago';
            }
            else if (diff < one_hour) {
                return 'minute ago';
            }
            else if (diff < one_day) {
                return 'hours ago';
            }
            else if (diff < one_month) {
                return 'days ago';
            }
            else {
                return 'months ago';
            }
        };

    }]);