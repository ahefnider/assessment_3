myApp.controller('HeroController', ['$scope', '$http', function($scope, $http) {

  $scope.heroes = [];
  $scope.currentHero = {};

  getheroes();

  $scope.submitcurrentHero = function () {
    var data = $scope.currentHero;
    $http.post('/heroes', data)
      .then(function () {
        console.log('POST /heroes');
        getheroes();
      });
  };

  $scope.deleteHero = function (id) {
    $http.delete('/heroes/' + id)
      .then(function (response) {
        console.log('DELETE /heroes ', id);
        getheroes();
      });
  };


  function getheroes() {
    $http.get('/heroes')
      .then(function (response) {
        $scope.heroes = response.data;
        console.log('GET /heroes ', response.data);

      });
  }
}]);
