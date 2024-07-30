import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx"; // Correct path
import Card from "./components/card.jsx"; // Correct path
import TodoContainer from "./components/todoContainer.jsx"; // Correct path
import Login from './components/pages/Login.jsx';
import Signup from "./components/pages/Signup.jsx";
import Landing from "./components/pages/Landing.jsx";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      username: 'sriram',
      password: '123'
    }
  ]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} setUsers={setUsers} />} />
          <Route path='/signup' element={<Signup users={users} setUsers={setUsers} />} />
          <Route path='/landing' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App