import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
