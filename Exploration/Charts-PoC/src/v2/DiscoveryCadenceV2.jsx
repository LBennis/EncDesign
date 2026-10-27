import * as React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'
import ChartCardV2 from './ChartCardV2'
import { cadence } from '../data'

export default function DiscoveryCadenceV2() {
  return (
    <ChartCardV2 title="Discovery Cadence" height={300}>
      <LineChart
        series={[
          { data: cadence.discovered, label: 'Discovered', showMark: false },
          { data: cadence.modified, label: 'Modified', showMark: false }
        ]}
        xAxis={[{ scaleType: 'point', data: cadence.xLabels, label: 'Period' }]}
        margin={{ top: 20, bottom: 40, left: 45, right: 20 }}
      />
    </ChartCardV2>
  )
}
