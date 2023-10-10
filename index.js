/* 

Example variable

*/

let firstName = 'Todd'
let age = 25
let str = 'Hello, Javascript students!'
let str2 = '      Hello!      '
console.log(`Hello ${firstName}. You are ${age} today!`)
console.log(str2.trim())
let searchTerm = 'students'
console.log(str.indexOf(searchTerm)) // 6

let words = str.split(' ')
console.log(words)