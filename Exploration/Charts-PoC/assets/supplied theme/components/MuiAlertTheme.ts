import { Components, Theme } from "@mui/material/styles";

export const MuiAlertOverrides: Components<Theme>["MuiAlert"] = {
    variants: [
        { 
          props: {  variant: "filled"}, 
          style: ({ theme }) => ({
            color: theme.palette.common.white
          })
        },
    ],
};
