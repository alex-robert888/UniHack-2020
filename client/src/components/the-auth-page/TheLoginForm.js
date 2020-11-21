
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

  async function loadDataToContext() {
    console.log(type, email, password);
    try {
        const loginData = await axios.post(`http://localhost:5000/auth/login/${type}`, {
            email: email,
            password: password  
        })

        alert(loginData.data.fullname);
        
        sessionStorage.setItem('fullname', loginData.data.fullname)
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('public_id', loginData.data.public_id);
    
        history.push(`/${type}`);
        window.location.reload(false);
    }
    catch(exception) {
        alert("MESSAGE: ", exception.stack);
    } 


  }

    return (
        <section id='the-login-form'>
          <h2 className='glb-h2'>Welcome back!</h2>  
          <BaseMultipageCard numberOfPages={1} listPages={listForms} buttonFinishPressed={() => loadDataToContext()} />
          <a href="/auth/signup">Create new account</a>
        </section>
    );
}

export default TheLoginForm;