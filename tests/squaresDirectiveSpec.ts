describe("squaresDirective",() => {

    let compile, scope, directiveEl, squareEl;

    beforeEach(module('app'));
    beforeEach(inject(($compile, $rootScope:any) => {
        compile = $compile;
        scope = $rootScope.$new();

        directiveEl = getCompiledElement('<squares></squares>');
    }));

    describe("When user clicks start button",() => {

        beforeEach(inject(() => {
            let button = directiveEl.find('button');
            button.triggerHandler('click');
            scope.$digest();
        }));

        it(`Should emit event flash_square:{color}`, ()=>{
            expect(directiveEl.find(`square`).length).toBe(4);
            console.log(directiveEl);
        });
    });

    function getCompiledElement(directive){
        let element = angular.element(directive);
        var compiledElement = compile(element)(scope);
        scope.$digest();
        return compiledElement;
    }
});
