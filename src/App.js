
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Component/Home/Home/Home';
import Login from './Component/Home/Login/Login';
import Registar from './Component/Home/Registar/Registar';
import Navbar from './Component/Navbar/Navbar';

// import InventoryDetails from './Component/Home/InventoryDetails/InventoryDetails';
// import RequireAuth from './Component/Home/RequireAuth/RequireAuth';



function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
      <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/home' element={<Home></Home>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/registar' element={<Registar></Registar>}></Route>
     <Route path='/' element={<Registar></Registar>}></Route>
     <Route path='/registar' element={<Registar></Registar>}></Route>
     



      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
