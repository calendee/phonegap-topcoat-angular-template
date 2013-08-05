app.controller('MenuAndNavController', ['$scope', function($scope) {

    $scope.menuShown = false;

    $scope.toggleMenu = function() {
        $scope.menuShown = !$scope.menuShown;
    }
}]);