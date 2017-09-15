angular.module('sortApp', [])

  .controller('mainController', function ($scope) {
    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.search = '';     // set the default search/filter term

    // create the list of sushi rolls 
    $scope.classes = [
      { name: 'Intro to C', code: "CS1050", professor: "Guilliams" },
      { name: 'Intro to Java', code: "CS3330", professor: "Wergeles" },
      { name: 'Operating Systems', code: "CS4530", professor: "Ries" },
      { name: 'Computational Intelligence', code: "CS47770", professor: "Keller" }
    ];

    $scope.addClass = function () {
      $scope.classes.push({ name: $scope.newName, code: $scope.newCode, professor: $scope.newInstructor })
      $scope.newName = "";
      $scope.newCode = "";
      $scope.newInstructor = "";
    }

  });