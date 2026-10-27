import { Components, Theme } from "@mui/material/styles";
import { primitive } from "../palette/primitive";

export const MuiChipOverrides: Components<Theme>["MuiChip"] = {
  defaultProps: {
    variant: "outlined",
  },
  styleOverrides: {
    root: ({ theme }) => ({
      "& .MuiChip-label": {
        flexGrow: 1
      },
      maxWidth: theme.spacing(64),
      "&.MuiChip-colorDefault": {
        "& .MuiChip-avatar": {
          backgroundColor: primitive.bley[600],
          color: theme.palette.common.white
        }
      },
      "&.MuiChip-colorClear": {
        "& .MuiChip-avatar": {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white
        }
      },
    }),
  },
  variants: [
    {
      props: { clickable: false },
      style: {
        pointerEvents: "none",
      }
    },
    {
      props: { variant: "outlined" },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.common.white,
        "& .MuiChip-label": {
          color: theme.palette.text.primary,
        },
        "&.MuiButtonBase-root:hover": {
          // Ensures that bg is always white for all colors
          backgroundColor: theme.palette.common.white,
          color: theme.palette.text.primary,
        },
        "& .MuiChip-deleteIcon": {
          color: theme.palette.text.disabled,
          "&:hover": {
            color: theme.palette.text.secondary
          }
        },
        "&.MuiChip-colorPrimary": {
          borderColor: theme.palette.aquaOpaque[20],
          "&.MuiChip-clickable:hover": {
            borderColor: theme.palette.aquaOpaque[30],
          },
          "--avatar-bg": theme.palette.primary.main,
          "--icon-bg": theme.palette.primary.main
        },
        "&.MuiChip-colorInfo": {
          borderColor: theme.palette.aquaOpaque[20],
          "&.MuiChip-clickable:hover": {
            borderColor: theme.palette.aquaOpaque[30],
          },
          "--avatar-bg": theme.palette.info.main,
          "--icon-bg": theme.palette.info.main
        },
        "&.MuiChip-colorDefault": {
          borderColor: theme.palette.bleyOpaque[20],
          "&.MuiChip-clickable:hover": {
            borderColor: theme.palette.bleyOpaque[30],
          }
        },
        "&.MuiChip-colorDarkGrey": {
          borderColor: theme.palette.darkGrey.light,
          "&.MuiChip-clickable:hover": {
            borderColor: theme.palette.darkGrey.main,
          },
          "--avatar-bg": theme.palette.darkGrey.main,
          "--icon-bg": theme.palette.darkGrey.main
        },
        "&.MuiChip-colorSecondary": {
          borderColor: theme.palette.grapeOpaque[10],
          "&.MuiChip-clickable:hover": {
            borderColor: theme.palette.grapeOpaque[20],
          },
          "--avatar-bg": theme.palette.secondary.main,
          "--icon-bg": theme.palette.secondary.main
        },
        "&.MuiChip-colorError": {
          borderColor: theme.palette.burntPinkOpaque[10],
          "&.MuiChip-clickable:hover": {
            borderColor: theme.palette.burntPinkOpaque[20],
          },
          "--avatar-bg": theme.palette.error.main,
          "--icon-bg": theme.palette.error.main
        },
        "&.MuiChip-colorWarning": {
          borderColor: theme.palette.juiceOpaque[20],
          "&.MuiChip-clickable:hover": {
            borderColor: theme.palette.juiceOpaque[30],
          },
          "--avatar-bg": theme.palette.warning.main,
          "--icon-bg": theme.palette.warning.main
        },
        "&.MuiChip-colorSuccess": {
          borderColor: theme.palette.aquaLightOpaque[20],
          "&.MuiChip-clickable:hover": {
            borderColor: theme.palette.aquaLightOpaque[30],
          },
          "--avatar-bg": theme.palette.success.main,
          "--icon-bg": theme.palette.success.main
        },
        "&.MuiChip-colorClear": {
          backgroundColor: "transparent",
          borderColor: "transparent",
          "&.MuiChip-clickable:hover": {
            backgroundColor: "transparent",
            borderColor: theme.palette.bleyOpaque[20]
          },
          "--icon-bg": theme.palette.primary.main
        },
        "&.MuiChip-colorPrimary, &.MuiChip-colorSecondary, &.MuiChip-colorError, &.MuiChip-colorWarning, &.MuiChip-colorInfo, &.MuiChip-colorSuccess, &.MuiChip-colorDarkGrey": {
          "& .MuiChip-avatar": {
            backgroundColor: "var(--avatar-bg)",
            color: theme.palette.common.white
          }
        },
        "& .MuiChip-icon": {
          color: "var(--icon-bg)"
        }
      }),
    },
    {
      props: { variant: "filled" },
      style: ({ theme }) => ({
        border: "1px solid transparent",
        "&.MuiChip-colorDefault": {
          backgroundColor: theme.palette.bleyOpaque[10],
          "&.MuiChip-clickable:hover": {
            backgroundColor: theme.palette.bleyOpaque[20]
          }
        },
        "&.MuiChip-colorClear": {
          backgroundColor: "transparent",
          "&.MuiChip-clickable:hover": {
            backgroundColor: primitive.bley[300]
          },
          "--icon-bg": theme.palette.primary.main
        },
        "&.MuiChip-colorPrimary, &.MuiChip-colorSecondary, &.MuiChip-colorError, &.MuiChip-colorWarning, &.MuiChip-colorInfo, &.MuiChip-colorSuccess, &.MuiChip-colorDarkGrey": {
          "& .MuiChip-avatar": {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.text.primary
          }
        },
        "& .MuiChip-icon": {
          color: "var(--icon-bg)"
        }
      }),
    },
    {
      props: { size: "small" },
      style: ({ theme }) => ({
        "& .MuiChip-iconSmall": {
          fontSize: theme.spacing(2),
          marginLeft: theme.spacing(0.5),
          marginRight: theme.spacing(-0.5),
        },
        "& .MuiChip-labelSmall": {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          padding: "0",
        },
        "& .MuiChip-deleteIconSmall": {
          margin: theme.spacing(0, 0.5, 0, 0),
        },
      }),
    },
    {
      props: { size: "medium" },
      style: ({ theme }) => ({
        "& .MuiChip-iconMedium": {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(-1),
        },
        "& .MuiChip-labelMedium": {
          paddingLeft: theme.spacing(1.5),
          paddingRight: theme.spacing(1.5),
        },
        "& .MuiChip-deleteIconMedium": {
          margin: theme.spacing(0, 0.5, 0, -1),
        },
      }),
    },
    {
      props: { disabled: true },
      style: {
        opacity: "0.6 !important"
      }
    }
  ],
};
