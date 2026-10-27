import { sizes } from "../palette";
import { Components, Theme } from "@mui/material/styles";

export const MuiButtonOverrides: Components<Theme>["MuiButton"] = {
  defaultProps: {
    color: "primary",
    variant: "contained",
    disableElevation: true,
  },
  variants: [
    {
      props: { size: "small" },
      style: ({ theme }) => ({
        fontSize: theme.spacing(1.75),
        borderRadius: sizes.borderRadius.small,
        minHeight: sizes.inputHeightSize.small,
        paddingTop: sizes.inputPadding.small,
        paddingBottom: sizes.inputPadding.small,
        "&.MuiButton-text": {
          paddingLeft: theme.spacing(1.25),
          paddingRight: theme.spacing(1.25)
        },
        "& .MuiButton-icon": {
          fontSize: theme.spacing(2.5),
        },
        // Padding, border-radius, and min-width for different shapes
        "&.MuiButton-shape-round": {
          padding: sizes.padding.smallCircle,
          borderRadius: `${sizes.borderRadius.circle} !important`,
          minWidth: `${sizes.rounddimension.small} !important`,
          height: sizes.rounddimension.small,
        },
        "&.MuiButton-shape-square": {
          padding: sizes.padding.smallCircle,
          borderRadius: sizes.borderRadius.square,
          minWidth: `${sizes.dimension.small} !important`,
          height: sizes.rounddimension.small,
        },
      }),
    },
    {
      props: { size: "medium" },
      style: ({ theme}) => ({
        borderRadius: sizes.borderRadius.medium,
        minHeight: sizes.inputHeightSize.medium,
        paddingTop: sizes.inputPadding.medium,
        paddingBottom: sizes.inputPadding.medium,
        "&.MuiButton-text": {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2)
        },
        "& .MuiButton-icon": {
          fontSize: theme.spacing(2.5),
        },
        // Padding, border-radius, and min-width for different shapes
        "&.MuiButton-shape-round": {
          padding: sizes.padding.mediumCircle,
          borderRadius: sizes.borderRadius.circle,
          minWidth: `${sizes.rounddimension.medium} !important`,
          height: sizes.rounddimension.medium,
        },
        "&.MuiButton-shape-square": {
          padding: sizes.padding.mediumCircle,
          borderRadius: sizes.borderRadius.square,
          minWidth: `${sizes.dimension.medium} !important`,
          height: sizes.rounddimension.medium,
        },
      }),
    },
    {
      props: { size: "large" },
      style: ({ theme }) => ({
        fontSize: theme.spacing(2),
        borderRadius: sizes.borderRadius.medium,
        minHeight: sizes.inputHeightSize.large,
        paddingTop: sizes.inputPadding.large,
        paddingBottom: sizes.inputPadding.large,
        "&.MuiButton-text": {
          paddingLeft: theme.spacing(2.75),
          paddingRight: theme.spacing(2.75)
        },
        "& .MuiButton-icon": {
          fontSize: theme.spacing(3),
        },
        // Padding, border-radius, and min-width for different shapes
        "&.MuiButton-shape-round": {
          padding: sizes.padding.largeCircle,
          borderRadius: sizes.borderRadius.circle,
          minWidth: `${sizes.rounddimension.large} !important`,
          height: sizes.rounddimension.large,
        },
        "&.MuiButton-shape-square": {
          padding: sizes.padding.largeCircle,
          borderRadius: sizes.borderRadius.square,
          minWidth: `${sizes.dimension.large} !important`,
          height: sizes.rounddimension.large,
        },
      }),
    },
  ],
  styleOverrides:  {
    root: {
      minWidth: "0 !important"
    },
  },
};
