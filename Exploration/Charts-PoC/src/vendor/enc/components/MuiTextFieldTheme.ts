import { Components, Theme } from "@mui/material/styles";
import { sizes } from '../palette';
import { primitive } from "../palette/primitive";

export const MuiTextFieldOverrides: Components<Theme>["MuiTextField"] = {
  defaultProps: {
    minRows: 3,
    size: "large",
  },
  variants: [
    {
      props: { size: "small" },
      style: {
        input: {
          paddingTop: sizes.inputPadding.small,
          paddingBottom: sizes.inputPadding.small,
        },
      },
    },
    {
      props: { size: "small", multiline: false },
      style: {
        "& .MuiInputBase-root": {
          minHeight: sizes.inputHeightSize.small,
        },
      },
    },
    {
      props: { size: "medium" },
      style: {
        input: {
          paddingTop: sizes.inputPadding.medium,
          paddingBottom: sizes.inputPadding.medium,
        },
      },
    },
    {
      props: { size: "medium", multiline: false },
      style: {
        "& .MuiInputBase-root": {
          minHeight: sizes.inputHeightSize.medium,
        },
      },
    },
    {
      props: { size: "large" },
      style: {
        input: {
          paddingTop: sizes.inputPadding.large,
          paddingBottom: sizes.inputPadding.large,
        },
      },
    },
    {
      props: { size: "large", multiline: false },
      style: {
        "& .MuiInputBase-root": {
          minHeight: sizes.inputHeightSize.large,
        },
      },
    },
    {
      props: { disabled: true },
      style: ({ theme }) => ({
        pointerEvents: "none",
        "& .MuiInputBase-root": {
          background: theme.palette.encStandards.disabled.background,
          "::before": {
            borderBottom: `1px solid ${primitive.bleyOpaque[30]} !important`,
          },
          "fieldset": {
            border: `1px solid ${primitive.bleyOpaque[30]} !important`,
          },
          "& .MuiInputAdornment-root": {
            color: theme.palette.text.disabled,
          }
        }
      })
    },
    {
      props: { variant: "outlined" },
      style: ({ theme }) => ({
        "& .MuiInputBase-root:not(.Mui-error):not(.Mui-disabled)": {
          background: theme.palette.common.white,
          border: 0,
          "&:focus-within": {
            "fieldset": {
              border: `1px solid ${theme.palette.primary.main}`,
            }
          },
          "&:hover": {
            "fieldset": {
              border: `1px solid ${primitive.aqua[400]}`,
            }
          },
          "fieldset": {
            borderWidth: 1,
            "& (:not).MuiInputBase-colorSuccess": {
              borderColor: theme.palette.text.disabled,
            },
          }
        },
      })
    },
    {
      props: { variant: "standard" },
      style: ({ theme }) => ({
        "& .MuiInputBase-root:not(.Mui-error):not(.Mui-disabled)": {
          background: theme.palette.common.white,
          "&:focus-within": {
            "::before": {
              borderBottom: `1px solid ${theme.palette.primary.main}`,
            }
          },
          "&:hover": {
            "::before": {
              borderBottom: `1px solid ${primitive.aqua[400]}`,
            }
          },
          "& (:not).MuiInputBase-colorSuccess": {
            "::before": {
              borderBottom: `1px solid ${theme.palette.text.disabled}`,
            }
          },
          "::after": {
            borderBottom: 0,
          }
        },
      })
    },
    {
      props: { color: "success", variant: "standard" },
      style: ({ theme }) => ({
        "& .MuiInputBase-root": {
          "::before": {
            borderBottom: `1px solid ${theme.palette.primary.main}`,
          }
        },
      })
    },
    {
      props: { multiline: true },
      style: ({ theme }) => ({
        "& .MuiInputBase-root": {
          "& textarea": {
            maxHeight: theme.spacing(92),
            overflowY: "auto !important",
            scrollbarGutter: "stable",
          },
        },
      }),
    },
  ],
};