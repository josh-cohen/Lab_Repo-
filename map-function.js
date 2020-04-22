'use strict'

const square = function (element) {
  return element * element
}

const map = function (functionToApply, array) {
  const new_array = []
  for (let i = 0; i < array.length; i++) {
    new_array[i] = functionToApply(array[i])
  }
  return new_array
}

const numbers = [0, 1, 2, 3]

const transform = map(square, numbers)

console.log(transform)

// using built in map function

const transform2 = numbers.map(x => x * x)

console.log(transform2)
