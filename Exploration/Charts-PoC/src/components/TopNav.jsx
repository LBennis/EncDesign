import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { palette } from '../theme'

const tabs = ['Discovery', 'Analysis', 'Retention', 'Search', 'Connection', 'Admin']

export default function TopNav() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ bgcolor: palette.headerBar, color: '#3f4854', borderBottom: `1px solid ${palette.cardBorder}` }}
    >
      <Toolbar variant="dense" sx={{ minHeight: 48, px: 1 }}>
        <Tabs
          value={0}
          textColor="inherit"
          TabIndicatorProps={{ style: { display: 'none' } }}
          sx={{ minHeight: 48, '& .MuiTab-root': { minHeight: 48, textTransform: 'none', fontSize: 14 } }}
        >
          {tabs.map((t, i) => (
            <Tab
              key={t}
              label={t}
              sx={{
                color: i === 0 ? '#2a2f38' : palette.textMuted,
                bgcolor: i === 0 ? '#ffffff' : 'transparent',
                fontWeight: i === 0 ? 600 : 400
              }}
            />
          ))}
        </Tabs>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton size="small" sx={{ bgcolor: '#1aa89a', color: '#fff', mr: 1.5, '&:hover': { bgcolor: '#159086' } }}>
          <ChatBubbleOutlineIcon fontSize="small" />
        </IconButton>
        <Avatar sx={{ bgcolor: '#1aa89a', width: 34, height: 34, fontSize: 14 }}>TP</Avatar>
      </Toolbar>
      <Box sx={{ px: 3, py: 0.75, bgcolor: '#ffffff', borderTop: `1px solid ${palette.cardBorder}` }}>
        <Typography sx={{ fontSize: 14, color: '#2a2f38' }}>Repository Explorer</Typography>
      </Box>
    </AppBar>
  )
}
