(function () {
    'use strict';
  
    angular.module('lunchCheckApp', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {

      $scope.food = 'List comma separated dishes you usually have for lunch';
      $scope.result = '';
      $scope.messageStyle = {};
      $scope.messageClass = '';

      $scope.displayResult = function () {
        var totalFood = checkHowmuchFood($scope.food);
        $scope.result = totalFood;
      };
  
      function checkHowmuchFood(str) {
        const totalDishes = str.split(',').map(item => item.trim()).filter(item => item !== '');
  
        if ($scope.food === '') {
          return 'Please enter data first';
        } else if (totalDishes.length <= 3) {
          return 'Enjoy!';
        } else {
          return 'Too much!';
        }
      }
  
      $scope.getStyle = function (message) {
        if (message === 'Enjoy!' || message === 'Too much!') {
          return { 'color': 'green' };
        } else if (message === 'Please enter data first') {
          return { 'color': 'red' };
        } else {
          return {};
        }
      };
  
      $scope.getMessageStyle = function () {
        return $scope.messageStyle;
      };
  
      $scope.getMessageClass = function () {
        return $scope.messageClass;
      };
  
      $scope.$watch('result', function (newVal, oldVal) {
        if (newVal === 'Enjoy!' || newVal === 'Too much!') {
          $scope.messageStyle = { 'border-color': 'green' };
          $scope.messageClass = 'success';
        } else if (newVal === 'Please enter data first') {
          $scope.messageStyle = { 'border-color': 'red' };
          $scope.messageClass = 'error';
        } else {
          $scope.messageStyle = {};
          $scope.messageClass = '';
        }
      });
    }
  })();
  