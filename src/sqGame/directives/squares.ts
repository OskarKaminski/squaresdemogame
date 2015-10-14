class SquaresDirective {

    templateUrl:string;
    link:any;

    constructor($timeout:any, okArrayHelpers:any) {
        this.templateUrl = 'sqGame/directives/squares.html';

        SquaresDirective.prototype.link = (scope:any, elem:any) => {
            scope.initMovesQty = 3;
            scope.squareColors = ['red', 'blue', 'green', 'yellow'];
            scope.newGame = ()=> {
                newLevel(1);
                runSequence();
            };

            scope.movesQty = ()=> {
                return scope.initMovesQty + scope.level;
            };

            scope.checkSequence = (clickedSquare:number):void => {
                if (allHighlighted()) {
                    if (!correctAnswer(scope.sqNumbers[scope.timesClicked], clickedSquare)) {
                        restartGame();
                    } else {
                        scope.timesClicked++;
                        if (allClicked()) {
                            nextLevel();
                        }
                    }
                }
            };

            function allHighlighted():boolean {
                return scope.movesQty() === scope.highlighted;
            }

            function allClicked():boolean {
                return scope.timesClicked === scope.movesQty();
            }

            function correctAnswer(expected:number, clicked:number):boolean {
                return expected === clicked
            }

            function restartGame():void {
                $(`.you-loose`, elem).fadeIn();
                $timeout(()=>{
                    $(`.you-loose`, elem).fadeOut()
                    newLevel(1);
                }, 1000);
            }

            function nextLevel():void {
                newLevel(scope.level+1);
                runSequence();
            }

            function newLevel(level:number):void {
                scope.level = level;
                scope.timesClicked = 0;
                scope.highlighted = 0;
                scope.sqNumbers = [];
            }

            function runSequence():void {
                scope.sqNumbers = okArrayHelpers.randomNumbers(scope.movesQty(), scope.squareColors.length);
                $(`.level`, elem).fadeIn().delay(500).fadeOut();
                $timeout(()=>{
                    highlightSquare();
                }, 2000);
            }

            function highlightSquare():void {
                $(`.square-inner:eq(${scope.sqNumbers[scope.highlighted]})`, elem).css({'opacity': 1});
                $timeout(()=> {
                    clearHighlights();
                }, 500);
            }

            function clearHighlights():void {
                $(`.square-inner`, elem).css({'opacity': 0.3});
                $timeout(()=> {
                    scope.highlighted++;
                    if (allHighlighted()) {
                        $(`.square-inner`, elem).css({'opacity': ''});
                        return;
                    }
                    highlightSquare();
                }, 250);
            }
        }
    }

    public static Factory() {
        var directive = ['$timeout', 'okArrayHelpers', ($timeout:any, okArrayHelpers:any) => {
            return new SquaresDirective($timeout, okArrayHelpers);
        }];
        return directive;
    }
}

angular.module('app').directive('squares', SquaresDirective.Factory());