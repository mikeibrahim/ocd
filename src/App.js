import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Digitize from './pages/Digitize.jsx';
import Solve from './pages/Solve.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="digitize" element={<Digitize />} />
        <Route path="solve" element={<Solve />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;