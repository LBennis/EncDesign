import { Components, Theme } from "@mui/material/styles";

export const MuiPopperOverrides: Components<Theme>["MuiPopper"] = {
	styleOverrides: {
		root: ({ theme }) => ({
			"& .date-time-dialog": {
				"& .MuiDialogActions-root": {
					padding: theme.spacing(1),
				},
				"& .MuiMultiSectionDigitalClockSection-root:after": {
					height: "unset",
				},
				"& .MuiMultiSectionDigitalClockSection-root": {
					"& .MuiMenuItem-root:hover": {
						color: theme.palette.info.main,
					},
					"& .MuiMenuItem-root.Mui-selected:hover": {
						color: theme.palette.common.white,
					},
				},
				"& .MuiClock-squareMask": {
					background: theme.palette.common.white,
				},
			},
		}),
	},
};
