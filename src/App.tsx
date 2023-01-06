import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import { UserProvider } from './Utils/Firebase';
import SearchPage from './Pages/SearchPage';
import TeamPage from './Pages/TeamPage';
import UserTeamsPage from './Pages/UserTeamsPage';
import PrivateRoutes from './Utils/PrivateRoutes';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import NoLoginRoutes from './Utils/NoLoginRoutes';

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/team-page' element={<TeamPage />} />
          <Route path='/user-teams' element={<UserTeamsPage />} />
        </Route>
        <Route element={<NoLoginRoutes />} >
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/reset' element={<ForgotPasswordPage />} />
        </Route>
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
