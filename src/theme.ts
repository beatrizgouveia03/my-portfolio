import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#232323',
            },
        secondary: {
            main: '#4f8e3e',
        },
    },
    typography: {
        fontFamily: "Segae UI",
    }
});

theme = responsiveFontSizes(theme);

export default theme;