import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'
import RefreshIcon from '@mui/icons-material/Refresh'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import StorageIcon from '@mui/icons-material/Storage'
import FolderIcon from '@mui/icons-material/Folder'
import { palette } from '../theme'
import { repositories } from '../data'

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 250,
        flexShrink: 0,
        bgcolor: '#ffffff',
        borderRight: `1px solid ${palette.cardBorder}`,
        height: '100%',
        overflowY: 'auto'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, py: 1.25, borderBottom: `1px solid ${palette.cardBorder}` }}>
        <IconButton size="small" sx={{ color: '#1aa89a' }}><VisibilityOutlinedIcon fontSize="small" /></IconButton>
        <IconButton size="small" sx={{ color: '#1aa89a' }}><AccountTreeOutlinedIcon fontSize="small" /></IconButton>
        <IconButton size="small" sx={{ color: '#1aa89a' }}><RefreshIcon fontSize="small" /></IconButton>
      </Box>
      <List dense disablePadding>
        {repositories.map((repo, i) => (
          <ListItemButton
            key={repo.name}
            selected={i === 0}
            sx={{
              pl: repo.root ? 1.5 : 3,
              '&.Mui-selected': { bgcolor: '#e8f4fb', borderLeft: `3px solid ${palette.kpiBlue}` }
            }}
          >
            {!repo.root && (
              <ChevronRightIcon sx={{ fontSize: 16, color: palette.textMuted, mr: -0.5 }} />
            )}
            <ListItemIcon sx={{ minWidth: 30 }}>
              {repo.root
                ? <StorageIcon sx={{ fontSize: 18, color: '#43406e' }} />
                : <FolderIcon sx={{ fontSize: 18, color: palette.kpiBlue }} />}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography sx={{ fontSize: 13, color: '#2a2f38' }}>
                  {repo.name}{' '}
                  <Typography component="span" sx={{ fontSize: 12, color: palette.textMuted }}>
                    ({repo.total.toLocaleString()} total)
                  </Typography>
                </Typography>
              }
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )
}
