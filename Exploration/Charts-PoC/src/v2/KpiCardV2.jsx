import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function KpiCardV2({ label, value }) {
  return (
    <Card sx={{ height: '100%', bgcolor: 'primary.main', color: 'primary.contrastText' }}>
      <CardContent>
        <Typography variant="overline">{label}</Typography>
        <Typography variant="h3" sx={{ fontWeight: 300 }}>{value}</Typography>
      </CardContent>
    </Card>
  )
}
