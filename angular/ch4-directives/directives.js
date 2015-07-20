/**
 * Created by superadmin on 7/19/15.
 */
angular.module('myApp', [])
    .controller('diasbledCtrl', function($scope) {
        $scope.name = 'Initial';
    })

    .controller('readonlyCtrl', function($scope) {
        $scope.first = "Manchester";
        $scope.second = "United";
        $scope.truefalse = true;
    })

    .controller('checkedCtrl', function($scope) {
        $scope.name = 'myTests';
        $scope.testModel = {
            item1: true,
            item2: false,
            item3: false
        };
        $scope.submit = function () {
            console.log($scope.testModel);
        };
    })

    .controller('selectedCtrl', function ($scope) {
        $scope.myOptions = [{
            "id": 106,
            "group": "Group 1",
            "label": "Item 1"
        },{
            "id": 107,
            "group": "Group 1",
            "label": "Item 2"
        },{
            "id": 110,
            "group": "Group 2",
            "label": "Item 3"
        }];

    })

    .controller('parentController', function($scope) {
    // best practice, always use a model
        $scope.myTestModel = {
            shout: 'I am a value in the a model in the parent controller'
        };
        $scope.parentAction = function() {
            $scope.myTestModel.shout = 'I am an action in the parent' +
                ' controller';
        };
    })
    .controller('childController', function($scope) {
        $scope.childAction = function() {
            $scope.myTestModel.shout = 'I am an action in the child' +
                ' controller';
        };
    })

    .controller('repeatController', function($scope) {
        $scope.students = [
            {name: "Joe Allen", course: "Assembly Language"},
            {name: "Kevin Hart", course: "Distributed Databases"}
        ];
    })

    .controller('changeController', function($scope) {
        $scope.someCondition = {};
        $scope.whenToChange = function() {
            $scope.someCondition.output
                = parseInt($scope.someCondition.x) + 2;
        };
    })

    .controller('formController', function($scope) {
        $scope.fields = [
            {placeholder: 'Username', isRequired: true},
            {placeholder: 'Password', isRequired: true},
            {placeholder: 'Email (optional)', isRequired: false}
        ];
        $scope.submitForm = function() {
            alert("ng-form Displayed!");
        };
    });
