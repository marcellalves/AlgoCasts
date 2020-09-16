// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //let revStr = ''
  //for (var i = str.length - 1; i >= 0; i--) {
  //revStr += str[i]
  //}
  //return revStr

  const revStr = str.split('').reverse().join('')

  return revStr
}

module.exports = reverse;
