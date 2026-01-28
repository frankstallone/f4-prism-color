import { describe, expect, it } from 'vitest'
import { toColor } from '../color'
import { buildScale } from '../scale'
import { targets } from '../constants'

const primarySeed = ['#3366ff']

describe('buildScale', () => {
  it('builds a full scale with locks and anchor', () => {
    const scale = buildScale({ id: 0, semantic: 'primary', keys: primarySeed })

    expect(scale.swatches).toHaveLength(targets.length)
    expect(scale.swatches[0].isLock).toBe(true)
    expect(scale.swatches[scale.swatches.length - 1].isLock).toBe(true)
    expect(scale.swatches.some((swatch) => swatch.isAnchor)).toBe(true)
  })

  it('respects an explicit destination space even for sRGB keys', () => {
    const scale = buildScale(
      { id: 1, semantic: 'primary', keys: primarySeed },
      { destinationSpace: 'oklch' },
    )

    expect(scale.destinationSpace).toBe('oklch')
    expect(
      scale.swatches.some((swatch) =>
        swatch.value.destination.startsWith('oklch('),
      ),
    ).toBe(true)
  })

  it('can produce out-of-srgb swatches when output space is p3', () => {
    const wideKey = 'oklch(0.7 0.25 40)'
    expect(toColor(wideKey).inGamut('srgb')).toBe(false)

    const scale = buildScale(
      { id: 2, semantic: 'wide', keys: [wideKey] },
      { destinationSpace: 'p3' },
    )

    expect(scale.destinationSpace).toBe('p3')
    expect(scale.swatches.some((swatch) => swatch.isOutOfGamut)).toBe(true)
    expect(
      scale.swatches.some((swatch) =>
        swatch.value.destination.includes('display-p3'),
      ),
    ).toBe(true)
  })
})
