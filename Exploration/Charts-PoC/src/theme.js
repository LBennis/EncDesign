import { createTheme } from '@mui/material/styles'

// Palette sampled from the existing Repository Explorer dashboard
export const palette = {
  pageBg: '#eef1f5',
  headerBar: '#f4f6fa',
  kpiBlue: '#35a9db',
  kpiBlueText: '#ffffff',
  darkCard: '#3f4854',
  cadenceGreen: '#37d6a0',
  cadenceWhite: '#ffffff',
  // donut blue ramp (light -> dark navy)
  blueRamp: ['#bfe3f2', '#7ecbe6', '#3aa8d8', '#1f5fb0', '#211f5c'],
  // horizontal bar indigo
  indigo: '#43406e',
  // information size teal
  teal: '#12a2a2',
  textMuted: '#7b8794',
  cardBorder: '#e2e6ec'
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: palette.kpiBlue },
    background: { default: palette.pageBg }
  },
  typography: {
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif'
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          border: `1px solid ${palette.cardBorder}`,
          boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
        }
      }
    }
  }
})

export default theme
