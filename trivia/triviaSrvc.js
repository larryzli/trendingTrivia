angular.module("triviaTrends").service("triviaSrvc", function($http) {
    this.getTrivia = () => {
        return $http.get(
            "https://practiceapi.devmountain.com/api/trivia/questions/"
        );
    };
    this.getFilteredTrivia = difficulty => {
        if (difficulty) {
            return $http.get(
                `https://practiceapi.devmountain.com/api/trivia/questions/difficulty/${difficulty}`
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
