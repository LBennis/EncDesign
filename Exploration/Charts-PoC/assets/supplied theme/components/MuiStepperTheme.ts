import { Components, Theme } from "@mui/material/styles";
import { stepLabelClasses } from "@mui/material";

export const MuiStepLabelOverrides: Components<Theme>["MuiStepLabel"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      maxWidth: theme.spacing(28),
      minWidth: theme.spacing(16),
      "& .MuiStepLabel-iconContainer": {
        "& .stepper-icon": {
          backgroundColor: theme.palette.bleyOpaque[10],
          width: theme.spacing(7),
          height: theme.spacing(7),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
        },
        [`&.${stepLabelClasses.completed} .stepper-icon`]: {
          background: theme.palette.primary.main,
          color: theme.palette.common.white,
        },
        [`&.${stepLabelClasses.active} .stepper-icon`]: {
          background: theme.palette.success.main,
          color: theme.palette.common.white,
        },
        [`& .Mui-warning.stepper-icon`]: {
          backgroundColor: theme.palette.warning.main,
          color: theme.palette.common.white,
        },
        [`&.${stepLabelClasses.error} .stepper-icon`]: {
          backgroundColor: theme.palette.error.main,
          color: theme.palette.common.white,
        },
      },
    }),
  },
};
