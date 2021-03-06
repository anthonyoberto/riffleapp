/* SLIDE LEFT MENU */
angular.module('slide', ['ionic']) // where 'slide' = view and 'ionic' = module

/* MAIN VIEW */
.controller('RiffleFeed', function($scope, $ionicModal) {
  $scope.tasks = [
  ];

// Menu slide
$scope.toggleMenu = function() {
  $scope.sideMenuController.toggleLeft();
};

// Create and load the Modal
  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Called when the form is submitted
  $scope.createTask = function(task) {
    $scope.tasks.push({
      title: task.title
    });
    $scope.taskModal.hide();
    task.title = "";
  };

  // Open our new task modal
  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  // Close the new task modal
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };
});