// 1 - Новый функционал 
// 2 - Язые имеет строгую типизацию 
// 3 - Компиляция
//const let var
//boolean, number, string, Array, object, null, undefined  
/*
function sum(num1:number,num2:number):string {
    return `${num1}+${num2}=${num1+num2}`
}

console.log(sum(4,4))
*/
/*
    Реализовать функцию
    Которая принимает массив чисел
    И число которое нужно удалить
    Функция возвращает тру если удалось удалить
    Функция возврашает фолсе если не удалось удалить
*/
function searchnum(nums, num) {
    var idx = nums.indexOf(num);
    if (idx !== -1) {
        nums.splice(idx, 1);
        return true;
    }
    return false;
}
var nums = [4, 66, 9, 2, 4, 1];
var res = searchnum(nums, 6126);
console.log(nums);
console.log(res);
//let num:number = 4;
//let nameUser:string = 'Pasha';
