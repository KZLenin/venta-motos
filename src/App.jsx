
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu';
import Footer from './components/footer';
import { Body } from './components/Body';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
function App() {
  return (
    <Router>
      <Menu/>
      <Body>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
      </Body>
      <Footer/>
    </Router>
  );
}

export default App
