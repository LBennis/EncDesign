import { Components, Theme } from "@mui/material/styles";
import { ChevronUpRegular } from "@fluentui/react-icons";
import { accordionClasses } from "@mui/material/Accordion";
import { accordionSummaryClasses } from "@mui/material/AccordionSummary";

export const MuiAccordionOverrides: Components<Theme>["MuiAccordion"] = {
  defaultProps: {
    elevation: 0,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      background: "transparent",
      [`&.${accordionClasses.expanded}`]: {
        margin: `0 0 ${theme.spacing(2)} 0`,
      },
      [`&:not(:first-of-type).${accordionClasses.expanded}::before`]: {
        opacity: 1,
        display: "unset !important",
      },
      [`&.${accordionClasses.disabled}`]: {
        background: "transparent",
        color: theme.palette.text.disabled,
        [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
          color: theme.palette.text.disabled,
        },
      },
      "::before": { opacity: "0 !important"},
      "& .MuiButtonBase-root.MuiAccordionSummary-root": {
        borderBottom: `1px solid ${theme.palette.divider}`
      },
    }),
  },
};

export const MuiAccordionSummaryOverrides: Components<Theme>["MuiAccordionSummary"] =
  {
    defaultProps: {
      expandIcon: <ChevronUpRegular />,
    },
    styleOverrides: {
      root: {
        [`&.${accordionSummaryClasses.expanded}`]: {
          minHeight: "unset",
        },
        [`&.${accordionSummaryClasses.disabled}`]: {
          opacity: 1, // overriding the opacity
        },
      },
      content: ({ theme }) => ({
        margin: `${theme.spacing(2.5)} 0`,
      }),
      expandIconWrapper: ({ theme }) => ({
        color: theme.palette.primary.main,
        fontSize: theme.spacing(3),
      }),
    },
  };
