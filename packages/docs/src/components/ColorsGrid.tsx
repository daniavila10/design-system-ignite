import { getContrast } from 'polished'

import { colors } from '@design-system/tokens'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            fontFamily: 'monospace',
            color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <strong>${key}</strong>

          <span>{color}</span>
        </div>
      </div>
    )
  })
}
