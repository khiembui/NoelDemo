
fuelmanagementApp.factory('AddFuelStationService', function ($http) {
    return {
        AddFuelStation: function (dataModel) {
            debugger;
            return $http.post('api/FuelStations', dataModel).then(function (result) {
                return result.data;
            });
        }
    };
});

fuelmanagementApp.controller('fuelStationController', function ($scope, AddFuelStationService) {
    $scope.FuelStations = [
        {
            FuelStationName: "teo",
            Address: "teo",
            GpsAttitude: "teo"
        },

        {
            FuelStationName: "teo1",
            Address: "teo1",
            GpsAttitude: "teo1"
        }
    ];

    $scope.FuelStation = {};
    //$scope.AddFuelStation = function () {
    //    $scope.FuelStations.push($scope.FuelStation);
    //    $scope.FuelStation = {};
    //};
    $scope.AddFuelStation = AddFuelStationService.AddFuelStation($scope.FuelStation)
        .then(function (data) {
        debugger;
        $scope.FuelStations.push($scope.FuelStation);
        $scope.FuelStation = {};
    });
    $scope.pageClass = 'fuel-station';
});