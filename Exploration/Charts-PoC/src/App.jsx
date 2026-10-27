import * as React from 'react'
import Box from '@mui/material/Box'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import DashboardV1 from './DashboardV1'
import DashboardV2 from './DashboardV2'
import DashboardV3 from './DashboardV3'

export default function App() {
  const [version, setVersion] = React.useState('v1')

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          px: 2,
          py: 0.75,
          bgcolor: '#1e1e1e',
          color: '#fff',
          flexShrink: 0
        }}
      >
        <Typography sx={{ fontSize: 13, fontWeight: 600 }}>Repository Explorer — Prototype</Typography>
        <ToggleButtonGroup
          size="small"
          exclusive
          value={version}
          onChange={(e, v) => v && setVersion(v)}
          sx={{
            '& .MuiToggleButton-root': { color: '#bbb', borderColor: '#444', px: 2, py: 0.25, fontSize: 12 },
            '& .Mui-selected': { color: '#fff !important', bgcolor: 'rgba(255,255,255,0.15) !important' }
          }}
        >
          <ToggleButton value="v1">V1 — Existing style</ToggleButton>
          <ToggleButton value="v2">V2 — Default MUI theme</ToggleButton>
          <ToggleButton value="v3">V3 — Supplied customer theme</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box sx={{ flexGrow: 1, minHeight: 0 }}>
        {version === 'v1' && <DashboardV1 />}
        {version === 'v2' && <DashboardV2 />}
        {version === 'v3' && <DashboardV3 />}
      </Box>
    </Box>
  )
}
