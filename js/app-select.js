var myApp = angular.module('myApp', []);

myApp.controller('selectCtrl',['$scope', function($scope) {

  $scope.fruitSortMap = [
    { id : '011', label : 'バナナ' },
    { id : '020', label : 'りんご' },
    { id : '021', label : 'みかん' }
  ];

  $scope.fruitSort = $scope.fruitSortMap[0].id;

  $scope.friutSortValue = $scope.fruitSort.substring(0, 2);
  $scope.friutSortOrder = $scope.fruitSort.substring(2, 3);

}]);

myApp.directive('fruitSelect', function() {


  return {
    restrict:'A',
    scope: {
      fruitSort: '=fruitSort'
    },
    link: function(scope) {
      var test = scope.fruitSort;

    }
  };

});