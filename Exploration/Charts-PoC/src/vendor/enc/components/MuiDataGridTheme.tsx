import { Components, Theme } from "@mui/material/styles";
import { sizes } from "../palette";
import { EmptyState, Icon } from "../../components";
import { DocumentQuestionMarkRegular } from "@fluentui/react-icons";

export const MuiDataGridOverrides: Components<Theme>["MuiDataGrid"] = {
  defaultProps: {
    getRowHeight: () => "auto",
    disableColumnMenu: true,
    slots: {
      noRowsOverlay: () => (
        <EmptyState
          icon={
            <Icon
              color="info"
              icon={<DocumentQuestionMarkRegular />}
              size="xxlarge"
            />
          }
          message="No results found"
        />
      ),
    },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.common.white,
      borderRadius: sizes.borderRadius.large,
      borderColor: theme.palette.divider,

      "--DataGrid-rowBorderColor": theme.palette.divider,
      
      "& .MuiDataGrid-topContainer": {
        backgroundColor: theme.palette.grey[100],
        maxHeight: sizes.inputHeightSize.medium,
      },
      "& .MuiDataGrid-columnHeader:not(.MuiDataGrid-columnHeader--sorted):hover":
        {
          "& .MuiDataGrid-sortIcon": {
            opacity: 1,
            color: theme.palette.text.secondary,
          },
        },
      "& .MuiDataGrid-toolbarContainer": {
        backgroundColor: theme.palette.grey[100],
        padding: `${theme.spacing(1.5)} ${theme.spacing(2)} ${theme.spacing(1)}`,
      },
      "& .MuiDataGrid-columnHeaders": {
        height: sizes.inputHeightSize.medium,
        backgroundColor: theme.palette.grey[100],
        borderColor: theme.palette.bleyOpaque[20],

        "& .MuiDataGrid-columnSeparator": {
          visibility: "hidden",
        },

        "&:hover": {
          "& .MuiDataGrid-columnSeparator": {
            visibility: "visible",
          },
        },

        "& .MuiDataGrid-row--borderBottom": {
          height: "100%",
        },
        "& .MuiDataGrid-columnHeader": {
          backgroundColor: theme.palette.grey[100],
          textTransform: "uppercase",
          height: "100% !important",
          outline: "none !important",

          "& .MuiDataGrid-columnSeparator": {
            minHeight: `${sizes.inputHeightSize.medium} !important`,
            justifyContent: "start",
            color: theme.palette.divider,

            "&.MuiDataGrid-columnSeparator--resizing": {
              color: `${theme.palette.secondary.main} !important`,
            },

            "&.MuiDataGrid-columnSeparator--resizable:hover": {
              color: theme.palette.bleyOpaque[30],
            },

            "& .MuiSvgIcon-root": {
              height: sizes.inputHeightSize.medium,

              rect: {
                height: sizes.inputHeightSize.medium,
                y: "-8",
                width: "2px",
              },
            },
          },

          "&:hover": {
            backgroundColor: theme.palette.grey[300],
          },
          "&.MuiDataGrid-columnHeaderCheckbox": {
            "& .MuiDataGrid-columnHeaderTitleContainer": {
              justifyContent: "center",
            },
          },
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            justifyContent: "space-between",
          },
        },
        "& .MuiDataGrid-filler, & .MuiDataGrid-virtualScroller": {
          backgroundColor: theme.palette.grey[100],
        },
      },
      "& .MuiDataGrid-row": {
        "&.Mui-selected": {
          backgroundColor: `${theme.palette.aquaLightOpaque[5]} !important`,
        },
        "&.Mui-selected:hover": {
          backgroundColor: `${theme.palette.aquaLightOpaque[10]} !important`,
        },
        "&:hover": {
          backgroundColor: `${theme.palette.bleyOpaque[5]} !important`,
        },
      },
      "& .MuiDataGrid-cell": {
        display: "flex",
        alignItems: "center",
        outline: "none !important",
        padding: `${theme.spacing(1)} ${theme.spacing(2)} !important`,

        "&:focus": {
          outline: `solid ${theme.palette.aquaLightOpaque[50]} 1px`,
        },
      },
      "& .MuiDataGrid-filler": {
        backgroundColor: theme.palette.common.white,
      },
      "& .MuiTablePagination-spacer": {
        // hide spacing that pushes pagination to the right
        display: "none",
      },
      "& .MuiDataGrid-footerContainer": {
        borderTop: "unset",
        justifyContent: "center !important",
        "& .MuiDataGrid-selectedRowCount": {
          color: theme.palette.primary.main,
          flexShrink: 0,
        },
        "& .MuiTablePagination-root": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "0 1 auto",
          width: "100%",
        },
      },
    }),
  },
};
