import * as React from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'
import { palette } from '../theme'

export default function KpiCard({ label, value }) {
  return (
    <Card sx={{ bgcolor: palette.kpiBlue, color: palette.kpiBlueText, height: '100%', border: 'none' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, pt: 1.25 }}>
        <Typography sx={{ fontSize: 12, fontWeight: 600, letterSpacing: 0.5 }}>{label}</Typography>
        <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.85)' }}><InfoIcon sx={{ fontSize: 18 }} /></IconButton>
      </Box>
      <Typography sx={{ fontSize: 60, fontWeight: 300, lineHeight: 1, px: 2, pb: 2, pt: 1 }}>
        {value}
      </Typography>
    </Card>
  )
}
