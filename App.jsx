import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './Component/Footer'
import Header from './Component/Header'
import Page1 from './Pages/Page1'
import About from './Pages/About'
import Services from './Pages/Services'
import Products from './Pages/Products'
import Education from './Pages/Education'
import Blogs from './Pages/Blogs'
import Community from './Pages/Community'
import BecomeAPartner from './Pages/BecomeAPartner'
import Contact from './Pages/Contact'

function App() {
  return ( 
    <BrowserRouter>
      <div className="app-main-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/education" element={<Education />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/community" element={<Community />} />
          <Route path="/become-a-partner" element={<BecomeAPartner />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;