import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <div className="max-w-full max-h-full flex flex-col">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
