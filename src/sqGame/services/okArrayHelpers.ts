angular.module('app').factory('okArrayHelpers', ()=>{
    return{
        randomNumbers(qty:number, max:number):Array<number> {
            let numbers:any[] = [];
            while (qty) {
                numbers.push(Math.floor(Math.random() * max));
                qty--;
            }
            return numbers;
        }

    }
});
