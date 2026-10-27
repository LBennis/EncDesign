import * as React from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import GridViewIcon from '@mui/icons-material/GridView'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import SearchIcon from '@mui/icons-material/Search'
import { palette } from '../theme'

export default function ChartCard({ title, children, height = 300 }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1,
          borderBottom: `1px solid ${palette.cardBorder}`
        }}
      >
        <Typography sx={{ fontSize: 12, fontWeight: 600, letterSpacing: 0.5, color: palette.textMuted }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 0.25 }}>
          <IconButton size="small" sx={{ color: palette.kpiBlue }}><FormatListBulletedIcon sx={{ fontSize: 16 }} /></IconButton>
          <IconButton size="small" sx={{ color: palette.textMuted }}><GridViewIcon sx={{ fontSize: 16 }} /></IconButton>
          <IconButton size="small" sx={{ color: palette.textMuted }}><InfoOutlinedIcon sx={{ fontSize: 16 }} /></IconButton>
          <IconButton size="small" sx={{ color: palette.textMuted }}><SearchIcon sx={{ fontSize: 16 }} /></IconButton>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1, height, p: 1 }}>{children}</Box>
    </Card>
  )
}
