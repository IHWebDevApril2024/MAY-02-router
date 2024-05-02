import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import Navbar from "./components/Navbar";
import DetailsPage from "./pages/DetailsPage";
import apartmentsData from "./data/project_data.json";

function App() {
  const newDate = new Date();
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage apartmentsData={apartmentsData} />}
        />
        <Route path="/user" element={<UserPage />} />
        <Route
          path="/details/:apartmentId"
          element={<DetailsPage apartmentsData={apartmentsData} />}
        />
        <Route path="*" element={<h2>PAGE NOT FOUND</h2>} />
        {/* for the rest of the routes */}
      </Routes>
      <footer>©️ {newDate.getFullYear()}</footer>
    </>
  );
}

export default App;
