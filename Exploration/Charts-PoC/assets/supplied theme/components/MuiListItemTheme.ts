import { listItemButtonClasses } from "@mui/material/ListItemButton";
import { Components, Theme } from "@mui/material/styles";

export const MuiListOverrides: Components<Theme>['MuiList'] = {
  defaultProps: {
    variant: "primary",
  },
  variants: [
    {
      props: { variant: "primary" },
      style: ({ theme }) => ({
        [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
          ...theme.palette.encStandards.selected.primary,
        },
      }),
    },
    {
      props: { variant: "secondary" },
      style: ({ theme }) => ({
        [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
          ...theme.palette.encStandards.selected.secondary,
        },
      }),
    },
  ],
}

export const MuiListItemButtonOverrides: Components<Theme>['MuiListItemButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.palette.encStandards.clear,
    }),
  },
}

export const MuiListItemIconOverrides: Components<Theme>['MuiListItemIcon'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: "inherit",
      minWidth: 0,
      marginRight: theme.spacing(2)
    }),
  },
}