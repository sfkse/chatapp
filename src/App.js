import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ChatProvider } from './components/ChatContext';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <ChatProvider>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<p>There is nothing here</p>} />
      </Routes>
    </ChatProvider>
  );
}

export default App;
