// const isOdd = require('is-odd');

// console.log(isOdd(2));

let is_number = num => {
  if (typeof num == 'number')
    return num - num === 0

  if (typeof num == 'string' && num.trim() !== '')
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num)

  return false
}

let is_odd = num => {
  let n = Math.abs(num)
  if (!is_number(n))
    throw new TypeError("excepted a  number")

  if (!Number.isInteger(n))
    throw new Error("excepted an integer")

  if (!Number.isSafeInteger(n))
    throw new Error("value exceeds maximum safe integer")

  return (n % 2) == 1

}

console.log(typeof( +'   45    '))
console.log( '   45    ')