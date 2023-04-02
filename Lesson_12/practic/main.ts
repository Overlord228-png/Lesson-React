

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

function searchnum(nums:number[], num:number):boolean{
    const idx = nums.indexOf(num)
    if(idx !== -1){
        nums.splice(idx,1)
        return true
    }
    return false
}


const nums: number[] = [4,66,9,2,4,1]
const res = searchnum(nums,66)
console.log(nums)
console.log(res)

//let num:number = 4;
//let nameUser:string = 'Pasha';
