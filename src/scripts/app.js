'use strict';

/**
 *  Phonegap initialization
 */
var phonegapApp = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {

        // Wait for PhoneGap to load
        if( document.documentElement.hasOwnProperty('ontouchstart') ) {
            phonegapApp.touchInterface = true;
            document.addEventListener("deviceready", this.onDeviceReady, false);
        } else {
            // The browser has no touch capabilities
            phonegapApp.touchInterface = false;
            document.addEventListener('DOMContentLoaded', function () {
                phonegapApp.receivedEvent('deviceready');
            });
        }
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'phonegapApp.receivedEvent(...);'
    onDeviceReady: function() {
        phonegapApp.receivedEvent('deviceready');

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        switch( id ) {
            case 'deviceready':
                break;
        }
    }
};

var app = angular.module('App', ['hmTouchEvents'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', { templateUrl: 'htmlPartials/Home.html', controller: 'HomeController' })
            // NOTE : this redirect solves the problem with ios not recognizing index.html as /
            .otherwise({redirectTo: '/'});
}]);