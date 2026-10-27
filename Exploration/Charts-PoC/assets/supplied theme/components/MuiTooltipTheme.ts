import { Components, Theme } from "@mui/material/styles";

export const MuiTooltipOverrides: Components<Theme>["MuiTooltip"] = {
  defaultProps: {
    arrow: true,
    enterDelay: 200,
  },
  styleOverrides: {
    tooltip: ({ theme }) => ({
      ...theme.typography.body2,
      color: theme.palette.common.white,
      backgroundColor: theme.palette.navy[700],
      maxWidth: "31rem",
      maxHeight: "15rem",
      WebkitLineClamp: 13,
      WebkitBoxOrient: 'vertical',
      display: "-webkit-box",
      textOverflow: "ellipsis",
    }),
    arrow: ({ theme }) => ({
      "&:before": {
        backgroundColor: theme.palette.navy[700],
      },
    }),
  },
};
