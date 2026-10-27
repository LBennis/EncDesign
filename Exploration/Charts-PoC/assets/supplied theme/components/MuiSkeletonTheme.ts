import { Components, Theme } from "@mui/material/styles";

export const MuiSkeletonOverrides: Components<Theme>["MuiSkeleton"] = {
	styleOverrides: {
		root: ({ theme }) => ({
			backgroundColor: theme.palette.bleyOpaque[10]
    })
	},
};
