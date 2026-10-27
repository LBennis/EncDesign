import { Components, Theme } from "@mui/material/styles";
import { sizes } from "../palette";
import { toggleButtonGroupClasses } from "@mui/material/ToggleButtonGroup";

export const MuiToggleButtonGroupOverrides: Components<Theme>["MuiToggleButtonGroup"] =
  {
    defaultProps: {
      size: "small",
      color: "primary",
      exclusive: true,
    },
    variants: [
      {
        props: { size: "small" },
        style: ({ theme }) => ({
          [`& .${toggleButtonGroupClasses.grouped}`]: {
            minHeight: sizes.inputHeightSize.small,
            paddingTop: sizes.inputPadding.small,
            paddingBottom: sizes.inputPadding.small,
            paddingInline: theme.spacing(1),
          },
        }),
      },
      {
        props: { size: "medium" },
        style: ({ theme }) => ({
          [`& .${toggleButtonGroupClasses.grouped}`]: {
            minHeight: sizes.inputHeightSize.medium,
            paddingTop: sizes.inputPadding.small,
            paddingBottom: sizes.inputPadding.small,
            paddingInline: theme.spacing(2),
          },
        }),
      },
      {
        props: { size: "large" },
        style: ({ theme }) => ({
          [`& .${toggleButtonGroupClasses.grouped}`]: {
            fontSize: theme.spacing(2),
            minHeight: sizes.inputHeightSize.large,
            paddingTop: sizes.inputPadding.small,
            paddingBottom: sizes.inputPadding.small,
            paddingInline: theme.spacing(2),
          },
        }),
      },
    ],
    styleOverrides: {
      root: ({ theme }) => ({
        [`& :not(:disabled).${toggleButtonGroupClasses.grouped}`]: {
          border: 0,
          color: theme.palette.primary.main,
          gap: theme.spacing(1),
        },
        [`& .${toggleButtonGroupClasses.grouped}.${toggleButtonGroupClasses.disabled}`]:
          {
            border: 0,
            gap: theme.spacing(1),
          },
        [`& .${toggleButtonGroupClasses.lastButton}`]: {
          marginLeft: 0,
        },
        [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonGroupClasses.disabled}`]:
          {
            border: 0,
          },
      }),
    },
  };
