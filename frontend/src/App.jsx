import { useState } from 'react';
import './App.css'
import SignUp from './components/SignUp';
import Signin from './components/Signin';
import StudentPage from './components/StudentPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import InstructorPage from './components/InstructorPage';
import { UserContext } from './contexts/UserContext';
import Private from './components/Private';


function App() {
  
  const [loggedUser, setLoggedUser] = useState(localStorage.getItem("lms-token"));

  return (
    <>
      <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
        <Router>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<Signin />} />
            {/* <Route path="/studentpage" element={<StudentPage />} />
            <Route path="/instructorpage" element={<InstructorPage />} /> */}
            <Route path="/studentpage" element={<Private Component={StudentPage} />} />
            <Route path="/instructorpage" element={<Private Component={InstructorPage} />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App
