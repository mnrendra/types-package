import { stubs } from '@tests'
import main from './main'

describe('Test `main` feature!', () => {
  it('Should return \'Hello, World!\' string!', () => {
    const result = main()
    expect(result).toBe(stubs.main.defaultValue())
  })
})
