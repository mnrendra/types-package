import { stubs } from '@tests'
import index from '.'

describe('Test the root `index`!', () => {
  describe('Test default export!', () => {
    it('Should return \'Hello, World!\' string!', () => {
      const result = index()
      expect(result).toBe(stubs.main.defaultValue())
    })
  })
})
