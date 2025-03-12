import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

