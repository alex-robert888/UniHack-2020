
import './TheLoginForm.scss';
import BaseMultipageCard from '../base/BaseMultipageCard';
import BaseInputText from '../base/BaseInputText';
import BaseInputRadioButtons from '../base/BaseInputRadioButtons';
import { BrowserRouter as Redirect, useHistory } from 'react-router-dom';
import { useState, Fragment } from 'react'
import axios from 'axios';

const TheLoginForm = () => {

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [type, setType] = useState('');
  let [history, setHistory] = useState(useHistory());
  

  let [listForms, setListForms] = useState([
    <Fragment>
        <form>
            <BaseInputRadioButtons title='Type of account' listOfOptions={['tenant','landlord','contractor']} valueUpdated={ type => setType(type) } />
            <BaseInputText title='email' type='email' valueUpdated={ email => setEmail(email) } />
            <BaseInputText title='password' type='password' valueUpdated={ password => setPassword(password) } />
        </form>
    </Fragment>
    
  ])

  function loadDataToContext() {
    console.log(type);
    try {
        axios.get(`http://localhost:5000/auth/login/${type}`, {
            email: email,
            password: password
        })
    }
    catch(exception) {
        alert(exception);
    } 
    history.push(`/${type}`);
  }

    return (
        <section id='the-login-form'>
          <h2 className='glb-h2'>Welcome back!</h2>  
          <BaseMultipageCard numberOfPages={1} listPages={listForms} buttonFinishPressed={() => loadDataToContext()} />
        </section>
    );
}

export default TheLoginForm;