import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { SparkLineChart } from '@mui/x-charts/SparkLineChart'
import ChartCardV3 from './ChartCardV3'
import { cadence } from '../data'

function MetricSparkline({ label, data, color }) {
  const latest = data[data.length - 1]
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
      <Box sx={{ minWidth: 90 }}>
        <Typography variant="body3" sx={{ color: 'text.secondary' }}>{label}</Typography>
        <Typography variant="h4" sx={{ color }}>{latest.toLocaleString()}</Typography>
      </Box>
      <Box sx={{ flex: 1, minWidth: 0, height: 40 }}>
        <SparkLineChart
          data={data}
          height={40}
          area
          showHighlight
          showTooltip
          curve="natural"
          colors={[color]}
        />
      </Box>
    </Box>
  )
}

export default function DiscoveryCadenceV3() {
  const theme = useTheme()
  return (
    <ChartCardV3 title="Discovery Cadence" height={140}>
      <Stack divider={<Divider flexItem />} sx={{ height: '100%' }} justifyContent="space-around">
        <MetricSparkline label="Discovered" data={cadence.discovered} color={theme.palette.primary.main} />
        <MetricSparkline label="Modified" data={cadence.modified} color={theme.palette.navy[300]} />
      </Stack>
    </ChartCardV3>
  )
}
