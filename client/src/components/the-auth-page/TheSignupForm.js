import './TheSignupForm.scss';
import BaseMultipageCard from '../base/BaseMultipageCard';
import BaseInputText from '../base/BaseInputText';

const TheSignupForm = () => {
    return (
        <div className='the-signup-form'>
            <h2 className='glb-h2'>Create a new account!</h2>
            {/* <BaseMultipageCard /> */}
            <BaseInputText title='full name' type='text' />
        </div>
    );
}

export default TheSignupForm;