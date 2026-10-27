import * as React from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import GridViewIcon from '@mui/icons-material/GridView'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { LineChart } from '@mui/x-charts/LineChart'
import { palette } from '../theme'
import { cadence } from '../data'

export default function DiscoveryCadence() {
  return (
    <Card sx={{ bgcolor: palette.darkCard, color: '#fff', height: '100%', border: 'none', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, py: 1 }}>
        <Typography sx={{ fontSize: 12, fontWeight: 600, letterSpacing: 0.5, color: 'rgba(255,255,255,0.85)' }}>
          DISCOVERY CADENCE
        </Typography>
        <Box sx={{ display: 'flex', gap: 0.25 }}>
          <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.7)' }}><FormatListBulletedIcon sx={{ fontSize: 16 }} /></IconButton>
          <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.7)' }}><GridViewIcon sx={{ fontSize: 16 }} /></IconButton>
          <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.7)' }}><InfoOutlinedIcon sx={{ fontSize: 16 }} /></IconButton>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexGrow: 1, minHeight: 0 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', py: 2, pl: 2 }}>
          <Typography sx={{ fontSize: 12, color: palette.cadenceGreen, fontWeight: 600 }}>DISCOVERED</Typography>
          <Typography sx={{ fontSize: 12, color: '#fff', fontWeight: 600 }}>MODIFIED</Typography>
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <LineChart
            series={[
              { data: cadence.discovered, color: palette.cadenceGreen, showMark: true, curve: 'linear' },
              { data: cadence.modified, color: palette.cadenceWhite, showMark: true, curve: 'linear' }
            ]}
            xAxis={[{ scaleType: 'point', data: cadence.xLabels }]}
            leftAxis={null}
            bottomAxis={null}
            margin={{ top: 20, bottom: 10, left: 10, right: 20 }}
            slotProps={{ legend: { hidden: true } }}
            sx={{
              '& .MuiMarkElement-root': { stroke: 'none' }
            }}
          />
        </Box>
      </Box>
    </Card>
  )
}
