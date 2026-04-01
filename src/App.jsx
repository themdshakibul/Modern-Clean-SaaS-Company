import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/index";
import NavBar from "./Components/Layout/NavBar";
import Footer from "./Components/Layout/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />

        {/* ডাইনামিক কন্টেন্ট এখানে লোড হবে */}
        <main className="grow">
          <AppRoutes />
        </main>

        {/* ফুটার সব পেজে থাকবে */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
