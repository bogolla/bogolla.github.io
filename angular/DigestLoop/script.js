/**
 * Created by superadmin on 7/28/15.
 */
angular.module('demo', []).controller('DemoController', function($scope, $timeout) {
    $scope.x = 1;
    $scope.$watch('x', function(newX) {
        $scope.y = '' + newX + newX;
    });
    $scope.fn1 = function() {
        $scope.x++;
        $timeout(function() {
            log($scope.x, $scope.y);
        });
    };
    $scope.fn2 = function() {
        $scope.x++;
        $scope.$evalAsync(function() {
            log($scope.x, $scope.y);
        });
    };

    $scope.log = '';

    function log() {
        $scope.log += Array.prototype.join.call(arguments, '; ') + "\n";
    }
});