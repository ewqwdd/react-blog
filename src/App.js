
import { useEffect, useState } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context/authContext';
import Modal from './UI/modal/Modal';
import { ModalContext } from './context/modalContext';
import Nav from './components/nav';

function App() {
    
  let [isAuth, setIsAuth] = useState(false)

  let [show, setShow] = useState(false)

  let [children, setChildren] = useState()

  useEffect(()=>{
    if(localStorage.getItem("user")){
      setIsAuth(true)
    }
  }, [isAuth])
  

  return(
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <ModalContext.Provider value={{show, setShow, children, setChildren}}>
        <Modal show={show} setShow={setShow}>{children}</Modal>
            <AppRouter />
      </ModalContext.Provider>
    </AuthContext.Provider>
  )
}

export default App;
