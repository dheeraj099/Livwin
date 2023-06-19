import logo from './logo.svg';
import './App.css';
import home from './home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import services from './services/services';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={home} />
        <Route path="/services" Component={services} />
      </Routes>
    </Router>
  );
}

export default App;
