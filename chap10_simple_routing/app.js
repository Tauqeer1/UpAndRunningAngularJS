/**
 * Created by Tauqeer Ahmed on 3/2/2016.
 */


angular.module('routingApp',['ngRoute'])
    .config(['$routeProvider',function($routeProvider){

        $routeProvider.when('/',{
            template : '<h5>This is default route</h5>'
        })
            .when('/second',{
                template : '<h5>This is second route</h5>'
            })
            .otherwise({redirectTo : '/'})
    }]);