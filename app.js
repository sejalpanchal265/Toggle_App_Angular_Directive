var myModule = angular.module('myModule', []);

myModule.directive('startstop', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
           var statuses = JSON.parse(attrs.statuses);
           var cnt = 0;
            elem.html(statuses[cnt++]);
           elem.bind("click", function () {
               elem.html(statuses[cnt]);
               cnt = (++cnt) % statuses.length;
               
            });
        }
    }
});
