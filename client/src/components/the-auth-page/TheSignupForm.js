import './TheSignupForm.scss';
import BaseMultipageCard from '../base/BaseMultipageCard';
import BaseInputText from '../base/BaseInputText';
import BaseInputTelephone from '../base/BaseInputTelephone';
import BaseInputRadioButtons from '../base/BaseInputRadioButtons';
import { Fragment, useState } from 'react';
import '../../style/classes.scss'
import axio from 'axios';

const TheSignupForm = () => {
    let [userSignupData, setUserSignUpData] = useState({
        type: '',
        fullName: '',
        email: '',
        telephone: '',
        gender: '',
        dateOfBirth: '',
        username: '',
        password: '',
        confirmedPassword: ''
    });

    let [type, setType] = useState('');
    let [fullName, setFullName] = useState('');
    let [email, setEmail] = useState('');
    let [telephone, setTelephone] = useState('');
    let [gender, setGender] = useState('');
    let [dateOfBirth, setDateOfBirth] = useState('');
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [confirmedPassword, setConfirmedPassword] = useState('');

    function printState(e) {
        e.preventDefault();
        setUserSignUpData({
            type: type,
            fullName: fullName,
            email: email,
            telephone: telephone,
            gender: gender,
            dateOfBirth: dateOfBirth,
            username: username,
            password: password,
            confirmedPassword: confirmedPassword
        })
        console.log("Full name: ", fullName);
        console.log("Email: ", email);
        console.log("telephone: ", telephone);
        console.log("gender: ", gender);
        console.log("object: ", userSignupData);
    }

    function loadDataToContext() {
        alert('loading data')
    }

    let [listForms, setListForms] = useState([
        <Fragment>
            <form>
                <BaseInputRadioButtons title='Type of account' listOfOptions={['Tenant','Landlord','Contractor']} />
                <BaseInputText title='full name' type='text' valueUpdated={ fullName => setFullName(fullName) } />
                <BaseInputText title='email' type='email' valueUpdated={ email => setEmail(email) }/>
                <BaseInputText title='telephone' valueUpdated={ telephone => setTelephone(telephone) }/>
            </form>
        </Fragment>,
        <Fragment>
            <form>
                <BaseInputText title='gender' type='text' valueUpdated={ gender => setGender(gender) } />
                <BaseInputText title='date of birth' type='date' valueUpdated={ dateOfBirth => setDateOfBirth(dateOfBirth) }/>
            </form>
        </Fragment>,
        <Fragment>
            <form>
                <BaseInputText title='username' type='text' valueUpdated={ username => setUsername(username) } />
                <BaseInputText title='password' type='password' valueUpdated={ password => setPassword(password) } />
                <BaseInputText title='confirm password' type='password' valueUpdated={ confirmedPassword => setConfirmedPassword(confirmedPassword) } />
            </form>
        </Fragment>
    ])

    return (
        <div className='the-signup-form'>
            <h2 className='glb-h2'>Create a new account!</h2>
            <BaseMultipageCard numberOfPages={3} listPages={listForms} buttonFinishPressed={() => loadDataToContext()} />
            <button onClick={printState}>Show state</button>
        </div>
    );
}

export default TheSignupForm;