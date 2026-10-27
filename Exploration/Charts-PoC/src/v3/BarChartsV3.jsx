import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import { BarChart } from '@mui/x-charts/BarChart'

export function HorizontalBarChartV3({ data }) {
  const theme = useTheme()
  return (
    <BarChart
      layout="horizontal"
      dataset={data}
      colors={[theme.palette.primary.main]}
      yAxis={[{ scaleType: 'band', dataKey: 'label', categoryGapRatio: 0.4 }]}
      xAxis={[{ label: 'Items' }]}
      series={[{ dataKey: 'value', label: 'Items', color: theme.palette.primary.main }]}
      barLabel={(item) => item.value?.toLocaleString()}
      margin={{ top: 20, bottom: 40, left: 140, right: 20 }}
      slotProps={{ legend: { hidden: true } }}
      sx={{ '& .MuiBarLabel-root': { fill: theme.palette.primary.contrastText, fontSize: 10 } }}
    />
  )
}

export function VerticalBarChartV3({ buckets, values }) {
  const theme = useTheme()
  return (
    <BarChart
      colors={[theme.palette.secondary.main]}
      xAxis={[{ scaleType: 'band', data: buckets, label: 'Item Size' }]}
      yAxis={[{ label: 'Items' }]}
      series={[{ data: values, label: 'Items', color: theme.palette.secondary.main }]}
      margin={{ top: 20, bottom: 50, left: 55, right: 20 }}
      slotProps={{ legend: { hidden: true } }}
    />
  )
}
