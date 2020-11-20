
import './TheLoginForm.scss';
import BaseMultipageCard from '../base/BaseMultipageCard';
import BaseInputText from '../base/BaseInputText';
import { useState, Fragment } from 'react'

const TheLoginForm = () => {
  let [listForms, setListForms] = useState([
    <Fragment>
        <form>
            <BaseInputText title='email' type='email' />
            <BaseInputText title='password' type='password' />
        </form>
    </Fragment>
  ])

    return (
        <section id='the-login-form'>
          <h2 className='glb-h2'>Welcome back!</h2>  
          <BaseMultipageCard numberOfPages={1} listPages={listForms}/>
        </section>
    );
}

export default TheLoginForm;