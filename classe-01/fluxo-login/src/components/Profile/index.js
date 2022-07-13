import './style.css';
import { useContext } from 'react';
import { routeContext } from '../../App';

function Profile() {
    const { profileData } = useContext(routeContext);

    const { id, avatar_url, html_url, name, location } = profileData;

    return (
        <div className="profile">
            PERFIL
            <div className="profile-data">
                <img src={avatar_url} alt="Avatar do usuário" />
                <div className="main-data">
                    <span className="name">{name}</span>
                    <span>
                        <strong>ID: </strong>
                        {id}
                    </span>
                    <span>
                        <strong>Local: </strong>
                        {location}
                    </span>
                    <a href={html_url} target="_blank">{html_url}</a>
                </div>
            </div>
        </div >
    );
}

export default Profile;