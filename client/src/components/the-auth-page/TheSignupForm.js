import './TheSignupForm.scss';
import BaseMultipageCard from '../base/BaseMultipageCard';
import BaseInputText from '../base/BaseInputText';
import BaseInputTelephone from '../base/BaseInputTelephone';
import BaseInputRadioButtons from '../base/BaseInputRadioButtons';
import { Fragment, useState } from 'react';
import { BrowserRouter as Redirect, useHistory } from 'react-router-dom';
import '../../style/classes.scss'
import axios from 'axios';

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

    // Sign up fields
    let [type, setType] = useState('');
    let [fullName, setFullName] = useState('');
    let [email, setEmail] = useState('');
    let [telephone, setTelephone] = useState('');
    let [gender, setGender] = useState('');
    let [dateOfBirth, setDateOfBirth] = useState('');
    let [password, setPassword] = useState('');
    let [confirmedPassword, setConfirmedPassword] = useState('');
    let [country, setCountry] = useState('');
    let [city, setCity] = useState('');

    // Redirect
    let [urlToRedirectTo, setUrlToRedirectTo] = useState(null);
    let [history, setHistory] = useState(useHistory());

    function printState(e) {
        setUrlToRedirectTo('/auth/login')
        e.preventDefault();
    }

    async function loadDataToContextAndDB() {
        if (password !== confirmedPassword) {
            alert('Password is wrong!')
            return;
        }
        try {
            await axios.post(`http://localhost:5000/auth/signup/${type}`, {
                fullname: fullName,
                email: email,
                telephone: telephone,
                country: country,
                city: city,
                gender: gender,
                date_of_birth: dateOfBirth,
                password: password
            })
        }
        catch(exception) {
            alert(exception);
        } 

        // After successful sign up, redirect me to login
        setUrlToRedirectTo('/auth/login')
    }

    let [listForms, setListForms] = useState([
        <Fragment>
            <form>
                <BaseInputRadioButtons title='Type of account' listOfOptions={['tenant','landlord','contractor']} valueUpdated={ type => setType(type) } />
                <BaseInputText title='full name' type='text' valueUpdated={ fullName => setFullName(fullName) } />
                <BaseInputText title='email' type='email' valueUpdated={ email => setEmail(email) }/>
                <BaseInputText title='telephone' valueUpdated={ telephone => setTelephone(telephone) }/>
            </form>
        </Fragment>,
        <Fragment>
            <form>
                <BaseInputText title='gender' type='text' valueUpdated={ gender => setGender(gender) } />
                <BaseInputText title='date of birth' type='date' valueUpdated={ dateOfBirth => setDateOfBirth(dateOfBirth) }/>
                <BaseInputText title='country' type='text' valueUpdated={ country => setCountry(country) } />
                <BaseInputText title='city' type='text' valueUpdated={ city => setCity(city) } />
            </form>
        </Fragment>,
        <Fragment>
            <form>
                <BaseInputText title='password' type='password' valueUpdated={ password => setPassword(password) } />
                <BaseInputText title='confirm password' type='password' valueUpdated={ confirmedPassword => setConfirmedPassword(confirmedPassword) } />
            </form>
        </Fragment>
    ])

    if (urlToRedirectTo) {
        history.push(urlToRedirectTo);
    }

    return (
        <div className='the-signup-form'>
            <h2 className='glb-h2'>Create a new account!</h2>
            <BaseMultipageCard numberOfPages={3} listPages={listForms} buttonFinishPressed={() => loadDataToContextAndDB()} />
            <a href="/auth/login">Already have an account?</a>
            
        </div>
    );
}

export default TheSignupForm;