import {
  BrowserRouter as Router,
  Routes,
  Route,
  ScrollRestoration,
} from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Header from './components/Header';
import Bio from './pages/Bio';
import Footer from './pages/Footer';
import { useEffect, useRef } from 'react';
import Bottom from './pages/Bottom';
import Bottom2 from './pages/Bottom2';
import Beabee from './pages/Beabee';
import Koala4d from './pages/Koala4d';
import Vsmedia from './pages/Vsmedia';
import Sahem from './pages/Sahem';
import Hemam from './pages/Hemam';
import Shammetzout from './pages/Shammetzout';
import Ummat from './pages/Ummat';
import Hasadschool from './pages/Hasadschool';
import Nasheed from './pages/Nasheed';
import Koalad4d2 from './pages/Koalad4d2';
import Atlantic from './pages/Atlantic';
import Mepi from './pages/Mepi';
import LogoAnim from './pages/LogoAnim';
import Mass from './pages/Mass';
import Rasheed from './pages/Rasheed';
import Thinking from './pages/Thinking';
import Dawaii from './pages/Dawaii';
import Story from './pages/Story';
import Fix from './pages/Fix';
function App() {
  const ref = useRef(null);

  return (
    <Router>
      <div className="app-container">
        {/* <ScrollRestoration /> */}
        <Fix />
        <Header headerRef={ref} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home headerRef={ref} />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Bottom" element={<Bottom />} />
            <Route path="/Bottom2" element={<Bottom2 />} />
            <Route path="/Beabee" element={<Beabee />} />
            <Route path="/Koala4d" element={<Koala4d />} />
            <Route path="/Vsmedia" element={<Vsmedia />} />
            <Route path="/Sahem" element={<Sahem />} />
            <Route path="/Hemam" element={<Hemam />} />
            <Route path="/Koalad4d2" element={<Koalad4d2 />} />
            <Route path="/Atlantic" element={<Atlantic />} />
            <Route path="/Mepi" element={<Mepi />} />
            <Route path="/Logo" element={<LogoAnim />} />
            <Route path="/Mass" element={<Mass />} />
            <Route path="/Rasheed" element={<Rasheed />} />
            <Route path="/Shammetzout" element={<Shammetzout />} />
            <Route path="/Ummat" element={<Ummat />} />
            <Route path="/Hasadschool" element={<Hasadschool />} />
            <Route path="/Nasheed" element={<Nasheed />} />
            <Route path="/Thinking" element={<Thinking />} />
            <Route path="/Dawaii" element={<Dawaii />} />
            <Route path="/Story" element={<Story />} />
            <Route path="/Bio" element={<Bio />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
