import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { themeSettings } from "theme";

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Layout from "scenes/layout";

function App() {
    const mode = useSelector((state) => state.global.mode);
    // console.log(mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return (
        <div className="app">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route  element={<Layout />} >
                            <Route path="/" element={<Navigate to="/dashboard" replace />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/products" element={<Products />} />
                        </Route>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
            
        </div>
    );
}

export default App;
