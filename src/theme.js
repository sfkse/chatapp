import { createTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {

            main: deepPurple[700],
            light: deepPurple[300]
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#7267CB',
        },
    },
});