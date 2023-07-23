import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='container main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recipes' element={<Home />} />
            <Route path='/settings' element={<Home />} />
          </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
