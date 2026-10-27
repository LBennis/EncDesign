import { Components, Theme } from "@mui/material/styles";

export const MuiAvatarOverrides: Components<Theme>["MuiAvatar"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.bodySmall,
    }),
  },
};
