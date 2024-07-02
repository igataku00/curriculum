let numbers = [2, 5, 12, 13, 15, 18, 22];
for (let i = 0; i < numbers.length; i++){
    isEven(numbers[i]);
}
function isEven(num) {
    if(num % 2 === 0){
    console.log(num + 'は偶数です');
    }
}



class Car {
    constructor(getNumGas){
        this.getNumGas = getNumGas
    }
}
let car = {
    gass: 30,
    num: 123,
};
console.log("ガソリンは" + car.gass + "です " + " ナンバーは" + car.num + "です");