
angular.module('rideshare').controller("addRideInfoController", function($scope){
$scope.showSuccessMessage=false;
$scope.showErrorMessage = false;

	$scope.addRide = function(){
		$scope.submitted = true;
		if($scope.loginform.$valid){
			$scope.showSuccessMessage=true;
			$scope.showErrorMessage = false;			
			$scope.submitted = false;
		}
		else{
			$scope.showSuccessMessage=false;
			$scope.showErrorMessage = true;
			return;
		}
		console.log($scope.rideInfo);
	};

});