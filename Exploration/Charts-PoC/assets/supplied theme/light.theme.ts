import { SimplePaletteColorOptions, SxProps, Theme, ThemeOptions, createTheme } from "@mui/material/styles";
import {
  MuiAccordionOverrides,
  MuiAccordionSummaryOverrides,
  MuiAlertOverrides,
  MuiAutocompleteOverrides,
  MuiAvatarOverrides,
  MuiBadgeOverrides,
  MuiBreadcrumbsOverrides,
  MuiButtonOverrides,
  MuiChipOverrides,
  MuiCssBaselineOverrides,
  MuiDataGridOverrides,
  MuiFormHelperTextOverrides,
  MuiLinkOverrides,
  MuiListItemButtonOverrides,
  MuiListItemIconOverrides,
  MuiListOverrides,
  MuiMenuOverrides,
  MuiOutlinedInputOverrides,
  MuiPopperOverrides,
  MuiRadioOverrides,
  MuiSelectOverrides,
  MuiSkeletonOverrides,
  MuiStepLabelOverrides,
  MuiTabOverrides,
  MuiTabsOverrides,
  MuiTextFieldOverrides,
  MuiToggleButtonGroupOverrides,
  MuiTooltipOverrides,
} from "./components";
import { primitive } from "./palette/primitive";
import type {} from "@mui/x-data-grid/themeAugmentation";

export type Color = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
};

declare module "@mui/material/styles" {
  // type for holding colours of repositories and other non-encompaas branding
  type Brands = {
    sharePointOnline: string;
    fileSystem: string;
    contentManager: string;
    exchange: string;
    otherRepository: string;
    microsoft365: string;
    microsoftTeams: string;
  };

  // type for AI styles
  type AIStyle = {
    gradientBG: string;
    gradientBGSaturated: string;
    borderColor: string;
    borderHoverColor: string;
    text: string;
    accent: string;
  };

  // type for defining standard encompaas styles for interactable elements, apply them to components if/when necessary
  type EncStandards = {
    /**
     * The common styles.
     * These are available to be used directly here, but they are also all applied to each of white, outline and clear as well.
     * They contain handling for defaults, focus and disabled states
     * */
    common: SxProps<Theme>;
    /** styles that give an element a solid white background */
    white: SxProps<Theme>;
    /** styles that give an element an outline */
    outline: SxProps<Theme>;
    /** styles that give an element transparency */
    clear: SxProps<Theme>;
    /** styles for the disabled state */
    disabled: SxProps<Theme> & { background: string };
    /** styles for selected states */
    selected: {
      /** styles for the primary selected state */
      primary: SxProps<Theme>;
      /** styles for the secondary selected state */
      secondary: SxProps<Theme>;
    };
    /** accent colors */
    accent: {
      /** default accent color */
      default: string;
      /** primary accent color */
      primary: string;
    };
    /** standards for the grid columns */
    gridColumns: {
      /** grid column size standards */
      sizes: {
        /** grid column size for small columns  */
        small: {
          /** minimum width of small columns, in rem */
          minWidth: string;
          /** maximum width of small columns, in rem */
          maxWidth: string;
        };
        /** grid column size for medium columns */
        medium: {
          /** minimum width of medium columns, in rem */
          minWidth: string;
        };
        /** grid column size for large columns */
        large: {
          /** maximum width of large columns, in rem */
          minWidth: string;
        };
      };
    };
  };

  // extend existing palette definition
  interface Palette {
    grey: Color;
    darkGrey: PaletteColor;
    navy: Color;
    brands: Brands;
    navyOpaque: Color;
    bleyOpaque: Color;
    encStandards?: EncStandards;
    aquaLightOpaque: Color;
    aquaOpaque: Color;
    grapeOpaque: Color;
    burntPinkOpaque: Color;
    juiceOpaque?: Color;
    aiStyle: AIStyle;
  }

  // extend existing palette configuration definition
  interface PaletteOptions {
    grey?: Partial<Color>;
    darkGrey?: Partial<PaletteColor>;
    navy?: Partial<Color>;
    navyOpaque?: Partial<Color>;
    brands?: Partial<Brands>;
    bleyOpaque?: Partial<Color>;
    encStandards?: EncStandards;
    aquaLightOpaque: Partial<Color>;
    aquaOpaque?: Partial<Color>;
    grapeOpaque?: Partial<Color>;
    burntPinkOpaque?: Partial<Color>;
    juiceOpaque?: Partial<Color>;
    aiStyle?: Partial<AIStyle>;
  }

  // extend common colours definition
  interface CommonColors {
    lightGreyBG: string; // light grey color to be used when we want grey backgrounds
  }

  interface TypographyVariants {
    body3: React.CSSProperties;
    bodySmall: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
  }
  interface PaletteColor {
    [key: number]: string;
  }
}

declare module "@mui/material/Badge" {
  interface BadgePropsVariantOverrides {
    square: true;
    rectangle: true;
    rectangleLrg: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    darkGrey: true;
    clear: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

declare module "@mui/material/Autocomplete" {
  interface AutocompletePropsSizeOverrides {
    large: true;
  }
}

declare module "@mui/material/InputBase" {
  interface InputBasePropsSizeOverrides {
    large: true;
  }
}

declare module "@mui/material/List" {
  interface ListOwnProps {
    variant?: "primary" | "secondary";
  }
}

declare module "@mui/material/Divider" {
  interface DividerPropsVariantOverrides {
    menu: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    large: true;
  }
}

declare module "@mui/material/Autocomplete" {
  interface AutocompletePropsSizeOverrides {
    large: true;
  }
}

const options: ThemeOptions = {
  palette: {
    mode: "light",
    common: {
      white: primitive.common.white,
      black: primitive.common.black,
      lightGreyBG: primitive.common.lightGreyBG,
    },
    primary: {
      main: primitive.aqua[800],
      light: primitive.aqua[700],
      dark: primitive.aqua[900],
      contrastText: primitive.common.white,
      ...primitive.aqua,
    },
    secondary: {
      main: primitive.grape[600],
      light: primitive.grape[500],
      dark: primitive.grape[800],
      contrastText: primitive.common.white,
      ...primitive.grape,
    },
    error: {
      main: primitive.burntPink[800],
      light: primitive.burntPink[700],
      dark: primitive.burntPink[900],
      contrastText: primitive.common.white,
      ...primitive.burntPink,
    },
    warning: {
      main: primitive.juice[800],
      light: primitive.juice[700],
      dark: primitive.juice[900],
      contrastText: primitive.common.white,
      ...primitive.juice,
    },
    info: {
      main: primitive.aqua[800],
      light: primitive.aqua[600],
      dark: primitive.aqua[900],
      contrastText: primitive.common.white,
      ...primitive.aqua,
    },
    success: {
      main: primitive.aqua[700],
      light: primitive.aqua[600],
      dark: primitive.aqua[900],
      contrastText: primitive.common.white,
      ...primitive.aqua,
    },
    grey: primitive.bley,
    darkGrey: {
      main: primitive.navy[200],
      light: primitive.navy[100],
      dark: primitive.navy[300],
      contrastText: primitive.common.white,
      ...primitive.navy,
    },
    navy: primitive.navy,
    navyOpaque: primitive.navyOpaque,
    bleyOpaque: primitive.bleyOpaque,
    aquaLightOpaque: primitive.aquaLightOpaque,
    aquaOpaque: primitive.aquaOpaque,
    grapeOpaque: primitive.grapeOpaque,
    burntPinkOpaque: primitive.burntPinkOpaque,
    juiceOpaque: primitive.juiceOpaque,
    text: {
      primary: primitive.navy[900],
      secondary: primitive.bley[800],
      disabled: primitive.bley[600],
    },
    background: {
      default: primitive.bley[400],
      paper: primitive.bley[100],
    },
    divider: primitive.bley[400],
    action: {
      disabledBackground: primitive.bleyOpaque[10],
      disabled: primitive.bley[600],
    },
    brands: {
      sharePointOnline: primitive.aqua[900],
      fileSystem: "#F9A825",
      contentManager: "#4078BC",
      exchange: "#0078D4",
      otherRepository: primitive.aqua[700],
      microsoft365: "#D83B01",
      microsoftTeams: "#5059C9",
    },
    aiStyle: {
      gradientBG: `conic-gradient(from 33deg, ${primitive.aqua[50]} 0%, ${primitive.grape[50]} 50%, ${primitive.aqua[50]} 100%)`,
      gradientBGSaturated: `conic-gradient(from 33deg, ${primitive.aqua[800]} 0%, ${primitive.grape[700]} 50%, ${primitive.aqua[800]} 100%)`,
      borderColor: primitive.grapeOpaque[10],
      borderHoverColor: primitive.grapeOpaque[20],
      text: primitive.navy[900],
      accent: primitive.grape[600],
    },
  },
  spacing: (abs: number) => `${0.5 * abs}rem` as string,
  shadows: [
    "none",
    "0px 1px 1px 0px rgba(20,37,61,0.08), 0px 0px 2px 0px rgba(20,37,61,0.08), 0px 2px 6px 0px rgba(20,37,61,0.08)",
    "0px 1px 1px 0px rgba(20,37,61,0.08), 0px 0px 2px 0px rgba(20,37,61,0.08), 0px 2px 8px 0px rgba(20,37,61,0.08)",
    "0px 1px 2px 0px rgba(20,37,61,0.08), 0px 2px 4px 0px rgba(20,37,61,0.08), 0px 4px 8px 0px rgba(20,37,61,0.08)",
    "0px 1px 4px 0px rgba(20,37,61,0.08), 0px 4px 8px 0px rgba(20,37,61,0.08), 0px 4px 12px 0px rgba(20,37,61,0.08)",
    "0px 2px 4px 0px rgba(20,37,61,0.08), 0px 4px 8px 0px rgba(20,37,61,0.08), 0px 2px 16px 0px rgba(20,37,61,0.08)",
    "0px 2px 8px 0px rgba(20,37,61,0.08), 0px 6px 12px 0px rgba(20,37,61,0.08), 0px 4px 24px 0px rgba(20,37,61,0.08)",
    "0px 4px 6px 0px rgba(20,37,61,0.08), 0px 2px 12px 0px rgba(20,37,61,0.08), 0px 8px 24px 0px rgba(20,37,61,0.08)",
    "0px 4px 8px 0px rgba(20,37,61,0.08), 0px 2px 18px 0px rgba(20,37,61,0.08), 0px 12px 24px 0px rgba(20,37,61,0.08)",
    "0px 2px 8px 0px rgba(20,37,61,0.08), 0px 16px 20px 0px rgba(20,37,61,0.08), 0px 0px 32px 0px rgba(20,37,61,0.08)",
    "0px 2px 8px 0px rgba(20,37,61,0.08), 0px 12px 24px 0px rgba(20,37,61,0.08), 0px 0px 32px 0px rgba(20,37,61,0.08)",
    "0px 2px 8px 0px rgba(20,37,61,0.08), 0px 8px 32px 0px rgba(20,37,61,0.08), 0px 8px 40px 0px rgba(20,37,61,0.08)",
    "0px 2px 8px 0px rgba(20,37,61,0.08), 0px 8px 32px 0px rgba(20,37,61,0.08), 0px 8px 40px 0px rgba(20,37,61,0.08)",
    "0px 4px 12px 0px rgba(20,37,61,0.08), 0px 8px 32px 0px rgba(20,37,61,0.08), 0px 8px 40px 0px rgba(20,37,61,0.08)",
    "0px 0px 12px 0px rgba(20,37,61,0.08), 0px 20px 32px 0px rgba(20,37,61,0.08), 0px 8px 40px 0px rgba(20,37,61,0.08)",
    "0px 0px 12px 0px rgba(20,37,61,0.08), 0px 20px 32px 0px rgba(20,37,61,0.08), 0px 8px 40px 0px rgba(20,37,61,0.08)",
    "0px 0px 12px 0px rgba(20,37,61,0.08), 0px 20px 32px 0px rgba(20,37,61,0.08), 0px 0px 48px 0px rgba(20,37,61,0.08)",
    "0px 8px 12px 0px rgba(20,37,61,0.08), 0px 20px 32px 0px rgba(20,37,61,0.08), 0px 0px 48px 0px rgba(20,37,61,0.08)",
    "0px 8px 12px 0px rgba(20,37,61,0.08), 0px 20px 32px 0px rgba(20,37,61,0.08), 0px 16px 56px 0px rgba(20,37,61,0.08)",
    "0px 8px 12px 0px rgba(20,37,61,0.08), 0px 20px 32px 0px rgba(20,37,61,0.08), 0px 16px 56px 0px rgba(20,37,61,0.08)",
    "0px 8px 12px 0px rgba(20,37,61,0.08), 0px 20px 32px 0px rgba(20,37,61,0.08), 0px 16px 56px 0px rgba(20,37,61,0.08)",
    "0px 8px 12px 0px rgba(20,37,61,0.08), 0px 20px 32px 0px rgba(20,37,61,0.08), 0px 16px 56px 0px rgba(20,37,61,0.08)",
    "0px 8px 12px 0px rgba(20,37,61,0.08), 0px 20px 32px 0px rgba(20,37,61,0.08), 0px 16px 56px 0px rgba(20,37,61,0.08)",
    "0px 8px 12px 0px rgba(20,37,61,0.08), 0px 20px 32px 0px rgba(20,37,61,0.08), 0px 16px 56px 0px rgba(20,37,61,0.08)",
    "0px 8px 12px 0px rgba(20,37,61,0.08), 0px 20px 32px 0px rgba(20,37,61,0.08), 0px 16px 56px 0px rgba(20,37,61,0.08)",
  ],
  components: {
    MuiAccordion: MuiAccordionOverrides,
    MuiAccordionSummary: MuiAccordionSummaryOverrides,
    MuiAlert: MuiAlertOverrides,
    MuiAvatar: MuiAvatarOverrides,
    MuiAutocomplete: MuiAutocompleteOverrides,
    MuiBadge: MuiBadgeOverrides,
    MuiBreadcrumbs: MuiBreadcrumbsOverrides,
    MuiButton: MuiButtonOverrides,
    MuiChip: MuiChipOverrides,
    MuiCssBaseline: MuiCssBaselineOverrides,
    MuiDataGrid: MuiDataGridOverrides,
    MuiFormHelperText: MuiFormHelperTextOverrides,
    MuiLink: MuiLinkOverrides,
    MuiList: MuiListOverrides,
    MuiListItemButton: MuiListItemButtonOverrides,
    MuiListItemIcon: MuiListItemIconOverrides,
    MuiMenu: MuiMenuOverrides,
    MuiOutlinedInput: MuiOutlinedInputOverrides,
    MuiPopper: MuiPopperOverrides,
    MuiRadio: MuiRadioOverrides,
    MuiSelect: MuiSelectOverrides,
    MuiSkeleton: MuiSkeletonOverrides,
    MuiStepLabel: MuiStepLabelOverrides,
    MuiTab: MuiTabOverrides,
    MuiTabs: MuiTabsOverrides,
    MuiTextField: MuiTextFieldOverrides,
    MuiToggleButtonGroup: MuiToggleButtonGroupOverrides,
    MuiTooltip: MuiTooltipOverrides,
  },
};

const spacingFunction = options.spacing as (factor: number) => string;

options.typography = {
  fontFamily: "Avenir Medium",
  h1: {
    fontSize: spacingFunction(3),
    fontWeight: 500,
    lineHeight: "1.4",
    textTransform: "capitalize",
  },
  h2: {
    fontSize: spacingFunction(2.5),
    fontWeight: 500,
    lineHeight: "1.4",
    textTransform: "capitalize",
  },
  h3: {
    fontSize: spacingFunction(2.25),
    fontWeight: 500,
    lineHeight: "1.4",
    textTransform: "capitalize",
  },
  h4: {
    fontSize: spacingFunction(2),
    fontWeight: 500,
    lineHeight: "1.4",
    textTransform: "capitalize",
  },
  h5: {
    fontSize: spacingFunction(1.75),
    fontWeight: 500,
    lineHeight: "1.4",
    textTransform: "capitalize",
  },
  h6: {
    fontSize: spacingFunction(1.5),
    fontWeight: 500,
    lineHeight: "1.4",
    textTransform: "capitalize",
  },
  subtitle1: {
    fontSize: spacingFunction(2),
    fontFamily: "Avenir Roman",
    fontWeight: 400,
    lineHeight: "1.4",
  },
  subtitle2: {
    fontSize: spacingFunction(1.75),
    fontFamily: "Avenir Roman",
    fontWeight: 400,
    lineHeight: "1.4",
  },
  body1: {
    fontFamily: "Avenir Roman",
    fontSize: spacingFunction(2),
    fontWeight: 400,
    lineHeight: "1.4",
  },
  body2: {
    fontFamily: "Avenir Roman",
    fontSize: spacingFunction(1.75),
    fontWeight: 400,
    lineHeight: "1.4",
  },
  body3: {
    fontFamily: "Avenir Roman",
    fontSize: spacingFunction(1.5),
    fontWeight: 400,
    lineHeight: 1.4,
  },
  bodySmall: {
    fontFamily: "Trebuchet MS, sans-serif",
    fontWeight: 400,
    lineHeight: 1.4,
  },
  button: {
    fontFamily: "Avenir Roman",
    fontSize: spacingFunction(1.75),
    fontWeight: 500,
    lineHeight: "1.2",
    textTransform: "none",
  },
};

/**
 * Create sx object that sets the .Mui-focusVisible backgroundColor
 * @param defaultColor color for default state
 * @param hoverColor color for hover state
 * @returns sx props object
 */
const muiFocusVisibleOverride = (defaultColor: string, hoverColor: string): SxProps<Theme> => {
  return {
    ["&.Mui-focusVisible"]: {
      backgroundColor: defaultColor,
      ["&:hover"]: {
        backgroundColor: hoverColor,
      },
    },
  };
};

/** Sx object that defines the common styling for interactable elements */
const encStandardsCommon: SxProps<Theme> = {
  // default
  borderWidth: "1px",
  borderColor: "transparent",
  borderStyle: "solid",
  transition: "0.4s ease all",
  ["&:hover"]: {
    cursor: "pointer",
    outlineColor: (options.palette.primary as SimplePaletteColorOptions).main,
  },

  // focus
  // NOTE: Mui will apply a .Mui-focusVisible to components when they are focused which has a backgroundColor value set in some cases
  // the .Mui-focusVisible class and its :hover need to be overwritten for each of the white/clear/outline cases
  outlineStyle: "solid",
  outlineWidth: "1px",
  outlineColor: "transparent",
  outlineOffset: "-2px",
  ["&:focus-visible"]: {
    outlineColor: (options.palette.primary as SimplePaletteColorOptions).main,
    outlineOffset: "-2px",
  },

  // disabled
  ["&.Mui-disabled"]: {
    color: primitive.bley[600],
    background: primitive.bleyOpaque[10],
    borderColor: primitive.bleyOpaque[30],
    opacity: "unset",
    ["&:hover"]: {
      background: primitive.bleyOpaque[10],
    },
  },
};

/**
 * set up the styles for interactable elements
 * */
options.palette.encStandards = {
  common: {
    ...encStandardsCommon,
  },
  white: {
    ...encStandardsCommon,
    color: options.palette.text.primary,
    background: options.palette.common.white,
    ["&:hover"]: {
      background: primitive.bleyOpaque[10],
    },
    ...muiFocusVisibleOverride(options.palette.common.white, primitive.bleyOpaque[10]),
  },
  outline: {
    ...encStandardsCommon,
    color: options.palette.text.primary,
    background: "transparent",
    borderColor: primitive.bleyOpaque[10],
    ["&:hover"]: {
      borderColor: primitive.bleyOpaque[30],
    },
    ...muiFocusVisibleOverride("transparent", "transparent"),
  },
  clear: {
    ...encStandardsCommon,
    color: options.palette.text.primary,
    background: "transparent",
    ["&:hover"]: {
      background: primitive.bleyOpaque[10],
    },
    ...muiFocusVisibleOverride("transparent", primitive.bleyOpaque[10]),
  },
  selected: {
    primary: {
      background: primitive.aquaLightOpaque[10],
      borderColor: "transparent",
      ["&:hover"]: {
        background: primitive.aquaLightOpaque[10],
        borderColor: "transparent",
      },
      ...muiFocusVisibleOverride(primitive.aquaLightOpaque[10], primitive.aquaLightOpaque[10]),
    },
    secondary: {
      background: primitive.bleyOpaque[5],
      borderColor: primitive.bleyOpaque[10],
      ["&:hover"]: {
        background: primitive.bleyOpaque[5],
        borderColor: primitive.bleyOpaque[30],
      },
      ...muiFocusVisibleOverride(primitive.bleyOpaque[5], primitive.bleyOpaque[5]),
    },
  },
  accent: {
    default: primitive.navy[900],
    primary: (options.palette.primary as SimplePaletteColorOptions).main,
  },
  gridColumns: {
    sizes: {
      small: {
        minWidth: spacingFunction(9),
        maxWidth: spacingFunction(15),
      },
      medium: {
        minWidth: spacingFunction(18),
      },
      large: {
        minWidth: spacingFunction(36),
      },
    },
  },
  disabled: {
    color: primitive.bley[600],
    background: primitive.bleyOpaque[10],
    borderColor: primitive.bleyOpaque[30],
    opacity: "unset",
  },
};

export const lightTheme = createTheme(options);
