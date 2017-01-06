const routing = ($stateProvider:any, $urlRouterProvider:any) => {
    $stateProvider
        .state('home', {
            url: '/',
            template: '<app></app>'
        });

    $urlRouterProvider.otherwise('/');
};
routing.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module('app').config(routing);

