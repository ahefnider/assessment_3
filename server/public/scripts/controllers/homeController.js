myApp.controller('HomeController', ['$scope', '$http', function($scope, $http) {

  $scope.heroPowers = [
      {type: 'invisibility', label: 'Invisibility'},
      {type: 'flight', label: 'Flight'},
      {type: 'superspeed', label: 'Super Speed'},
      {type: 'heatvision', label: 'Heat Vision'},
      {type: 'superstrength', label: 'Super Strength'},
      {type: 'acceleratedhealing', label: 'Accelerated Healing'},
      {type: 'powerblast', label: 'Power Blast'},
      {type: 'animalaffinity', label: 'Animal Affinity'}
    ];


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

    function getheroes() {
      $http.get('/heroes')
        .then(function (response) {
          $scope.heroes = response.data;
          console.log('GET /heroes ', response.data);

        });
    }
  }]);
