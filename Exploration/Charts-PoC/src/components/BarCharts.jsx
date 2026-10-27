import * as React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { palette } from '../theme'

// Horizontal bar chart (Repository, Department, Connection).
export function HorizontalBarChart({ data, axisLabel }) {
  return (
    <BarChart
      layout="horizontal"
      dataset={data}
      colors={[palette.indigo]}
      yAxis={[{ scaleType: 'band', dataKey: 'label', categoryGapRatio: 0.5 }]}
      xAxis={[{ label: 'Items' }]}
      series={[{ dataKey: 'value', color: palette.indigo, label: axisLabel }]}
      barLabel={(item) => item.value?.toLocaleString()}
      margin={{ top: 20, bottom: 40, left: 130, right: 20 }}
      slotProps={{ legend: { hidden: true } }}
      sx={{ '& .MuiBarLabel-root': { fill: '#fff', fontSize: 10 } }}
    />
  )
}

// Vertical bar chart (Information Size).
export function VerticalBarChart({ buckets, values }) {
  return (
    <BarChart
      colors={[palette.teal]}
      xAxis={[{ scaleType: 'band', data: buckets, label: 'Item Size' }]}
      yAxis={[{ label: 'Items' }]}
      series={[{ data: values, color: palette.teal }]}
      margin={{ top: 20, bottom: 50, left: 50, right: 20 }}
      slotProps={{ legend: { hidden: true } }}
    />
  )
}
