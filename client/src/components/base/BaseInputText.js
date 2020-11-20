import './BaseInputText.scss';
import '../../style/classes.scss';

const BaseInputText = ({title, icon, type}) => {
    return (
        <article className='base-input-text'>
            <label htmlFor="input-name" className="base-label">{title}</label>
            <input type="text" name="input-name" />
        </article>
    );
}

export default BaseInputText;