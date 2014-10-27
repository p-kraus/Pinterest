var hello = angular.module('myApp',[]);

hello.controller('grabController',  function($scope) {
  $scope.dat = things.items;

  $scope.bye= function(die){
	var check=confirm("Are you sure you want to delete?");
	if (check==true){
		$scope.dat.splice(die,1);
	};
};
	$scope.addPin=function(a,b,c){
		$scope.dat.push({title:a,image_url:b,category:c, like:false});
		$scope.title="";
		$scope.image_url="";
		$scope.category="";

	};
});



