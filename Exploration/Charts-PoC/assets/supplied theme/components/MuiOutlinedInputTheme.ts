import { Components, Theme } from "@mui/material/styles";
import { sizes } from "../palette";

export const MuiOutlinedInputOverrides: Components<Theme>["MuiOutlinedInput"] =
  {
    variants: [
      {
        props: { size: "small" },
        style: {
          "&.MuiSelect-root": {
            height: sizes.inputHeightSize.small,
            paddingTop: sizes.inputPadding.small,
            paddingBottom: sizes.inputPadding.small,
          },
        },
      },
      {
        props: { size: "medium" },
        style: {
          "&.MuiSelect-root": {
            height: sizes.inputHeightSize.medium,
            paddingTop: sizes.inputPadding.medium,
            paddingBottom: sizes.inputPadding.medium,
          },
        },
      },
      {
        props: { size: "large" },
        style: {
          "&.MuiSelect-root": {
            height: sizes.inputHeightSize.large,
            paddingTop: sizes.inputPadding.large,
            paddingBottom: sizes.inputPadding.large,
          },
        },
      },
    ],
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.common.white,
        "& > .MuiSelect-select": {
          paddingTop: 0,
          paddingBottom: 0,
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: `1px solid ${theme.palette.primary[400]}`,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: `1px solid ${theme.palette.primary.main}`,
        },
      }),
    },
  };
