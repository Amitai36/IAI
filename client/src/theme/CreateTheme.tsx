import React, { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from '@mui/material/styles';


interface ProviderThemeProps {
  children: ReactNode;
}

function ProviderTheme(props: ProviderThemeProps) {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          background: {
            default: "gray",
          },

        },
        direction: "rtl",
        components: {
          MuiSelect: {
            defaultProps: {
              size: "small",
            },
          },
          MuiTextField: {
            defaultProps: {
              size: "small",
            },
            styleOverrides: {
              root: {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: 50,
                    borderColor: "yellow solid",
                  },
                },
              },
            },
          },
          MuiButton: {
            defaultProps: {
              size: 'small'
            }
          },
          MuiDialog: {
            styleOverrides: {
              paper: {
                height: "100%"
              }
            }
          },
          MuiIconButton: {
            styleOverrides: {
              root: {
                backgroundColor: "#3fbee7"
              }
            }
          }
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          height: "100vh",
          width: "100vw",
          maxWidth: "100%",
        }}
      >
        {props.children}
      </div>
    </ThemeProvider>
  );
}

export default ProviderTheme;
