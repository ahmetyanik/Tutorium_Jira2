import "./App.css";
import Footer from "./Footer";
import Mainpage from "./Mainpage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainpage />
      <Footer />     
    </div>
  );
}

export default App;
