app.directive('mainAppNavigation', function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'htmlPartials/mainAppNavigation.html',

        link: function( scope, element, attrs, controller ) {

            scope.toggleMenu = function() {
                var appContainer = document.getElementById('main-app');

                if ( appContainer.classList.contains('slide-in') ) {
                    appContainer.classList.add('slide-out');
                    appContainer.classList.remove('slide-in');
                } else {
                    appContainer.classList.remove('slide-out');
                    appContainer.classList.add('slide-in');
                }
            }
        }
    };
});