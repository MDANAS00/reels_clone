import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Feed from './Components/Feed';
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Components/Profile';
import Ioa from './Components/Ioa';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoute/>}>
            <Route path='/' element={<Feed/>}/>
            <Route path='/profile/:id' element={<Profile/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
     </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
