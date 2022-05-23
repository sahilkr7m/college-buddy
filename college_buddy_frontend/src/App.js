import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import './App.css';
import About from './components/About';
import Contribution from './components/Contribution';
import Home from './components/Home';
import Message from './components/Message';
import Navbar from './components/Navbar';
import Service from './components/Service';
import ServiceDetail from './components/ServiceDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/contribute" element = {<Contribution />} />
          <Route path="/contribute/message" element = {<Message />} />
          <Route path="/pg" element = {<Service category="pg"/>} />
          <Route path="/hostel" element = {<Service category="hostel"/>} />
          <Route path="/about" element = {<About />} />
          <Route path="/pg/:id" element={<ServiceDetail category="pg"/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
