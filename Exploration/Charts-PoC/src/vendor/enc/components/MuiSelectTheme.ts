import { Components, Theme } from "@mui/material/styles";
import { sizes } from "../palette";

export const MuiSelectOverrides: Components<Theme>['MuiSelect'] = {
  defaultProps: {
    size: "large",
  },
  variants: [
    {
      props: { size: "small" },
      style: {
        "& .MuiInputBase-input": {
          minHeight: `${sizes.inputHeightSize.small} !important`,
          paddingTop: 0,
          paddingBottom: 0,
        },
      }
    },
    {
      props: { size: "medium" },
      style: {
        "& .MuiInputBase-input": {
          minHeight: `${sizes.inputHeightSize.medium} !important`,
          paddingTop: 0,
          paddingBottom: 0,
        },
      }
    },
    {
      props: { size: "large" },
      style: {
        "& .MuiInputBase-input": {
          minHeight: `calc(${sizes.inputHeightSize.large} - ${sizes.inputPadding.large} - ${sizes.inputPadding.large}) !important`,
          paddingTop: sizes.inputPadding.large,
          paddingBottom: sizes.inputPadding.large,
        },
      }
    },
    {
      props: { disabled: true },
      style: ({ theme }) => ({
        pointerEvents: "none",
        "& .MuiInputBase-input": {
          background: theme.palette.encStandards.disabled.background,
        },
      })
    }
  ],
  styleOverrides: {
    root: ({ theme }) => ({
      "&.Mui-disabled:before": {
        borderBottomStyle: "solid",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderWidth: "1px",
      },
      "& .MuiInputBase-input": {
          display: "flex",
          alignItems: "center"
        },
      "&::after": {
        borderWidth: "1px",
      },
      "&:hover": {
        "&:not(.Mui-disabled, .Mui-error):before": {
          borderWidth: "1px",
          borderColor: theme.palette.primary[400],
        },
        "&:not(.Mui-disabled, .Mui-error) .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary[400],
        },
      },
    }),
    select: {
      width: "100%",
      "&:focus": {
        backgroundColor: "unset"
      }
    },
    icon: ({ theme }) => ({
      color: theme.palette.primary.main,
      fontSize: theme.spacing(3),
      height: "1.5rem",
    }),
  },
}