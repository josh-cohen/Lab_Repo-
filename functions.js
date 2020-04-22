'use strict'

const add = function (a, b) {
  return a + b
}

const result = add(2, 3)
console.log(result)

const addAgain = add
console.log(addAgain(12, 3))

const convert = function (f) {
  return ((f - 32) * (5 / 9))
}
console.log(convert(100))

//New change 