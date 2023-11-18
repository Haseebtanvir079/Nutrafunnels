import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import FirstComp from './components/FirstComp';
import SecondComp from './components/SecondComp';
import Services from './components/Services';
import Login from './pages/Login';
import Main from './pages/Main';
import Signup from './pages/Signup';
import { useEffect, useState } from 'react';
function App() {


  const [userLogged,setUserLogged] =useState(false);
  


  useEffect(() => {

    const isLogged = localStorage.getItem('isLoggedIn');

    if (isLogged!==null) {
      setUserLogged(true);
    } else {
      setUserLogged(false);
    }
  }, []);
  return (
    <div className="App">
      
      <Routes>
          <Route
            path={'/'}
            element={ <Login setUserLogged={setUserLogged} userLogged={userLogged}/>}
          />
          <Route
            path={'/signup'}
            element={<Signup setUserLogged={setUserLogged} userLogged={userLogged}/>}
          />
          

          {userLogged && (
            <>
              <Route path={'/main'} element={<Main setUserLogged={setUserLogged} userLogged={userLogged}/>}/>
             
            </>
          )}
        </Routes>

    </div>
  );
}

export default App;
