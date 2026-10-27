import * as React from 'react'
import { PieChart } from '@mui/x-charts/PieChart'
import { palette } from '../theme'

// Donut chart using only MUI X PieChart with an innerRadius.
export default function DonutChart({ data }) {
  return (
    <PieChart
      colors={palette.blueRamp}
      series={[
        {
          data,
          innerRadius: 60,
          outerRadius: 95,
          paddingAngle: 0.5,
          cornerRadius: 0,
          arcLabel: null
        }
      ]}
      margin={{ top: 10, bottom: 10, left: 10, right: 10 }}
      slotProps={{ legend: { hidden: true } }}
    />
  )
}
