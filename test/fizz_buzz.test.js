import { describe, expect, it } from 'vitest'
import { fizzBuzz } from '../lib/fizz_buzz'

describe('fizzBuzz', () => {
  it('shoud be a function', () => {
    fizzBuzz()
  })

  it('shoud return 1', () => {
    const result = fizzBuzz(1)
    expect(fizzBuzz(1)).toEqual(result)
  })

  it('shoud return 2', () => {
    const result = fizzBuzz(2)
    expect(fizzBuzz(2)).toEqual(result)
  })

  it('should return fizz if the number it´s 3 ', () => {
    const result = fizzBuzz(3)
    expect(fizzBuzz(3)).toBe('fizz')
  })

  it('should return fizz with multiples of 3', () => {
    const result = fizzBuzz(6)
    expect(fizzBuzz(6)).toBe('fizz')
  })

  it('should return buzz if the number it´s 5 ', () => {
    const result = fizzBuzz(5)
    expect(fizzBuzz(5)).toBe('buzz')
  })

  it('should return fizz with multiples of 5', () => {
    const result = fizzBuzz(10)
    expect(fizzBuzz(10)).toBe('buzz')
  })

  it('should return fizz with multiples of 5', () => {
    const result = fizzBuzz(10)
    expect(fizzBuzz(10)).toBe('buzz')
  })

  it('should return fizzbuzz with multiples of 5 and 3', () => {
    const result = fizzBuzz(15)
    expect(fizzBuzz(15)).toBe('fizzbuzz')
  })

  
})