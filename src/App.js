import { Route, Routes } from "react-router-dom";
import Tables from "./Components/Tables";
import Singleview from "./Components/Singleview";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Tables />} />
        <Route path="/singleView/:id" element={<Singleview />} />
      </Routes>
    </div>
  );
}

export default App;
