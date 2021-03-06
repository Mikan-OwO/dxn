import { parseProps, parseSchema } from '@/App/parseProps'

describe('parseProps test', () => {
  test('simple parse', () => {
    const props = parseProps(
      'add {left: number} and {right: number}',
      'add 1000 and 24'
    )

    expect(props).toMatchObject({
      args: {
        left: 1000,
        right: 24,
      },
      argv: [1000, 24],
    })
  })

  test('single schema', () => {
    const parsed = parseSchema('ping')
    const first = parsed[0]

    expect(first.kind).toBe('word')
    expect(first.kind === 'word' && first.content).toBe('ping')
  })
})
