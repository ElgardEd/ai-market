import './App.css';
import Navigation from './components/Navigation/Navigation';
import Chat from './components/Chat/Chat';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { logout, restoreSession } from './features/auth/authSlice';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  const { isAuthenticated } = useAppSelector((store) => store.auth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')
    const userId = localStorage.getItem('userId')

    if (accessToken && refreshToken && userId) {
      dispatch(restoreSession({ accessToken, refreshToken, userId }))
    }
  }, [dispatch])


  return (
    <>
      <Navigation />
      <Routes>
      <Route path='/main' element={<Home />}/>
      <Route path='/sign-in' />
      <Route path='/sign-up' />
      <Route path='/chat' element={<Chat />}/>
      </Routes>
    </>
  )
}

export default App

// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Home from './components/Home/Home';
// import Navigation from './components/Navigation/Navigation';
// import Chat from './components/Chat/Chat';
// import Login from './components/Login/Login';
// import Signup from './components/Signup/Signup';

// function App() {
//   return (
//     <>
//       <Navigation />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       <Chat />
//     </>
//   )
// }

// export default App;
