export let imp1: number = 5

//1.Выведите с помощью цикла столбец чисел от 1 до 100.

for (let i =1; i<=100; i++){
    //console.log(i);
}
//2. Выведите с помощью цикла столбец четных чисел от 100 до 1.
for (let i =100; i>=1; i--){
       // console.log(i);
}
//3. Выведите с помощью цикла столбец четных чисел от 1 до 100.
for (let i =1; i<=100; i++){
    if (i%2===0){
       // console.log(i);
    }
}
//4. Заполните массив 10-ю иксами с помощью цикла.
let arr4:Array<string>=[]
for (let i = 1; i<=10; i++){
    arr4.push("X")
}
//5. Заполните массив числами от 1 до 10 с помощью цикла
let arr5:Array<number>=[]
for (let i = 1; i<=10; i++){
    arr5.push(i)}

//6. Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.
let arr6:Array<number>=[]
for (let i = 1; i<=10; i++){
    arr6.push(Number(Math.random().toFixed(2)))}

//7.  Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла
let arr7:Array<number>=[]
for (let i = 1; i<=10; i++){
    arr6.push(Number(Math.floor(Math.random()*10)))}

//8. Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
const arr8:Array<number>=[2, 13, 4, 7, 87, 54 , 76 ,8 , 78,57, 45, 334, 0]
for (let el of arr8) {
    if (el>0&&el<10){
        //console.log(el);
    }
}

//9. Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
// Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.
const arr9:Array<number>=[2, 13, 4, 7, 87, 54 , 5 ,8 , 78,57, 45, 334, 0]

for (let e of arr9){
    if (e==5){
        //console.log("Find 5 in array")
        break
    }
}

//10. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
const arr10:Array<number>=[2, 13, 4, 7, 87, 54 , 5 ,8 , 78,57, 45, 334, 0]

let a = 0
for (let e of arr10){a=a+e}

//11. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
const arr11:Array<number>=[2, 13, 4, 7, 87, 54 , 5 ,8 , 78,57, 45, 334, 0]

let b = 0
for (let e of arr11){b=b+e*e}

//12. Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
const arr12:Array<number>=[5, 5, 5, 15]


let b12 =0
let c = 0
for (let e of arr12){
    b12=b12+e
    c = b12/arr12.length
}

