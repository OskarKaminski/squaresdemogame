describe("squaresDirective",() => {

    let compile, scope, directiveEl, timeout;

    beforeEach(angular.mock.module('app'));
    beforeEach(inject(($compile, $rootScope:any, $timeout) => {
        compile = $compile;
        timeout = $timeout;
        scope = $rootScope.$new();

        directiveEl = getCompiledElement('<squares></squares>');
    }));

    describe("When user clicks start button",() => {

        beforeEach(() => {
            let button = directiveEl.find('button').eq(0);
            button.triggerHandler('click');
            scope.$digest();
        });

        it(`Should be four squares`, ()=>{
            expect(directiveEl.find(`square`).length).toBe(4);
        });

        it(`Level should be equal 1`, ()=>{
            expect(scope.level).toBe(1);
        });

        it(`Sequence should be set and has 4 digits`, ()=>{
            expect(scope.sqNumbers.length).toBe(4);
        });

        describe("When highlight sequence is finished",() => {
            beforeEach(() => {
                scope.highlighted = scope.sqNumbers.length;
            });

            describe("When user click correct square",() => {

                beforeEach(() => {
                    let correctSquareNumber = scope.sqNumbers[0];
                    let correctSquare = directiveEl.find(`square`).eq(correctSquareNumber);
                    correctSquare.triggerHandler('click');
                    scope.$digest();
                });

                it("timesClicked property should be 1",()=>{
                    expect(scope.timesClicked).toBe(1);
                });
            });

            describe("When user click wrong square",() => {

                beforeEach(() => {
                    let wrongSquareNumber;
                    if(scope.sqNumbers[0] + 1 === scope.sqNumbers.length){
                        wrongSquareNumber = scope.sqNumbers[0] - 1;
                    } else {
                        wrongSquareNumber = scope.sqNumbers[0] + 1;
                    }
                    let wrongSquare = directiveEl.find(`square`).eq(wrongSquareNumber);
                    wrongSquare.triggerHandler('click');
                    scope.$digest();
                });

                it("timesClicked property should be 0",()=>{
                    expect(scope.timesClicked).toBe(0);
                });

                it("sqNumbers property should be empty array",(done)=>{
                    timeout(function(){
                        expect(scope.sqNumbers).toEqual([]);
                        done();
                    }, 1000);
                    timeout.flush();
                });
            });

            describe("When user click correct square 4 times",() => {

                beforeEach(() => {
                    scope.sqNumbers.forEach((i)=>{
                        let correctSquareNumber = i;
                        let correctSquare = directiveEl.find(`square`).eq(correctSquareNumber);
                        correctSquare.triggerHandler('click');
                        scope.$digest();
                    })
                });

                it("timesClicked property should be 0",()=>{
                    expect(scope.timesClicked).toBe(0);
                });

                it("sqNumbers property should be empty array",()=>{
                    expect(scope.level).toEqual(2);
                });
            });
        });
    });

    function getCompiledElement(directive){
        let element = angular.element(directive);
        var compiledElement = compile(element)(scope);
        scope.$digest();
        return compiledElement;
    }
});
