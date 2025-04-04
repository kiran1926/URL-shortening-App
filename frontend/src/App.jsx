import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import urlList from './components/urlList/urlList';
import * as urlService from './services/urlService';
import { useContext, useState, useEffect } from 'react';

function App() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchAllUrls = async () => {
      const urlsData = await urlService.index();
      console.log('urlsData:', urlsData);
    };
    if (user) fetchAllUrls();
  }, [user])
    //return code here
  }

  const [urls, seturls] = useState([]);

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        {user ? (
          <>
            {/* Protected routes (availale only to signed-in users) */}
            <Route path='/URLs' element={<urlList />} />
          </>
        ) : (
          <>
            {/* Non-user routes (available onlt to guests) */}
            <Route path='/sign-up' element={<SignUpForm />} />
            <Route path='/sign-in' element={<SignInForm />} />
            </>
        )}
      </Routes>
    </>
  );


export default App;
