class HighScoresComponent{
    templateUrl = 'sqGame/directives/high-scores.html';
    controller = HighScoresCtrl;
    bindings = {
        scores: '<'
    }
}

class HighScoresCtrl{

}

angular.module('app')
    .component('highScores', new HighScoresComponent());
