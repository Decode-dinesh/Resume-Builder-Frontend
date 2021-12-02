import React, { useEffect, createContext, useReducer, useContext } from 'react';
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import CreateResume from './components/pages/CreateResume/CreateResume';
import Home from './components/pages/Home/Home';
import EditResume from './components/pages/editResume/EditResume';
import MyResume from './components/pages/MyResumes/MyResume';
import PrintResume from './components/pages/PrintResume/PrintResume';
import Reset from './components/pages/Reset/Reset';
import SignIn from './components/pages/Signin/Signin';
import SignUp from './components/pages/Signup/SignUp';
import { initialState, reducer } from './reducers/UserReducer';


export const UserContext = createContext()

const Routing = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext)
  const location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))

    if (user) {
      dispatch({ type: "USER", payload: user })
      navigate('/')
    } else {
      if (!location.pathname.startsWith('/reset')) {
        navigate('/signup')
      }
    }
  }, [])

  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/signin' element={<SignIn />} />
      <Route exact path='/signup' element={<SignUp />} />
      <Route exact path='/editresume' element={<EditResume />} />
      <Route exact path='/myresumes' element={<MyResume />} />
      <Route exact path='/createresume' element={<CreateResume />} />
      <Route exact path='/printresume' element={<PrintResume />} />
      <Route exact path='/reset' element={<Reset />} />
      <Route exact path='/reset/:token' element={<newPassword />} />
    </Routes>
  
  )
}




function App() {  
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter className="bg">
          <Navbar />
          <Routing />
        </BrowserRouter>
      </UserContext.Provider>
  
    );

}

export default App;
