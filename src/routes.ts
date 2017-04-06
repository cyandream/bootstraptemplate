

/** @ngInject */
export default function routesConfig(
  $stateProvider: angular.ui.IStateProvider,
  $urlRouterProvider: angular.ui.IUrlRouterProvider,
  $locationProvider: angular.ILocationProvider
) {

  //$locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider
    .otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app',
      data: {
        unsecure: true
      }
    })
    .state('template1', {
      url: '/template1',
      component: 'template1'
    })
    .state('template2', {
      url: '/template2',
      component: 'template2'
    })
    .state('template3', {
      url: '/template3',
      component: 'template3'
    })
    .state('template4', {
      url: '/template4',
      component: 'template4'
    })
    .state('template5', {
      url: '/template5',
      component: 'template5'
    })
    .state('template6', {
      url: '/template6',
      component: 'template6'
    })
        .state('template7', {
      url: '/template7',
      component: 'template7'
    });
}
