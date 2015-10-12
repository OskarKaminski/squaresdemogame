angular.module('app.places', ['ionic', 'ok-filters']).config(function($stateProvider){

    $stateProvider.state('app.places', {
        url: '/places',
        views: {
            'body': {
                templateUrl: 'modules/places/places.html',
                controller: 'PlacesCtrl'
            }
        }
    }).state('app.place', {
        url: '/place/:id',
        views: {
            'body': {
                templateUrl: 'modules/places/place.html',
                controller: 'ReservationsCtrl'
            }
        }
    });
});
