import { BrowserRouter as Switch, Route } from 'react-router-dom';
import './TheAuthPage.scss';
import '../../style/classes.scss';
import undrawAuth from '../../assets/img/illustrations/undraw_auth.svg';
import TheLoginForm from '../the-auth-page/TheLoginForm';
import TheSignupForm from '../the-auth-page/TheSignupForm';

const TheAuthPage = () => {
    return (
        <section id='the-auth-page' className='page'>
            <section id="the-auth-page-left-side">
                <Switch>
                    <Route path='/auth/login' component={TheLoginForm} />
                    <Route path='/auth/signup' component={TheSignupForm} />
                </Switch>
            </section>

            <section id="the-auth-page-right-side">
                <img src={undrawAuth} alt=""/>
            </section>
        </section>
    );
}

export default TheAuthPage;