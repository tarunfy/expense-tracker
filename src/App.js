import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <div className="max-w-full max-h-full flex flex-col relative z-10">
      <Navbar />
      <svg
        className="z-0 absolute h-blob w-blob"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#50FBDF"
          d="M45.7,-43.7C55.4,-36.1,56.6,-18.1,58.7,2.1C60.8,22.3,63.8,44.6,54.2,51C44.6,57.4,22.3,48,4.3,43.7C-13.6,39.3,-27.2,40.1,-41.9,33.6C-56.6,27.2,-72.4,13.6,-71.1,1.3C-69.7,-11,-51.3,-21.9,-36.6,-29.5C-21.9,-37.1,-11,-41.2,3.5,-44.7C18.1,-48.3,36.1,-51.2,45.7,-43.7Z"
          transform="translate(100 100)"
        />
      </svg>
      <Home />
    </div>
  );
}

export default App;
