angular
    .module("triviaTrends")
    .controller("triviaCtrl", function($scope, triviaSrvc) {
        // Get All Trivia
        triviaSrvc.getTrivia().then(response => {
            $scope.triviaList = response.data;
        });

        // Animal Filter
        $scope.animalFilterInput = "";
        $scope.animalSearchShow = false;
        $scope.animalSearchClick = () => {
            $scope.animalSearchShow = !$scope.animalSearchShow;
        };

        // Filter Difficulty
        $scope.changeFilter = difficulty => {
            $scope.page = 0;
            triviaSrvc.getFilteredTrivia(difficulty).then(response => {
                $scope.triviaList = response.data;
            });
        };
        // Paging
        $scope.page = 0;
        $scope.nextPage = () => {
            $scope.page = $scope.page + 1;
            triviaSrvc.getTrivia($scope.page).then(response => {
                $scope.triviaList = response.data;
            });
        };
        $scope.previousPage = () => {
            if ($scope.page > 0) {
                $scope.page = $scope.page - 1;
            }
            triviaSrvc.getTrivia($scope.page).then(response => {
                $scope.triviaList = response.data;
            });
        };

        // Modal Control
        $scope.showModal = false;
        $scope.closeModal = () => {
            $scope.editQuestion = false;
            $scope.newQuestion = false;
            $scope.showModal = false;
        };
        // New Question Modal
        $scope.newQuestion = false;
        $scope.openNewModal = () => {
            $scope.newQuestion = true;
            $scope.triviaQuestion = "";
            $scope.triviaAnimal = "";
            $scope.triviaDifficulty = 2;
            $scope.triviaCorrectOption = 1;
            $scope.triviaOption1 = "";
            $scope.triviaOption2 = "";
            $scope.triviaOption3 = "";
            $scope.triviaOption4 = "";
            $scope.showModal = true;
        };
        // Add Question
        $scope.addNewTrivia = () => {
            $scope.newTriviaData = {
                question: $scope.triviaQuestion,
                animal: $scope.triviaAnimal,
                difficulty: $scope.triviaDifficulty,
                options: {
                    1: $scope.triviaOption1,
                    2: $scope.triviaOption2,
                    3: $scope.triviaOption3,
                    4: $scope.triviaOption4
                },
                correct_answer: $scope.triviaCorrectOption
            };
            triviaSrvc.addTrivia($scope.newTriviaData).then(() => {
                triviaSrvc.getTrivia().then(response => {
                    $scope.triviaList = response.data;
                });
            });
            $scope.showModal = false;
        };
        // Edit Question Modal
        $scope.editQuestion = false;
        $scope.openEditModal = (
            id,
            question,
            animal,
            difficulty,
            correctAnswer,
            options
        ) => {
            $scope.triviaID = id;
            $scope.editQuestion = true;
            $scope.triviaQuestion = question;
            $scope.triviaAnimal = animal;
            $scope.triviaDifficulty = difficulty;
            $scope.triviaCorrectOption = correctAnswer;
            $scope.triviaOption1 = options[1];
            $scope.triviaOption2 = options[2];
            $scope.triviaOption3 = options[3];
            $scope.triviaOption4 = options[4];
            $scope.showModal = true;
        };
        // Update Question
        $scope.updateOldTrivia = () => {
            $scope.newTriviaData = {
                question: $scope.triviaQuestion,
                animal: $scope.triviaAnimal,
                difficulty: $scope.triviaDifficulty,
                options: {
                    1: $scope.triviaOption1,
                    2: $scope.triviaOption2,
                    3: $scope.triviaOption3,
                    4: $scope.triviaOption4
                },
                correct_answer: $scope.triviaCorrectOption
            };
            triviaSrvc
                .updateTrivia($scope.triviaID, $scope.newTriviaData)
                .then(() => {
                    triviaSrvc.getTrivia().then(response => {
                        $scope.triviaList = response.data;
                    });
                });
            $scope.showModal = false;
            $scope.editQuestion = false;
        };
        // Delete Question
        $scope.deleteOldTrivia = () => {
            triviaSrvc.deleteTrivia($scope.triviaID).then(() => {
                triviaSrvc.getTrivia().then(response => {
                    $scope.triviaList = response.data;
                });
            });
            $scope.showModal = false;
            $scope.editQuestion = false;
        };
    });
