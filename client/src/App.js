
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import TheHomePage from './components/the-home-page/TheHomePage';
import TheAuthPage from './components/the-auth-page/TheAuthPage';
import UserState from './context/user/userState';
import TheTenantPage from './components/the-tenant-page/TheTenantPage';
import TheContractorPage from './components/the-contractor-page/TheContractorPage';
import TheLandlordPage from './components/the-landlord-page/TheLandlordPage';
import TheAddressForm from './components/the-landlord-page/TheAddressForm'

const App = () => {
  return (
    <UserState>
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/' exact component={TheHomePage} />
            <Route path='/auth' component={TheAuthPage} />
            <Route path='/tenant' exact component={TheTenantPage} />
            <Route path='/contractor' exact component={TheContractorPage} />
            <Route path='/landlord' exact component={TheLandlordPage} />
            <Route path='/landlord/address' exact component={TheAddressForm} />
          </Switch>
        </div>
      </Router>
    </UserState>
  );
}

export default App;