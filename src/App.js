import { Route, Switch } from 'react-router-dom';
import './App.css';
import { ChatProvider } from './components/ChatContext';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <ChatProvider>
      <Switch>
        <Route path="/dashboard"><Dashboard /></Route>
        <Route path="/register" ><Register /></Route>
        <Route path="/login"><Login /></Route>
        {/* <Route path='*' element={<p>There is nothing here</p>} /> */}
      </Switch>
    </ChatProvider>
  );
}

export default App;
