import * as React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'

// Horizontal bar chart using default MUI X Charts colors.
export function HorizontalBarChartV2({ data }) {
  return (
    <BarChart
      layout="horizontal"
      dataset={data}
      yAxis={[{ scaleType: 'band', dataKey: 'label', categoryGapRatio: 0.4 }]}
      xAxis={[{ label: 'Items' }]}
      series={[{ dataKey: 'value', label: 'Items' }]}
      barLabel={(item) => item.value?.toLocaleString()}
      margin={{ top: 20, bottom: 40, left: 140, right: 20 }}
      slotProps={{ legend: { hidden: true } }}
    />
  )
}

// Vertical bar chart using default MUI X Charts colors.
export function VerticalBarChartV2({ buckets, values }) {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: buckets, label: 'Item Size' }]}
      yAxis={[{ label: 'Items' }]}
      series={[{ data: values, label: 'Items' }]}
      margin={{ top: 20, bottom: 50, left: 55, right: 20 }}
      slotProps={{ legend: { hidden: true } }}
    />
  )
}
