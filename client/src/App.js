
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import TheHeader from './components/the-header/TheHeader';
import TheHomePage from './components/the-home-page/TheHomePage';
import TheAuthPage from './components/the-auth-page/TheAuthPage';
import UserState from './context/user/userState';

const App = () => {
  return (
    <UserState>
      <Router>
        <div className='App'>
          <TheHeader />
          <Switch>
            <Route path='/' exact component={TheHomePage} />
            <Route path='/auth' component={TheAuthPage} />
          </Switch>
        </div>
      </Router>
    </UserState>
  );
}

export default App;