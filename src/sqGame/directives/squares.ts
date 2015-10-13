class SquaresDirective{

    templateUrl: string;
    link: any;

    constructor($timeout:any){
        this.templateUrl = 'sqGame/directives/squares.html';

        SquaresDirective.prototype.link = (scope:any, elem:any) =>{
            Object.assign(scope,
                {
                    initMovesQty: 3,
                    squareColors: ['red', 'blue', 'green', 'yellow'],
                    newGame() {
                        restartStats();
                        runSequence();
                    },
                    movesQty(){
                        return this.initMovesQty + this.level;
                    }
                });

            let highlighted = 0,
                sqNumbers: Array<number>,
                timesClicked = 0;

            scope.checkSequence = (i:number)=>{
                if(sqNumbers[timesClicked] !== i){
                    alert('błąd!');
                    scope.level = 1;
                } else{
                    timesClicked++;
                    if(timesClicked === scope.movesQty()){
                        timesClicked = 0;
                        scope.level++;
                        alert(`Level ${scope.level}`);
                        runSequence();
                    }
                }
            }

            function restartStats(){
                scope.level = 1;
                timesClicked = 0;
                highlighted = 0;
                sqNumbers = [];
            }

            function randomNumbers(qty:number, max:number){
                let numbers:any[] = [];
                while(qty){
                    numbers.push(Math.floor(Math.random() * max));
                    qty--;
                }
                return numbers;
            }

            function runSequence(){
                let movesQty = scope.movesQty();
                sqNumbers = randomNumbers(scope.movesQty(), scope.squareColors.length);
                highlightSquare();

                function highlightSquare(){
                    $(`.square:eq(${sqNumbers[highlighted]})`, elem).css({'opacity': 1});
                    $timeout(()=>{
                        clearHighlights();
                    }, 500);
                }

                function clearHighlights(){
                    $(`.square`, elem).css({'opacity': 0.3});
                    $timeout(()=>{
                        highlighted++;
                        if(movesQty === highlighted){
                            highlighted = 0;
                            return;
                        }
                        highlightSquare();
                    }, 250);
                }
            }
        }
    }

    public static Factory() {
        var directive = ['$timeout', ($timeout:any) => {
            return new SquaresDirective($timeout);
        }];
        return directive;
    }
}

angular.module('app').directive('squares', SquaresDirective.Factory());