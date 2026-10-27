import { Components, Theme } from "@mui/material/styles";
import { sizes } from "../palette";

// Individual Tab components
export const MuiTabOverrides: Components<Theme>["MuiTab"] = {
  styleOverrides: {
    root: {
      textTransform: "none",
      lineHeight: 1,
      minHeight: `${sizes.inputHeightSize.medium} !important`,
      paddingTop: sizes.inputPadding.medium,
      paddingBottom: sizes.inputPadding.medium,
    },
  },
};

// Tab wrapper component
export const MuiTabsOverrides: Components<Theme>["MuiTabs"] = {
  styleOverrides: {
    root: {
      minHeight: `${sizes.inputHeightSize.medium} !important`,
    },
  },
};
