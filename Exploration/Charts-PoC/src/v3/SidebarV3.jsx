import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import StorageIcon from '@mui/icons-material/Storage'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined'
import { repositories } from '../data'

export default function SidebarV3() {
  return (
    <Box sx={{ width: 250, flexShrink: 0, bgcolor: 'background.paper', height: '100%', overflowY: 'auto' }}>
      <List
        dense
        subheader={
          <Box sx={{ px: 2, py: 1 }}>
            <ListItemText primaryTypographyProps={{ variant: 'body3' }} primary="Repositories" />
          </Box>
        }
      >
        <Divider />
        {repositories.map((repo, i) => (
          <ListItemButton key={repo.name} selected={i === 0} sx={{ pl: repo.root ? 2 : 4 }}>
            <ListItemIcon sx={{ minWidth: 34 }}>
              {repo.root ? <StorageIcon fontSize="small" /> : <FolderOutlinedIcon fontSize="small" />}
            </ListItemIcon>
            <ListItemText
              primary={repo.name}
              secondary={`${repo.total.toLocaleString()} total`}
              primaryTypographyProps={{ variant: 'body2' }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )
}
