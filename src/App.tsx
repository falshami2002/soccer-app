import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import { UserProvider } from './Components/Firebase';
import SearchPage from './Pages/SearchPage';
import TeamPage from './Pages/TeamPage';

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/search' element={<SearchPage/>} />
        <Route path='/team-page' element={<TeamPage/>} />
      </Routes>
    </UserProvider>
  );
}

export default App;
