
//TODO Inject http service and load node.json
function MyCtrl($scope, $timeout, $http) {
    $scope.assets = [];
    $scope.selected = {name: "Nothing selected"};
    $scope.hierarchy = "1,11";

    $http.get('foundry.json').success(function(data, status)
    {
        $scope.assets = data;
    }).error(function(data, status)
    {
        alert("Error: " + status);
    });

    $scope.loadChildren = function(nodeId)
    {
        //console.log("Node id: " + nodeId);
        if(nodeId.charAt(0) == "f")
            return $http.get('technology.json');
        else
            return $http.get('product.json');
    }

    $scope.$on("nodeSelected", function(event, node) {
        $scope.selected = node;
        $scope.$broadcast("selectNode", node);
    });
}