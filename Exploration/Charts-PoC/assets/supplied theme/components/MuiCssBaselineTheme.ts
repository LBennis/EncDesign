import { Components, Theme } from "@mui/material/styles";
import { sizes } from "../palette";

export const MuiCssBaselineOverrides: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides: (theme) => ({
    // customize scrollbar
    "::-webkit-scrollbar": {
      width: theme.spacing(1),
      height: theme.spacing(1),
    },
    "::-webkit-scrollbar-track": {
      background: theme.palette.background[20],
    },
    "::-webkit-scrollbar-thumb": {
      background: theme.palette.text.disabled,
      borderRadius: sizes.borderRadius.square,
      border: "2px solid transparent",
      backgroundClip: "padding-box",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: theme.palette.grey[700],
    },

    "@media (max-width:1921px)": {
      ":root": {
        fontSize: theme.spacing(1.75),
      },
    },

    "@media (max-width:1281px)": {
      ":root": {
        fontSize: theme.spacing(1.5),
      },
    },

    "@keyframes ai-bg-rotate": {
      "0%": { rotate: "0deg" },
      "66%": { rotate: "180deg", left: "25%" },
      "100%": { rotate: "360deg" },
    },

    "@keyframes infinite-rotate": {
      from: { rotate: "0deg" },
      to: { rotate: "360deg" },
    },

    "&.ai-style": {
      background: "transparent !important",
      position: "relative",
      overflow: "hidden",
      borderColor: `${theme.palette.aiStyle.borderColor} !important`,
      color: `${theme.palette.aiStyle.text} !important`,
      isolation: "isolate",

      "&::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "75%",
        right: 0,
        bottom: 0,
        width: "200%",
        height: "600%",
        background: `${theme.palette.aiStyle.gradientBG} !important`,
        animation: "ai-bg-rotate 3s linear infinite",
        transform: "translate(-50%, -50%)",
        transformOrigin: "0% 0%",
        zIndex: -1,
      },

      "&.MuiButtonBase-root": {
        "&.Mui-disabled": {
          opacity: 0.6,

          "&::after": {
            animation: "none"
          },
          "& .MuiButton-icon,.MuiChip-icon": {
            animation: "none",
          },
        },
        "&:hover": {
          borderColor: `${theme.palette.aiStyle.borderHoverColor} !important`,
        },
      },

      "& .MuiButton-icon,.MuiChip-icon": {
        color: `${theme.palette.aiStyle.accent} !important`,
        animation: "infinite-rotate 3s linear infinite",
      },

      "& .MuiChip-avatar": {
        backgroundColor: `${theme.palette.secondary.main} !important`,
        color: `${theme.palette.common.white} !important`,
      }
    },

    "&.static-ai": {
      "&::after": {
        animation: "none"
      },

      "& .MuiButton-icon,.MuiChip-icon": {
        animation: "none",
      },
    },

    "&.ai-text, &.ai-text span": {
      color: "transparent",
      background: `${theme.palette.aiStyle.gradientBGSaturated}`,
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }
  }),
};
