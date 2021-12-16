import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import AuthContext from './Context/AuthContext';
import Details from './components/Details/Details';

function App() {
  return (
    <AuthContext>
<BrowserRouter>
<Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/item" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/order/:id" element={<Details/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
      
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;
