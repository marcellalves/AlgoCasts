// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const reversed = str.split('').reduce((rev, char) => char + rev, '')

  return reversed
}

module.exports = reverse;

// function reverse(str) {
//   let reversed = ''

//   for (let character of str) {
//     reversed = character + reversed
//   }

//   return reversed
// }

// function reverse(str) {
//   let reversed = ''

//   for (let character of str) {
//     reversed = character + reversed
//   }

//   return reversed
// }

// function reverse(str) {
//   const revStr = str.split('').reverse().join('')

//   return revStr
// }

//function reverse(str) {
  //let revStr = ''
  //for (var i = str.length - 1; i >= 0; i--) {
  //revStr += str[i]
  //}
  //return revStr
//}