// Chart color helpers that pull directly from the supplied customer theme,
// so the charts render in the customer's brand palette.
export const seriesColors = (theme) => [
  theme.palette.primary.main, // aqua 800
  theme.palette.secondary.main, // grape 600
  theme.palette.navy[400],
  theme.palette.warning.main, // juice
  theme.palette.error.main, // burnt pink
  theme.palette.primary[500] // aqua 500
]

export const donutRamp = (theme) => [
  theme.palette.primary.dark,
  theme.palette.primary.main,
  theme.palette.primary[600],
  theme.palette.primary[400],
  theme.palette.navy[300]
]
