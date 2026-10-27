import { Components, Theme } from "@mui/material/styles";

export const MuiLinkOverrides: Components<Theme>["MuiLink"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      "&:focus-visible": {
        outlineOffset: theme.spacing(0.5),
        outlineColor: theme.palette.primary.main,
        borderRadius: theme.spacing(0.25),
        outlineWidth: theme.spacing(0.126)
      }
    }),
  },
};
