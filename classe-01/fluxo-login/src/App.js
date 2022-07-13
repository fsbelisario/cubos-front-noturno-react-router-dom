import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import { useState, createContext, useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

export const routeContext = createContext();

export function RestrictedRoutes(props) {
  const { setCurrentRoute } = useContext(routeContext);
  setCurrentRoute(props.authenticated ? "/perfil" : "/login");

  return (
    <Route
      render={() => props.authenticated ?
        (props.children) :
        <Redirect to="/login" />} />
  );
}

function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);
  const [authenticated, setAuthenticated] = useState(false);
  const [profileData, setProfileData] = useState();

  const currentRouteValue = { currentRoute, setCurrentRoute, profileData, setProfileData, authenticated, setAuthenticated };

  return (
    <routeContext.Provider value={currentRouteValue}>
      <div className="app">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <RestrictedRoutes authenticated={authenticated}>
              <Route path="/perfil" component={Profile} />
            </RestrictedRoutes>
          </Switch>
        </Router>
      </div>
    </routeContext.Provider >
  );
}

export default App;