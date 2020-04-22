'use strict'

const squareNormal = function (num) { return num * num }

const squareShorter = (num) => { return num * num }

const squareShortest = num => num * num
// all functions are called in the same way
// console.log(squareNormal(2))
// console.log(squareShorter(3))
// console.log(squareShortest(4))

const electiveOne = { courseCode: 'ELEN4010', yearOffered: 4 }
const electiveTwo = { courseCode: 'ELEN4001', yearOffered: 4 }
const electiveThree = { courseCode: 'ELEN4020', yearOffered: 4 }
const electiveFour = { courseCode: 'ELEN4017', yearOffered: 4 }

const students = [{ name: 'Kwezi', studentNumber: 453528, yearOfStudy: 4, electives: [electiveOne, electiveTwo, electiveThree] },
  { name: 'Pieter', studentNumber: 454345, yearOfStudy: 3, electives: [electiveOne, electiveTwo, electiveFour] },
  { name: 'Jade', studentNumber: 678345, yearOfStudy: 4, electives: [electiveTwo, electiveThree, electiveFour] },
  { name: 'Kiren', studentNumber: 567893, yearOfStudy: 4, electives: [electiveOne, electiveTwo, electiveThree] }]

// const new_array = students.filter(function (object) {
// return object.yearOfStudy > 3 && object.electives[0].courseCode === 'ELEN4010'
// })
const arrow = element => element.yearOfStudy > 3 && element.electives[0].courseCode === 'ELEN4010'

const new_array = students.filter(arrow)

console.log(new_array)
