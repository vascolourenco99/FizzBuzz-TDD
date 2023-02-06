export function fizzBuzz(number) {
  let string = ''
  if (number % 3 === 0) string += 'fizz'
  if (number % 5 === 0) string += 'buzz'
  return string.length ? string : number
}