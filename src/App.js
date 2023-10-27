import logo from './logo.svg';
import './App.css';
import home from './home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import services from './services/services';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={home} />
        <Route path="/services" Component={services} />
        <Route path="/AboutUs" Component={AboutUs} />
        <Route path="/ContactUs" Component={ContactUs} />
      </Routes>
    </Router>
  );
}

export default App;
