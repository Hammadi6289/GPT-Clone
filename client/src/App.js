import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import { themeSettings } from "./theme";
import Summary from "./pages/Summary";
import JsConverter from "./pages/JsConverter";

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/js-converter" element={<JsConverter />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
