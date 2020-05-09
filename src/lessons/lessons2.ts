export let imp: number = 5

// 1. Преобразовать массив чисел
//     [1, 2, 3, 4, 5] в массив строк
//     [‘1’, ‘2’, ‘3’, ‘4’, ‘5’];

const arr1: Array<number> = [1, 2, 3, 4, 5]
arr1.map(e => e.toString());

// 2. Преобразовать массив строк
//     [‘age’, ‘name’, ‘gfgfgf’] в массив строк с верхним регистром

const arr2: Array<string> = ["age", "name", "gfgfgf"]
arr2.map(e => e.toUpperCase())

// 3. Преобразовать массив строк
//     [‘andrey’, ‘vasja’, ‘kirill’] в массив у которого каждый элемент будет с первой заглавной буквой

const arr3: Array<string> = ["andrey", "vasja", "kirill"]
arr3.map(e => e[0].toUpperCase() + e.substring(1, e.length))


// 4. Преобразовать массив строк
//     [‘Andrey’, ‘Vasja’, ‘Kirill’]
// в массив объектов:
//     [{ name: ‘Andrey’ }, { name: ‘Vasja’ },{ name: ‘Kirill’ } ]

const arr4: Array<string> = ["Andrey", "Vasja", "Kirill"]
arr4.map(e => {
    return {name: e}
})

// 5. Есть массив имен ['Andrey', 'Vasja', 'Kirill']
// и есть массив возрастов [23, 30, 50]
// Каждый индекс имени в массиве совпадает с индексом возраста массива возрастов.
//Используя метод map и данные два массива создать новый массив, каждый элемент которого будет объектом:
const arr5: Array<string> = ["Andrey", "Vasja", "Kirill"]
const arr5age: Array<number> = [23, 30, 50]

arr5.map((e, i) => {
    return {name: e, age: arr5age[i]}
})

// 6. Преобразовать массив объектов
//     [{age: 23}, {age: 30}, {age: 50}] в массив чисел элементами которого будут числа (значения возрастов из объектов)

const arr6: Array<{ age: number }> = [{age: 23}, {age: 30}, {age: 50}]
arr6.map(e => e.age)

// 7. Имеется массив
//     [23 , 5, null, true, 'Vasja', {}, []]
// Требуется преобразовать данный массив в массив, элементы которого будут:
//  - если элемент число, то новый элемент будет объектом, у которого свойство будет являться элементом массива в виде {age: 23}
// - если строка, то в новом массиве элемент будет той же строкой в верхнем регистре
// - в остальных случаях элементы преобразуются в строку ‘not a number or a string’

const arr7: Array<number | null | boolean | string | {} | []> = [23, 5, null, true, 'Vasja', {}, []]
arr7.map(e => {
        if (typeof e === "number") {
            return {age: e}
        } else if (typeof e == "string") {
            return e.toUpperCase()
        } else return "not a number or a string"
    }
)

//8. Есть массив [1, 2, 3, 4, 5, 6]. Нужно преобразовать данный массив в новый у которого все элементы будут больше 2

const arr8: Array<number> = [1, 2, 3, 4, 5, 6]

arr8.map((e) => {if (e > 2) {return e}});
arr8.filter(e => e > 2)

// 9. Есть массив объектов users [{age: 11, name: Vasja}, {age: 13, name: Ivan}, {age: 18, name: Katya}, {age: 23, name: Andrey}].
//     Отфильтровать данный массив чтобы в нем находились пользователи которым 18 лет и выше.

const arr9: Array<{age: number, name: string}> = [{age: 11, name: "Vasja"}, {age: 13, name: "Ivan"}, {age: 18, name: "Katya"}, {age: 23, name: "Andrey"}]
arr9.filter(e => e.age >= 18)

// 10. Есть массив слов [‘машина’, ‘улов’, ‘ёж’, ‘эскалатор’].
// Нужно отфильтровать данный массив, чтобы в новом были слова, количество символов у которых больше 4;

const arr10: Array<string> = ['машина', "улов", "ёж", "эскалатор"]
arr10.filter(e => e.length > 4)


// 11. Есть массив [‘машина’, 23, null, ‘улов’, 55 ‘ёж’, ‘эскалатор’, undefined].
// Отфильтровать данный массив таким образом чтобы в нем были только строки и числа

const arr11:Array<any>=["машина", 23, null, "улов", 55, "ёж", "эскалатор", undefined]
arr11.filter(e=>typeof e ==="string"||typeof e ==="number")

// 12. Есть массив [1, 2, 3, 4 , 5, 6, 7].
//     Отфильтруйте данный массив таким образом чтобы в нем находились только чётные числа
const arr12: Array<number> = [1, 2, 3, 4 , 5, 6, 7]
arr12.filter(e=>e%2===0);