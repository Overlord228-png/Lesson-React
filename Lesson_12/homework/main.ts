/*
*ДЗ
*Написать функцию которая принимает массив имен и возвращает массив индексов имен тех, у которых больше 5 букв в слове 
*/


function findName(names:string[]): number[]{
    const NameIndexes: number[]=[];

    names.forEach((name,index)=>{
        if(name.length > 5){
            NameIndexes.push(index)
        }
    });
    return NameIndexes;
}


const names: string[] = ["Nikita", "Pasha", "Bogdan", "Kiril", "Edward", "Anastasia"]

const NameIndexes: number[] = findName(names);

console.log(NameIndexes);



