(function(){
    'use strict'; // Protect us from crete global scope variables 
    angular.module('LunchCheck',[])

    .controller('LunchCheckController', function ($scope){
        $scope.food = '';

        $scope.diplayResult = function (){
            var totalFood = checkHowmuchFood($scope.food);
            $scope.reult = totalFood;
        };

        function checkHowmuchFood(str){
            const totalDishes = str.split(",")
            if (totalDishes >= 3){
                return "Enjoy!"
            }else{
                return "Too much!"
            } 

        }

    });
}) ();