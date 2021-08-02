// const a = 5;
// const b = 2;
// let myName = "nico"

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log("hello" + myName)

// myName = "nicolas"

// console.log("your new name is " + myName)
//most const some let never var

// const amIFat = null;
// let something = "value"
// console.log(amIFat)
// console.log(something)
//null은 자연적으로 일어나지 않음 아무것도 없다는 것을 의도적으로 표현한것
//undefined는 메모리에는 존재하지만 값이 없는 것

//if not exist array
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// // const dayOfWeek = mon + tue + wed + thu + fri + sat + sun;
// const dayOfWeek = [mon, tue, wed, thu, fri, sat, sun];

// console.log(dayOfWeek);
// dayOfWeek.push("hi")
// console.log(dayOfWeek);


// //객체
// const player = {
//     name:"nico",
//     points: 10,
//     fat: true,
// }
// console.log(player)
// player.points = player.points +15;
// console.log(player.points)

const calculator = {
    add: function (a, b) {
        console.log("d")
        return a+b;
    },
    minus: function (a, b) {
        console.log(a - b)
    },
    multiply: function (a, b) {
        console.log(a * b)
    },
    divide: function (a, b) {
        console.log(a / b)
    }
}
const hi = calculator.add(3,5)
console.log(hi)
