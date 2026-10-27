import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import RefreshIcon from '@mui/icons-material/Refresh'
import GridViewIcon from '@mui/icons-material/GridView'
import TopNav from './components/TopNav'
import Sidebar from './components/Sidebar'
import KpiCard from './components/KpiCard'
import ChartCard from './components/ChartCard'
import DiscoveryCadence from './components/DiscoveryCadence'
import DonutChart from './components/DonutChart'
import { HorizontalBarChart, VerticalBarChart } from './components/BarCharts'
import theme, { palette } from './theme'
import {
  kpis,
  categoryData,
  managementStatusData,
  itemTypeData,
  fileTypeData,
  repositoryData,
  departmentData,
  connectionData,
  informationSizeData
} from './data'

function Legend() {
  const swatches = ['#43406e', '#1aa89a']
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{ display: 'flex', gap: 0.25 }}>
          {swatches.map((c) => (
            <Box key={c} sx={{ width: 12, height: 12, bgcolor: c }} />
          ))}
        </Box>
        <Typography sx={{ fontSize: 14, color: '#2a2f38' }}>
          All Repositories <b>(5,516)</b>
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{ display: 'flex', gap: 0.25 }}>
          <Box sx={{ width: 12, height: 12, bgcolor: '#1aa89a' }} />
          <Box sx={{ width: 12, height: 12, bgcolor: '#43406e' }} />
        </Box>
        <Typography sx={{ fontSize: 13, color: palette.textMuted }}>
          Exchange · OneDrive for Business · SharePoint Online · Teams
        </Typography>
      </Box>
    </Box>
  )
}

export default function DashboardV1() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <TopNav />
        <Box sx={{ display: 'flex', flexGrow: 1, minHeight: 0 }}>
          <Sidebar />
          <Box sx={{ flexGrow: 1, overflowY: 'auto', bgcolor: palette.pageBg }}>
            {/* Content header */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 3,
                py: 1.5
              }}
            >
              <Legend />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Select
                  size="small"
                  defaultValue="Overview"
                  sx={{ bgcolor: '#fff', fontSize: 13, minWidth: 160, height: 34 }}
                >
                  <MenuItem value="Overview">Overview</MenuItem>
                  <MenuItem value="Detailed">Detailed</MenuItem>
                </Select>
                <IconButton size="small" sx={{ color: palette.textMuted }}><RefreshIcon fontSize="small" /></IconButton>
                <IconButton size="small" sx={{ color: palette.textMuted }}><GridViewIcon fontSize="small" /></IconButton>
              </Box>
            </Box>

            <Box sx={{ px: 3, pb: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* Row 1: KPI cards + cadence */}
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 2.2fr', gap: 2 }}>
                {kpis.map((k) => (
                  <KpiCard key={k.label} label={k.label} value={k.value} />
                ))}
                <DiscoveryCadence />
              </Box>

              {/* Row 2: Donut charts */}
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
                <ChartCard title="CATEGORY"><DonutChart data={categoryData} /></ChartCard>
                <ChartCard title="MANAGEMENT STATUS"><DonutChart data={managementStatusData} /></ChartCard>
                <ChartCard title="ITEM TYPE"><DonutChart data={itemTypeData} /></ChartCard>
                <ChartCard title="FILE TYPE"><DonutChart data={fileTypeData} /></ChartCard>
              </Box>

              {/* Row 3: Bar charts */}
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr 1.4fr', gap: 2 }}>
                <ChartCard title="REPOSITORY" height={340}>
                  <HorizontalBarChart data={repositoryData} axisLabel="Repository" />
                </ChartCard>
                <ChartCard title="DEPARTMENT" height={340}>
                  <HorizontalBarChart data={departmentData} axisLabel="Department" />
                </ChartCard>
                <ChartCard title="INFORMATION SIZE" height={340}>
                  <VerticalBarChart buckets={informationSizeData.buckets} values={informationSizeData.values} />
                </ChartCard>
              </Box>

              {/* Row 4: Connection */}
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr 1.4fr', gap: 2 }}>
                <ChartCard title="CONNECTION" height={300}>
                  <HorizontalBarChart data={connectionData} axisLabel="Connection" />
                </ChartCard>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
