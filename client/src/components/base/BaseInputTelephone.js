import './BaseInputTelephone.scss';

const BaseInputTelephone = ({title}) => {
    return (
        <article className='base-input-telephone glb-base-input-component'>
            <label htmlFor="input-name" className="glb-base-label">{title}</label>
            <input type="tel" name="input-name" className="glb-base-input" id="" required />
        </article>
    );
}

export default BaseInputTelephone;