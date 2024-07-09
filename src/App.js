import {Route, Routes} from 'react-router-dom';
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

import SiteFooter from './components/common/SiteFooter';
import SiteNav from './components/common/SiteNav';

import HomePage from './components/home/HomePage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import Contacts from './components/CONTACTS/Contacts';

function App() {
  return (
    <div>
        <SiteNav/>
        <Routes>
          <Route path='*' element={<HomePage/>}/>
          <Route path='/' exact={true} element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
        <SiteFooter/>
    </div>
  );
}

export default App;
