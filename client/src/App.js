
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import TheHeader from './components/the-header/TheHeader';
import TheHomePage from './components/the-home-page/TheHomePage';
import TheAuthPage from './components/the-auth-page/TheAuthPage';
import UserState from './context/user/userState';
import TheTenantPage from './components/the-tenant-page/TheTenantPage';
import TheContractorPage from './components/the-contractor-page/TheContractorPage';
import TheLandlordPage from './components/the-landlord-page/TheLandlordPage';

const App = () => {
  return (
    <UserState>
      <Router>
        <div className='App'>
          <TheHeader />
          <Switch>
            <Route path='/' exact component={TheHomePage} />
            <Route path='/auth' component={TheAuthPage} />
            <Route path='/tenant' component={TheTenantPage} />
            <Route path='/contractor' component={TheContractorPage} />
            <Route path='/landlord' component={TheLandlordPage} />
          </Switch>
        </div>
      </Router>
    </UserState>
  );
}

export default App;