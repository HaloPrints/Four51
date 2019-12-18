four51.app.controller('shortProductViewCtrl', ['$routeParams', '$scope', 'ProductDisplayService', function ($routeParams, $scope, ProductDisplayService) {
	$scope.LineItem = {};
	$scope.LineItem.Product = $scope.p;
	ProductDisplayService.setNewLineItemScope($scope);
	ProductDisplayService.setProductViewScope($scope);

	/*TRT-01898 Product Name wrapping in Chrome*/
	$scope.LineItem.Product.NameModify = false;

	$scope.$watch('LineItem.Product', function(product) {
		angular.forEach(product.Name, function() {
			if (product.Name.indexOf('T-Shirt') > -1) {
				//console.log(product.Name);
				$scope.LineItem.Product.NameModify = true;
				var pname = product.Name;
				pnameModified = pname.substring(0, pname.length-7);
				$scope.LineItem.Product.newName = pnameModified;
				//console.log(pnameModified);
			}
			else {
				$scope.LineItem.Product.NameModify = false;
			}
		});
	 });
	/*TRT-01898 Product Name wrapping in Chrome*/
}]);