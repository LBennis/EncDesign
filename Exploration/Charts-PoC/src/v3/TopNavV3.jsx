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

const tabs = ['Discovery', 'Analysis', 'Retention', 'Search', 'Connection', 'Admin']

export default function TopNavV3() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar variant="dense">
        <Tabs value={0} textColor="inherit" indicatorColor="secondary">
          {tabs.map((t) => (
            <Tab key={t} label={t} />
          ))}
        </Tabs>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit" size="small" sx={{ mr: 1 }}>
          <ChatBubbleOutlineIcon fontSize="small" />
        </IconButton>
        <Avatar sx={{ width: 32, height: 32, fontSize: 14 }}>TP</Avatar>
      </Toolbar>
      <Box sx={{ px: 2, py: 0.75, bgcolor: 'background.paper', color: 'text.primary' }}>
        <Typography variant="subtitle2">Repository Explorer</Typography>
      </Box>
    </AppBar>
  )
}
