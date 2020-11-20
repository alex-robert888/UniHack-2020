import './TheSignupForm.scss';
import BaseMultipageCard from '../base/BaseMultipageCard';
import BaseInputText from '../base/BaseInputText';
import { Fragment, useState } from 'react';
import '../../style/classes.scss'

const TheSignupForm = () => {
    let [listForms, setListForms] = useState([
        <Fragment>
            <form>
                <BaseInputText title='full name' type='text' />
                <BaseInputText title='email' type='email' />
                <BaseInputText title='telephone' type='text' />
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
                <BaseInputText title='password' type='text' />
                <BaseInputText title='confirm password' type='text' />
            </form>
        </Fragment>
    ])

    return (
        <div className='the-signup-form'>
            <h2 className='glb-h2'>Create a new account!</h2>
            <BaseMultipageCard numberOfPages={3} listPages={listForms}/>
        </div>
    );
}

export default TheSignupForm;