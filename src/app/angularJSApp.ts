import * as angular from "angular";


export const module = angular.module('AngularJS', ['ui.router']);

module.config(($locationProvider, $stateProvider) => {

  $locationProvider.html5Mode(true);

  $stateProvider.state('angularJS', {
    url: '/angularJS',
    templateUrl: './components/angularJS/angularJS.html',
    controller: 'AngularJSCTRL',
  });

  $stateProvider.state('angular', {
    url: '/angular',
    template: ''
  });
})

  .controller('AngularJSCTRL', function ($location, $scope) {

    if ($location.search().hasOwnProperty('paramsAngular')) {
      let myValue = $location.search()['paramsAngular'];
      $scope.inputJS = myValue;
    }
    $scope.change = function () {
      if ($scope.inputJS)
        $location.url('angular' + '?paramsJS=' + $scope.inputJS);
      else {
        $location.url('angular');
      }
    };
  });
