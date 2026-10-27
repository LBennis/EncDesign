import { Components, Theme } from "@mui/material/styles";

export const MuiFormHelperTextOverrides: Components<Theme>["MuiFormHelperText"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontFamily: "Avenir Roman",
      fontSize: theme.spacing(1.5),
      fontWeight: 400,
      lineHeight: 1.4,
      marginLeft: 0
    }),
  },
};