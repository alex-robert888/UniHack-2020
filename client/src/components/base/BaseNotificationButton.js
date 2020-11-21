import './BaseNotificationButton.scss';
import NotificationIcon from '../../assets/img/icons/notification-icon.svg';
import { useHistory } from 'react-router-dom';
import { React, useState } from 'react'; 

const BaseNotificationButton = (props) => { // props.type (tenant,landlord,contracter)

    let [history, setHistory] = useState(useHistory());

    const openNotificationPage = () => {
        history.push("/" + props.type + '/notifications');
    }

    return (
        <section className='img-notification-section'>
            <img src={NotificationIcon} alt="notification-icon" className="img-notification" onClick={openNotificationPage}/>
        </section>
    );
}

export default BaseNotificationButton;