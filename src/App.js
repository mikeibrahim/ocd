import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Digitize from './pages/Digitize.jsx';
import Solve from './pages/Solve.jsx';
import Help from './pages/Help.jsx';


function delay(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

export default function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const isLarge = width > 600
  const theme = document.getElementById('theme');
  theme.setAttribute('href', isLarge ? ' ' : './mobile.css');

  React.useEffect(() => {
    const handleResize = delay(() => setWidth(window.innerWidth), 30);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="digitize" element={<Digitize />} />
        <Route path="solve" element={<Solve />} />
        <Route path="help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}