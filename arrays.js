'use strict'

const numbers = [76, 55.7, 89, 37.5, 61]
numbers.push(19)
numbers.unshift(61)
numbers[1] = 12
numbers.splice(3, 1, 99) // (index, howmany, item1..., intmN)
// console.log(numbers)
// console.log(numbers[7])
// [61,12, 55.7, 99, 37.5,61, 19]
// typical for loop
/* for (let index = 0; index !== numbers.length; index++) {
  console.log(numbers[index])
} */
numbers.forEach(function (element) {
  console.log(element)
})

/* const func = function (element) {
  console.log(element)
}

numbers.forEach(func) */
