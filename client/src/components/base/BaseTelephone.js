import './BaseTelephone.scss';
import PhoneIcon from '../../assets/img/icons/phone-icon.svg'

const BaseTelephone = (props) => { // phoneNumber, hidden (optional field)
    //<BaseTelephone phoneNumber="0723765821"></BaseTelephone>
    return (
        <article className="tooltip">
            <img src={PhoneIcon} alt="phone-icon" className="icon"/>
            <span className="tooltip-text">{!props.hidden ? props.phoneNumber : "hidden"}</span>
            <span className="tooltip-text"></span>
        </article>
    );
}

export default BaseTelephone;