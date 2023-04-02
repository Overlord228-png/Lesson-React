/*
*ДЗ
*Написать функцию которая принимает массив имен и возвращает массив индексов имен тех, у которых больше 5 букв в слове
*/
function findName(names) {
    var NameIndexes = [];
    names.forEach(function (name, index) {
        if (name.length > 5) {
            NameIndexes.push(index);
        }
    });
    return NameIndexes;
}
var names = ["Nikita", "Pasha", "Bogdan", "Kiril", "Edward", "Anastasia"];
var NameIndexes = findName(names);
console.log(NameIndexes);
