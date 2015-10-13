class SquareDirective{
    templateUrl: string;
    link: any;
    scope: any;

    constructor(){
        this.scope = {
            color: '@'
        },
        this.templateUrl = 'sqGame/directives/square.html';
        SquareDirective.prototype.link = (scope:any, elem:ng.IRootElementService)=>{
            $('.square-inner', elem).css({'background-color': scope.color});
        }
    }
}

angular.module('app').directive('square', ()=> new SquareDirective());
