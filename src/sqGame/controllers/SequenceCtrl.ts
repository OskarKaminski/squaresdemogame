class SequenceCtrl{
    public static $inject = ['$scope'];
    public static initMovesNumber = 4;

    constructor(private $scope:any){
        $scope.squareColors = ['red', 'blue', 'green', 'yellow'];
        $scope.level = 1;
    }

    newGame(){

    }
}

angular.module('app').controller('SequenceCtrl', SequenceCtrl);
