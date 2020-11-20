import { useState } from 'react';
import './BaseInputRadioButtons.scss';
import '../../style/classes.scss';

const BaseInputRadioButtons = ({title, listOfOptions, valueUpdated}) => {
    //<BaseInputRadioButtons title="Type of account" listOfOptions={['Tenant','Landlord','Contractor']}></BaseInputRadioButtons>
    function onChangeHandler(event) {
        valueUpdated(event.target.value);
    }
    return (
        <article className='base-input-radio-button-page'>
            <label htmlFor='input-radio' className='glb-base-label base-input-radio-title'>{title}</label>
            {listOfOptions.map((option, idx) => (
                <label key={option} className="base-input-radio-section">
                    <input 
                        type='radio'
                        name="radio" 
                        required
                        className='base-input-radio-button-input' 
                        value={option} 
                        text={option}
                        onChange={ onChangeHandler } 
                    />
                    <span>{option}</span>
                </label>
                )
            )
            }
            
        </article>
    );
}

export default BaseInputRadioButtons;