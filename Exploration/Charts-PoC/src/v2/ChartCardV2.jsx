import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export default function ChartCardV2({ title, children, height = 300 }) {
  return (
    <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardHeader
        title={title}
        titleTypographyProps={{ variant: 'subtitle2' }}
        action={
          <IconButton size="small">
            <MoreVertIcon fontSize="small" />
          </IconButton>
        }
        sx={{ py: 1 }}
      />
      <Divider />
      <CardContent sx={{ flexGrow: 1, p: 1, '&:last-child': { pb: 1 } }}>
        <Box sx={{ height }}>{children}</Box>
      </CardContent>
    </Card>
  )
}
