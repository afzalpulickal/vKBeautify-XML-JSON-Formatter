var app = angular.module("myApp",[]);
app.controller("beautifyCtrl",function($scope){
  $scope.data = '<afzal version=\'2.0\'><channel><title>Afzal Title</title><title2>afzal</title2></channel>    </afzal>'
})
.directive("prettyprint", function() {
    return {
        restrict: 'C',
        link: function postLink(scope, element, attrs) {
              element.text(vkbeautify.xml(scope.data, 4));
        }
    };
});
