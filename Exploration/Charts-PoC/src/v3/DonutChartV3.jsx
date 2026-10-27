import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import { PieChart } from '@mui/x-charts/PieChart'
import { donutRamp } from './themeCharts'

export default function DonutChartV3({ data }) {
  const theme = useTheme()
  return (
    <PieChart
      colors={donutRamp(theme)}
      series={[{ data, innerRadius: 55, outerRadius: 90, paddingAngle: 1, cornerRadius: 3 }]}
      margin={{ top: 10, bottom: 40, left: 10, right: 10 }}
      slotProps={{ legend: { direction: 'row', position: { vertical: 'bottom', horizontal: 'middle' } } }}
    />
  )
}
