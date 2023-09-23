import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Register from './pages/Register';
function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
