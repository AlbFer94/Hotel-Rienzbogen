import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactsPage from "./pages/ContactsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import AppNavbar from "./components/AppNavbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/rooms" Component={RoomsPage} />
        <Route path="/services" Component={ServicesPage} />
        <Route path="/contacts" Component={ContactsPage} />
        <Route path="*" Component={NotFoundPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;