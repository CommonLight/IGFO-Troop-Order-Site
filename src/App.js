import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Enter from './components/Enter'
import Information from './components/Information'
import Registration from './components/Registration'
import Login from './components/Login'
import Profile from './components/Profile'
import UpdateProfile from './components/UpdateProfile'
import OrderForm from './components/OrderForm'
import UpdateOrder from './components/UpdateOrder'
import OrderConfirmation from './components/OrderConfirmation'
import PastOrders from './components/PastOrders';

import AudioPlayer from './components/AudioPlayer'



function App() {
 
  return (
    <div className="App" 
    style={{backgroundColor: "black", height:"100vh"}}>
      
      <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Intro/>}/>
          <Route path='/enter' element={<Enter/>}/>
          <Route path='/information' element={<Information/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile/:id' element={<Profile/>}/>
          <Route path='/profile/update/:id' element={<UpdateProfile/>}/>
          <Route path='/order' element={<OrderForm/>}/>
          <Route path='/order/update/:id' element={<UpdateOrder/>}/>
          <Route path='/orders/all' element={<PastOrders/>}/>
          {/* make orders route to disply past orders, view individual order :id */}
          <Route path='/order/confirmation/:id' element={<OrderConfirmation/>}/>
        </Routes>
      <AudioPlayer/>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
