angular.module("triviaTrends").service("triviaSrvc", function($http) {
    this.getTrivia = page => {
        if (!page) {
            return $http.get(
                "https://practiceapi.devmountain.com/api/trivia/questions/"
            );
        } else {
            return $http.get(
                `https://practiceapi.devmountain.com/api/trivia/questions?page=${page}`
            );
        }
    };
    this.getFilteredTrivia = (difficulty, page = 0) => {
        if (difficulty) {
            return $http.get(
                `https://practiceapi.devmountain.com/api/trivia/questions/difficulty/${difficulty}?page=${page}`
            );
        } else {
            return $http.get(
                "https://practiceapi.devmountain.com/api/trivia/questions/"
            );
        }
    };

    this.addTrivia = triviaData => {
        return $http.post(
            "https://practiceapi.devmountain.com/api/trivia/questions",
            triviaData
        );
    };

    this.updateTrivia = (triviaID, triviaData) => {
        return $http.put(
            `https://practiceapi.devmountain.com/api/trivia/questions/${triviaID}`,
            triviaData
        );
    };

    this.deleteTrivia = triviaID => {
        return $http.delete(
            `https://practiceapi.devmountain.com/api/trivia/questions/${triviaID}`
        );
    };
});
