import * as React from 'react'
import { PieChart } from '@mui/x-charts/PieChart'

// Donut chart using default MUI X Charts colors and legend.
export default function DonutChartV2({ data }) {
  return (
    <PieChart
      series={[{ data, innerRadius: 55, outerRadius: 90, paddingAngle: 1, cornerRadius: 3 }]}
      margin={{ top: 10, bottom: 40, left: 10, right: 10 }}
      slotProps={{ legend: { direction: 'row', position: { vertical: 'bottom', horizontal: 'middle' } } }}
    />
  )
}
