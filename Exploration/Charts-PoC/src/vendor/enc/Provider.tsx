import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme } from "./light.theme";

/**
 * MUI Theme Provider that is used to allow the user to use the MUI theme in their application.
 * @param props The properties for the ECSThemeProvider.
 * @returns The ECSThemeProvider component.
 * @group ECSThemeProvider
 * @category Providers
 */
export const ECSThemeProvider = ({ children }: { children: ReactNode; }) => (
	<ThemeProvider theme={lightTheme}>
		<CssBaseline />
		{children}
	</ThemeProvider>
);
