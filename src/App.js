import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import NotFoundPage from './component/Appointment/NotFoundPage/NotFoundPage';
import ContactUs from './component/ContactUs/ContactUs';
import Home from './component/Home/Home';
import LogIn from './component/LogIn/LogIn';
import MyAccount from './component/MyAccount';
import PrivateRoute from './component/PrivateRouter/PrivateRoute';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import SignUp from './component/SignUp/SignUp';
import AddDoctors from './Deshboard/AddDoctors';
import AddGallery from './Deshboard/AddGallery';
import AddServices from './Deshboard/AddServices';
import Desboard from './Deshboard/Desboard';
import DesboardGallery from './Deshboard/DesboardGallery';
import DesboardService from './Deshboard/DesboardService';
import DesbordDoctors from './Deshboard/DesbordDoctors';

function App() {
  return (
    <div className='h-screen overflow-auto'>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/service/:id" element={<PrivateRoute element={<ServiceDetails />} />} />
            <Route path="/contact-us" element={<PrivateRoute element={<ContactUs />} />} />
            <Route path="/my-account" element={<PrivateRoute element={<MyAccount />} />} />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/desboard" element={<Desboard />}>
              <Route path="service" element={<DesboardService />} />
              <Route path="doctor" element={<DesbordDoctors />} />
              <Route path="gallery" element={<DesboardGallery />} />
              <Route path="add-service" element={<AddServices />} />
              <Route path="add-doctor" element={<AddDoctors />} />
              <Route path="add-gallery" element={<AddGallery />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
