// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {}
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1
  }

  let maxChars = 0
  let maxChar = ''
  for (let key in chars) {
    if (chars[key] > maxChars) {
      maxChars = chars[key]
      maxChar = key
    }
  }

  return maxChar
}

module.exports = maxChar;

// function maxChar(str) {
//   const chars = {}
//   for (let char of str) {
//     chars[char] = chars[char] + 1 || 1
//   }

//   let maxChars = 0
//   let maxChar = ''
//   Object.keys(chars).forEach((key) => {
//     if (chars[key] > maxChars) {
//       maxChars = chars[key]
//       maxChar = key
//     }
//   })

//   return maxChar
// }