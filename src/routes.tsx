import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from 'pages/login';
import { useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import Home from 'pages/home';
import Dashboard from 'pages/dashboard';



export default function AppRoutes() {
  const { theme } = useContext(ThemeContext);
  let background = '#fdfdfd';

  if (theme === 'dark') {
    background = '#1E1E2E';
  }

  return (
    <main style={{ backgroundColor: `${background}`, transition:'all 100ms ease-in-out' }} >
      <Router>

        <Routes>
          <Route path='/' element={<Login />} />

          <Route path='/home' element={<Home/>}>
            <Route index element={<Dashboard/>}/>
          </Route>

        </Routes>
      </Router>
      
    </ main>
  );
}
