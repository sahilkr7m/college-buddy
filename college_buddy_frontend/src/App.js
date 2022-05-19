import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Service from './components/Service';
import ServiceDetail from './components/ServiceDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Service />} />
          <Route path="/pg/:id/*" element={<ServiceDetail />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
