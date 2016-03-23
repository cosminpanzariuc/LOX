angular.module('docsIsolateScopeDirective', [])
	   .controller('Controller', ['$scope', function($scope) 
		{
			$scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
			$scope.igor = { name: 'Igor', address: '123 Somewhere' };
			$scope.vojta = { name: 'Vojta', address: '123 Somewhere Elseeeeee' };
		}])
  
	   .directive('myCustomer', function() 
	   {
		return {
		  restrict: 'E',
		  scope:
			  {
				customerInfo: '=info'
			  },
		  template: 'Name: {{customerInfo.name}} Address: {{customerInfo.address}}'
		};
  });
  
  