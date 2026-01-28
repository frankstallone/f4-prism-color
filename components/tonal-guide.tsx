import { targets, weights } from '@/src/engine/constants'

const tonalGroups = [
  { label: 'Highlights', start: 0, end: 3 },
  { label: '1/4 Tones', start: 4, end: 9 },
  { label: 'Mid-Tones', start: 10, end: 14 },
  { label: '3/4 Tones', start: 15, end: 20 },
  { label: 'Shadows', start: 21, end: 22 },
]

export function TonalGuide() {
  const gridStyle = {
    gridTemplateColumns: `repeat(${weights.length}, minmax(0, 1fr))`,
  }

  return (
    <div className="overflow-x-auto">
      <div className="min-w-max space-y-2">
        <div
          className="grid gap-1 text-2xs text-muted-foreground"
          style={gridStyle}
        >
          {tonalGroups.map((group) => (
            <div
              key={group.label}
              className="text-center"
              style={{ gridColumn: `${group.start + 1} / ${group.end + 2}` }}
            >
              <div className="text-xs font-medium text-foreground/80">
                {group.label}
              </div>
              <div className="mt-1 h-2 border-x border-t border-foreground/70" />
            </div>
          ))}
        </div>
        <div className="hidden sm:grid" style={gridStyle}>
          {targets.map((value, index) => (
            <div
              key={`${value}-${index}`}
              className="text-center text-2xs text-muted-foreground/80"
            >
              L*{value}
            </div>
          ))}
        </div>
        <div
          className="grid text-2xs font-semibold text-muted-foreground"
          style={gridStyle}
        >
          {weights.map((weight) => (
            <div key={weight} className="text-center">
              {weight}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
