import './BaseInputText.scss';
import '../../style/classes.scss';

const BaseInputText = ({title, icon, type}) => {
    return (
        <article className='base-input-text glb-base-input-component'>
            <label htmlFor="input-name" className="glb-base-label">{title}</label>
            <input type={type} name="input-name" className="glb-base-input">
                <img src={icon} alt="icon"/>
            </input>
        </article>
    );
}

export default BaseInputText;