import { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { ChatContext } from './components/ChatContext';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  const { userAuth } = useContext(ChatContext)

  return (

    <Switch>
      <PrivateRoute exact path="/" userAuth={userAuth}>
        <Dashboard />
      </PrivateRoute>
      <Route path="/register" ><Register /></Route>
      <Route path="/login"><Login /></Route>
    </Switch>

  );
}

const PrivateRoute = ({ children, userAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          userAuth
            ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: location }
                }}
              />
            ))
      }
    />
  )

}
export default App;
