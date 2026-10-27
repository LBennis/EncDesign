import { Components, Theme } from "@mui/material/styles";
import { sizes } from "../palette";

export const MuiBreadcrumbsOverrides: Components<Theme>["MuiBreadcrumbs"] = {
  styleOverrides: {
    root: ({ theme }) => ({
			color: theme.palette.grey[800],
      "& .MuiBreadcrumbs-ol": {
        minHeight: sizes.dimension.small
      },
      "& .MuiBreadcrumbs-li": {
         "&:last-of-type": {
          "& .MuiLink-root": {
            color: theme.palette.text.primary,
            cursor: "default",
          }
         }
      }, 
      "& .MuiLink-root": {
        color: theme.palette.grey[800],
        textDecoration: "none",
        cursor: "pointer",
        maxWidth: "20rem",
        display: "block",
      },
      "& .MuiIconButton-root": {
        color: theme.palette.grey[800],
      }
		}),
  }
}