import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ChatProvider } from './components/ChatContext';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <ChatProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path='*' element={<p>There is nothing here</p>} />
        </Routes>
      </BrowserRouter>
    </ChatProvider>
  );
}

export default App;
