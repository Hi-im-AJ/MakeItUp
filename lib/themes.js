import { createTheme, ThemeProvider as provider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#8f675e",
      light: "#9d746a",
      contrastText: "#fff",
    },
    secondary: {
      main: grey[600],
      contrastText: "#222",
    },
  },
});

export default provider;
