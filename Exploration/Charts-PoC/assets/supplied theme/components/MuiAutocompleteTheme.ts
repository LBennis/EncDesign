import { Components, Theme } from "@mui/material/styles";
import { sizes, sizeScale } from '../palette';

export const MuiAutocompleteOverrides: Components<Theme>['MuiAutocomplete'] = {
  defaultProps: {
    fullWidth: true,
    size: "large",
    ListboxProps: {
      sx: (theme) => ({
        maxHeight: theme.spacing(30),
      })
    }
  },
  variants: [
    {
      props: { size: "small" },
      style: {
        // MuiInputBase-root handles the styling of the outermost input wrapper which consists of the input and the icon
        "& .MuiInputBase-root": {
          minHeight: `${sizes.inputHeightSize.small} !important`,
          paddingTop: `${sizes.inputPadding.small} !important`,
          paddingBottom: `${sizes.inputPadding.small} !important`,
        },
        // MuiInputBase-input handles the styling of the inner input. MUI autocomplete adds a default top and bottom padding of 7.5px each to this component
        "& .MuiInputBase-input": {
          paddingTop: "0 !important",
          paddingBottom: "0 !important"
        }
      }
    },
    {
      props: { size: "medium" },
      style: {
        // MuiInputBase-root handles the styling of the outermost input wrapper which consists of the input and the icon
        "& .MuiInputBase-root": {
          minHeight: `${sizes.inputHeightSize.medium} !important`,
          paddingTop: `${sizes.inputPadding.medium} !important`,
          paddingBottom: `${sizes.inputPadding.medium} !important`,
        },
        // MuiInputBase-input handles the styling of the inner input. MUI autocomplete adds a default top and bottom padding of 7.5px each to this component
        "& .MuiInputBase-input": {
          paddingTop: "0 !important",
          paddingBottom: "0 !important"
        }
      }
    },
    {
      props: { size: "large" },
      style: {
        // MuiInputBase-root handles the styling of the outermost input wrapper which consists of the input and the icon
        "& .MuiInputBase-root": {
          minHeight: `${sizes.inputHeightSize.large} !important`,
          paddingTop: `${sizes.inputPadding.large} !important`,
          paddingBottom: `${sizes.inputPadding.large} !important`,
        },
        // MuiInputBase-input handles the styling of the inner input. MUI autocomplete adds a default top and bottom padding of 7.5px each to this component
        "& .MuiInputBase-input": {
          paddingTop: "0 !important",
          paddingBottom: "0 !important"
        }
      }
    },
    {
      props: { disabled: true },
      style: ({ theme }) => ({
        "& .MuiSvgIcon-root": {
          color: `${theme.palette.text.disabled} !important`
        }
      })
    }
  ],
  styleOverrides: {
    root: ({ theme }) => ({
      "& .MuiAutocomplete-endAdornment": {
        "& .MuiAutocomplete-clearIndicator:not(.Mui-disabled)": {
          "& .MuiSvgIcon-root": {
            color: theme.palette.navy[500],
          },
        },
        "& .MuiAutocomplete-popupIndicator:not(.Mui-disabled)": {
          "& .MuiSvgIcon-root": {
            color: theme.palette.primary.main,
          },
        },
      }
    }),
    paper: ({ theme }) => ({
      background: theme.palette.common.white,

      "& .MuiAutocomplete-listbox": {
        "& .MuiAutocomplete-option": {
          fontSize: "0.875rem",
          fontWeight: 400,
          lineHeight: sizeScale.size.size_2_5,
          color: theme.palette.text.primary,
        }
      }
    })
  }
}
