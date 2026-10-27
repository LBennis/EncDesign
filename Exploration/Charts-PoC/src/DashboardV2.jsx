import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import TopNavV2 from './v2/TopNavV2'
import SidebarV2 from './v2/SidebarV2'
import KpiCardV2 from './v2/KpiCardV2'
import ChartCardV2 from './v2/ChartCardV2'
import DiscoveryCadenceV2 from './v2/DiscoveryCadenceV2'
import DonutChartV2 from './v2/DonutChartV2'
import { HorizontalBarChartV2, VerticalBarChartV2 } from './v2/BarChartsV2'
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

// Explicit default MUI theme — no custom palette or component overrides.
const defaultTheme = createTheme()

export default function DashboardV2() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <TopNavV2 />
        <Box sx={{ display: 'flex', flexGrow: 1, minHeight: 0 }}>
          <SidebarV2 />
          <Box sx={{ flexGrow: 1, overflowY: 'auto', bgcolor: 'background.default' }}>
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
              <Typography variant="h6">All Repositories (5,516)</Typography>
              <Select size="small" defaultValue="Overview" sx={{ minWidth: 160 }}>
                <MenuItem value="Overview">Overview</MenuItem>
                <MenuItem value="Detailed">Detailed</MenuItem>
              </Select>
            </Box>

            <Box sx={{ px: 3, pb: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* Row 1: KPI cards + cadence */}
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 2.2fr', gap: 2 }}>
                {kpis.map((k) => (
                  <KpiCardV2 key={k.label} label={k.label} value={k.value} />
                ))}
                <DiscoveryCadenceV2 />
              </Box>

              {/* Row 2: Donut charts */}
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
                <ChartCardV2 title="Category"><DonutChartV2 data={categoryData} /></ChartCardV2>
                <ChartCardV2 title="Management Status"><DonutChartV2 data={managementStatusData} /></ChartCardV2>
                <ChartCardV2 title="Item Type"><DonutChartV2 data={itemTypeData} /></ChartCardV2>
                <ChartCardV2 title="File Type"><DonutChartV2 data={fileTypeData} /></ChartCardV2>
              </Box>

              {/* Row 3: Bar charts */}
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr 1.4fr', gap: 2 }}>
                <ChartCardV2 title="Repository" height={340}>
                  <HorizontalBarChartV2 data={repositoryData} />
                </ChartCardV2>
                <ChartCardV2 title="Department" height={340}>
                  <HorizontalBarChartV2 data={departmentData} />
                </ChartCardV2>
                <ChartCardV2 title="Information Size" height={340}>
                  <VerticalBarChartV2 buckets={informationSizeData.buckets} values={informationSizeData.values} />
                </ChartCardV2>
              </Box>

              {/* Row 4: Connection */}
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr 1.4fr', gap: 2 }}>
                <ChartCardV2 title="Connection" height={300}>
                  <HorizontalBarChartV2 data={connectionData} />
                </ChartCardV2>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
