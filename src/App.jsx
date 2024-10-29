import './App.css'
import Home from './section/Home';
import Men from './section/Men';
import Women from './section/Women';
import Kids from './section/Kids';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App
