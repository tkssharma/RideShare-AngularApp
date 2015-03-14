
var rideshare=angular.module("rideshare",["ngRoute"]);

rideshare.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller: 'searchPageController',
		templateUrl: 'src/partials/searchPage.html'
	})
	.when('/faq',{
		controller: 'faqController',
		templateUrl: 'src/partials/faq.html'
	})
	.when('/addRide',{
		controller: 'addRideInfoController',
		templateUrl: 'src/partials/addRideInfo.html'
	})
	.when('/contactUs',{
		controller: 'contactUsController',
		templateUrl: 'src/partials/contactUS.html'
	})
	.when('/searchResults',{
		controller: 'searchResultsController',
		templateUrl: 'src/partials/searchResults.html'
	})
	.otherwise({redirectTo:'/'});

});

