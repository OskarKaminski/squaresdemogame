class SequenceCtrl{
    public static $inject = ['$scope'];

    constructor(private $scope:any){
        // New features available soon
    }
}

angular.module('app').controller('SequenceCtrl', SequenceCtrl);
