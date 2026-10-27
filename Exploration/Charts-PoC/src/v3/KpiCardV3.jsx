import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function KpiCardV3({ label, value }) {
  return (
    <Card sx={{ height: '100%', bgcolor: 'primary.main', color: 'primary.contrastText' }}>
      <CardContent>
        <Typography variant="body3" sx={{ letterSpacing: 0.5 }}>{label}</Typography>
        <Typography variant="h2" sx={{ mt: 1, fontSize: '3.75rem', lineHeight: 1.1 }}>{value}</Typography>
      </CardContent>
    </Card>
  )
}
