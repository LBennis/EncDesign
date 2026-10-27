import { Components } from "@mui/material/styles/components";
import { sizes } from '../palette';

export const MuiRadioOverrides: Components["MuiRadio"] = {
  variants: [
    {
      props: { size: "small" },
      style: {
        minHeight: sizes.inputHeightSize.small,
        padding: "0.375rem"
      }
    },
    {
        props: { size: "medium" },
        style: {
          minHeight: sizes.inputHeightSize.medium,
          padding: sizes.inputPadding.medium,
        }
    },
  ]
};