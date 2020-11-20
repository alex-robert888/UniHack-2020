import './TheSignupForm.scss';
import BaseMultipageCard from '../base/BaseMultipageCard';
import BaseInputText from '../base/BaseInputText';
import BaseInputTelephone from '../base/BaseInputTelephone';
import BaseInputRadioButtons from '../base/BaseInputRadioButtons';
import { Fragment, useState } from 'react';
import '../../style/classes.scss'

const TheSignupForm = () => {
    let [listForms, setListForms] = useState([
        <Fragment>
            <form>
                <BaseInputRadioButtons title='Type of account' listOfOptions={['Tenant','Landlord','Contractor']} />
                <BaseInputText title='full name' type='text' />
                <BaseInputText title='email' type='email' />
                <BaseInputTelephone title='telephone' />
            </form>
        </Fragment>,
        <Fragment>
            <form>
                <BaseInputText title='gender' type='text' />
                <BaseInputText title='date of birth' type='date' />
            </form>
        </Fragment>,
        <Fragment>
            <form>
                <BaseInputText title='username' type='text' />
                <BaseInputText title='password' type='password' />
                <BaseInputText title='confirm password' type='password' />
            </form>
        </Fragment>
    ])

    return (
        <div className='the-signup-form'>
            <h2 className='glb-h2'>Create a new account!</h2>
            <BaseMultipageCard numberOfPages={3} listPages={listForms} />
        </div>
    );
}

export default TheSignupForm;