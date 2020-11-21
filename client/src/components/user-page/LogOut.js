import './LogOut.scss';
import logoutIcon from '../../assets/img/icons/logout-icon.svg'
import { useHistory } from 'react-router-dom';
import { React, useState } from 'react'; 

const LogOut = () => {
    let [history, setHistory] = useState(useHistory());
    
    function logOutUser() {
        sessionStorage.setItem('public_id', '');
        sessionStorage.setItem('fullname', '');
        sessionStorage.setItem('email', '');
        //

        history.push('/');
    }

    return (
        <button className="log-out-button glb-base-outlined-button"  onClick={logOutUser}>
            LOG OUT
        </button>
    );
}

export default LogOut;