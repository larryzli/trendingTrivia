angular.module("triviaTrends").directive("triviaCard", function() {
    return {
        templateUrl: "./trivia/triviaCardTmpl.html",
        restrict: "E",
        scope: {
            questionData: "=",
            editModal: "&"
        },
        controller: function($scope) {
            $scope.selectedAnswer = 0;
            $scope.selectAnswer = optionNumber => {
                $scope.selectedAnswer = optionNumber;
                if ($scope.questionData.correct_answer === optionNumber) {
                    $scope.correct = true;
                } else {
                    $scope.correct = false;
                }
            };
        },
        link: (scope, element, attr) => {}
    };
});
