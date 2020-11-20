import './BaseInputText.scss';
import '../../style/classes.scss';

const BaseInputText = ({title, icon, type}) => {
    return (
        <article className='base-input-text glb-base-input-component'>
            <label htmlFor="input-name" className="glb-base-label">{title}</label>
            <input type={type} name="input-name" />
        </article>
    );
}

export default BaseInputText;