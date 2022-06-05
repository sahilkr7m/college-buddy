import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import BlogForm from './components/BlogForm';
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
          <Route path="/hospital" element = {<Service category="hospital"/>} />
          <Route path="/blog" element = {<Blog />} />
          <Route path="/blog/create" element = {<BlogForm />} />
          <Route path="/about" element = {<About />} />
          <Route path="/pg/:id" element={<ServiceDetail category="pg"/>} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
