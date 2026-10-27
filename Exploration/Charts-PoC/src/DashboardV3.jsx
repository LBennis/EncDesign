import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { lightTheme } from './vendor/enc'
import TopNavV3 from './v3/TopNavV3'
import SidebarV3 from './v3/SidebarV3'
import KpiCardV3 from './v3/KpiCardV3'
import ChartCardV3 from './v3/ChartCardV3'
import DiscoveryCadenceV3 from './v3/DiscoveryCadenceV3'
import DonutChartV3 from './v3/DonutChartV3'
import { HorizontalBarChartV3, VerticalBarChartV3 } from './v3/BarChartsV3'
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

// Avenir isn't available locally, so override the supplied theme's fonts with Arial.
const ARIAL = 'Arial, Helvetica, sans-serif'
const arialTheme = createTheme(lightTheme, { typography: { fontFamily: ARIAL } })
;['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'body3', 'bodySmall', 'button', 'caption', 'overline'].forEach((v) => {
  if (arialTheme.typography[v]) arialTheme.typography[v].fontFamily = ARIAL
})

export default function DashboardV3() {
  return (
    <ThemeProvider theme={arialTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', bgcolor: 'background.default' }}>
        <TopNavV3 />
        <Box sx={{ display: 'flex', flexGrow: 1, minHeight: 0 }}>
          <SidebarV3 />
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
                  <KpiCardV3 key={k.label} label={k.label} value={k.value} />
                ))}
                <DiscoveryCadenceV3 />
              </Box>

              {/* Row 2: Donut charts */}
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
                <ChartCardV3 title="Category"><DonutChartV3 data={categoryData} /></ChartCardV3>
                <ChartCardV3 title="Management Status"><DonutChartV3 data={managementStatusData} /></ChartCardV3>
                <ChartCardV3 title="Item Type"><DonutChartV3 data={itemTypeData} /></ChartCardV3>
                <ChartCardV3 title="File Type"><DonutChartV3 data={fileTypeData} /></ChartCardV3>
              </Box>

              {/* Row 3: Bar charts */}
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr 1.4fr', gap: 2 }}>
                <ChartCardV3 title="Repository" height={340}>
                  <HorizontalBarChartV3 data={repositoryData} />
                </ChartCardV3>
                <ChartCardV3 title="Department" height={340}>
                  <HorizontalBarChartV3 data={departmentData} />
                </ChartCardV3>
                <ChartCardV3 title="Information Size" height={340}>
                  <VerticalBarChartV3 buckets={informationSizeData.buckets} values={informationSizeData.values} />
                </ChartCardV3>
              </Box>

              {/* Row 4: Connection */}
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr 1.4fr', gap: 2 }}>
                <ChartCardV3 title="Connection" height={300}>
                  <HorizontalBarChartV3 data={connectionData} />
                </ChartCardV3>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
