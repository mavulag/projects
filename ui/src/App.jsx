import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className='p-4'></div>
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
