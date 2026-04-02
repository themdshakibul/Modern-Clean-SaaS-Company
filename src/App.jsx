import { Outlet } from "react-router-dom";
import NavBar from "./Components/Layout/NavBar";
import Footer from "./Components/Layout/Footer";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Footer />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
