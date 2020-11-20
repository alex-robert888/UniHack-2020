import './BaseTelephone.scss';
import PhoneIcon from '../../assets/img/icons/phone-icon.svg'

const BaseTelephone = (props) => {
    //<BaseTelephone phoneNumber="0723765821"></BaseTelephone>
    return (
        <article className="tooltip">
            <img src={PhoneIcon} alt="phone-icon" className="icon"/>
            <span className="tooltiptext">{props.phoneNumber}</span>
        </article>
    );
}

export default BaseTelephone;