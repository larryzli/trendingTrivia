angular.module("triviaTrends").directive("triviaCard", function() {
    return {
        templateUrl: "./trivia/triviaCardTmpl.html",
        restrict: "E",
        scope: {
            questionData: "=",
            editModal: "&"
        },
        controller: function($scope) {
            $scope.selectedAnswer =
                parseInt(localStorage.getItem($scope.questionData._id)) || 0;
            if ($scope.selectedAnswer === $scope.questionData.correct_answer) {
                $scope.correct = true;
            }
            $scope.selectAnswer = optionNumber => {
                $scope.selectedAnswer = optionNumber;
                localStorage.setItem($scope.questionData._id, optionNumber);
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
