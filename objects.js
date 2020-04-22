'use strict'

const student = {
  name: 'Kwezi',
  studentNumber: 453528,
  getSummary: function () {
    return `${this.name}'s student number is ${this.studentNumber}`
  }
}
console.log(student) // print the entire object
// access the object's properties
// console.log(`${student.name}'s student number is ${student.studentNumber}`)
const string_test = student.getSummary()

console.log(string_test)

const addAge = function (theStudent, age) {
  theStudent.age = age // add a new property called age to the student
}
addAge(student, 20)

console.log(student)

const software3 = {
  courseCode: 'ELEN4010'
}
const electronics1 = {
  courseCode: 'ELEN2001'
}
const DIMS = {
  courseCode: 'ELEN3020'
}
const Design = {
  courseCode: 'ELEN1004'
}

const addYearOffered = function (a_course) {
  if (a_course.courseCode.includes('10')) { a_course.yearOffered = 1 }
  if (a_course.courseCode.includes('20')) { a_course.yearOffered = 2 }
  if (a_course.courseCode.includes('30')) { a_course.yearOffered = 3 }
  if (a_course.courseCode.includes('40')) { a_course.yearOffered = 4 }
}

const courseSummary = function (course) {
  return (`${course.courseCode} is offered in year ${course.yearOffered} `)
}

addYearOffered(software3)
addYearOffered(electronics1)
addYearOffered(DIMS)
addYearOffered(Design)

console.log(courseSummary(software3))
console.log(courseSummary(electronics1))
console.log(courseSummary(DIMS))
console.log(courseSummary(Design))
