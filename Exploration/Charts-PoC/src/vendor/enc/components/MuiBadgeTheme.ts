import { Components, Theme } from "@mui/material/styles";

export const MuiBadgeOverrides: Components<Theme>["MuiBadge"] = {
  variants: [
    { 
      props: { color: "default"}, 
      style: ({ theme }) => ({
        "& .MuiBadge-badge": {
          border: `1px solid ${theme.palette.grey[400]}`,
          backgroundColor: theme.palette.common.white
        }
      })
    },
    { 
      props: { variant: "rectangle" }, 
      style: ({ theme }) => ({
        "& .MuiBadge-badge": {
          borderRadius: "2px",
          minWidth: theme.spacing(2),
          height: theme.spacing(2),
          fontSize: "0.625rem",
          padding: "3px 4px",
        }
      }),
    },
    { 
      props: { variant: "rectangleLrg" }, 
      style: ({ theme }) => ({
        "& .MuiBadge-badge": {
          borderRadius: "2px",
          height: theme.spacing(2),
          minWidth: "1.25rem",
          fontSize: "0.813rem",
          padding: "1px 2px",
        }
      }),
    },
    { 
      props: { variant: "square" }, 
      style: () => ({
        "& .MuiBadge-badge": {
          borderRadius: "2px",
          height: "0.5rem",
          minWidth: "0.5rem",
          maxWidth: "0.5rem",
          padding: 0,
        }
      }),
    },
  ],
  styleOverrides: {
    root: {
      "& .MuiBadge-badge": {
        fontFamily: "Arial Narrow",
        fontWeight: "700"
      }
    }
  }
};
