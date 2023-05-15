
import "../../scss/custom/custom.scss"
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";



const AdminLayout = ({ children }) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#000000'
                // main: '#FF0000'
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default AdminLayout
