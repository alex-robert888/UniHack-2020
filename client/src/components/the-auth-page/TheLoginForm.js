
import './TheLoginForm.scss';
import BaseMultipageCard from '../base/BaseMultipageCard';
import BaseInputText from '../base/BaseInputText';
import { useState, Fragment } from 'react'
import axios from 'axios';

const TheLoginForm = () => {

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  

  let [listForms, setListForms] = useState([
    <Fragment>
        <form>
            <BaseInputText title='email' type='email' valueUpdated={ email => setEmail(email) } />
            <BaseInputText title='password' type='password' valueUpdated={ password => setPassword(password) } />
        </form>
    </Fragment>
    
  ])

  function loadDataToContext() {
    try {
        axios.get(`http://localhost:5000/auth/login/tenant`, {
            email: email,
            password: password
        })
    }
    catch(exception) {
        alert(exception);
    } 
  }

    return (
        <section id='the-login-form'>
          <h2 className='glb-h2'>Welcome back!</h2>  
          <BaseMultipageCard numberOfPages={1} listPages={listForms} buttonFinishPressed={() => loadDataToContext()} />
        </section>
    );
}

export default TheLoginForm;