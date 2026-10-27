import { Components, Theme } from "@mui/material/styles";

export const MuiMenuOverrides: Components<Theme>["MuiMenu"] = {
  styleOverrides: {
    paper: ({ theme }) => ({
      backgroundColor: theme.palette.common.white
    }),

    list: ({ theme }) => ({
      maxHeight: theme.spacing(30),
      "& .MuiListSubheader-root": {
        backgroundColor: "transparent",
      },
    })
  },
};