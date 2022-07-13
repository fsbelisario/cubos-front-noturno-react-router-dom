import './style.css';
import {
    useHistory
} from 'react-router-dom';
import { useState, useContext } from 'react';
import { routeContext } from '../../App';

function Login() {
    const { setProfileData, setAuthenticated } = useContext(routeContext);

    const [userName, setUserName] = useState('');

    const history = useHistory();

    const checkProfileURL = (userName) => `https://api.github.com/users/${userName}`;

    async function authentication() {
        try {
            const response = await fetch(checkProfileURL(userName));
            const data = await response.json();
            setProfileData(data);
            if (response.status === 200) {
                setAuthenticated(true);
                console.log("Usuário validado!");
                history.push("/perfil");
            }
        } catch (error) {
            console.log(error);
        }
    }

    function submit(e) {
        e.preventDefault();
        authentication(userName);
    }

    return (
        <div className="login">
            LOGIN
            <label>Usuário Github</label>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <button onClick={submit}>
                Entrar
            </button>
        </div >
    );
}

export default Login;