import './style.css';
import {
    Link
} from 'react-router-dom';
import { useContext } from 'react';
import { routeContext } from '../../App';

function Navbar() {
    const { authenticated, setAuthenticated, currentRoute, setCurrentRoute } = useContext(routeContext);

    function login() {
        setCurrentRoute("/login");
        setAuthenticated(false);
    }

    return (
        <div className="navbar">
            <div className="menu">
                {currentRoute !== "/" && <Link to="/" className="menu-item" onClick={() => setCurrentRoute("/")} >Home</Link>}
                {currentRoute !== "/login" && <Link to="/login" className="menu-item" onClick={login} >
                    {authenticated ? "Logoff" : "Login"}
                </Link>}
                {currentRoute !== "/perfil" && <Link to="/perfil" className="menu-item" onClick={() => setCurrentRoute("/perfil")} >Perfil</Link>}
            </div>
        </div >
    );
}

export default Navbar;