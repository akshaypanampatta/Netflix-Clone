import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/Rowpost/Rowpost";
import { action, comedy, documentary, horror, originals, romantic } from "./urls";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Rowpost url={originals} title="Netflix Originals" />
      <Rowpost url={action} title="Action Movies" isSmall />
      <Rowpost url={comedy} title="Comedy Movies" isSmall />
      <Rowpost url={horror} title="Horror Movies" isSmall />
      <Rowpost url={romantic} title="Romantic Movies" isSmall />
      <Rowpost url={documentary} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
