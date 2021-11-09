import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import Appointment from './component/Appointment/Appointment';
import NotFoundPage from './component/Appointment/NotFoundPage/NotFoundPage';
import ContactUs from './component/ContactUs/ContactUs';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import LogIn from './component/LogIn/LogIn';
import PrivateRoute from './component/PrivateRouter/PrivateRoute';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import SignUp from './component/SignUp/SignUp';
import AddServices from './Deshboard/AddServices';
import Desboard from './Deshboard/Desboard';

function App() {
  return (
    <div className="App bg-gray-200">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>
            <PrivateRoute path="/service/:id">
              <ServiceDetails />
            </PrivateRoute>
            <PrivateRoute path="/contact-us">
              <ContactUs />
            </PrivateRoute>
            <Route path="/log-in">
              <LogIn />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/desboard">
              <Desboard></Desboard>
            </Route>
            {/* <Route path="/add-service">
              <Desboard />
            </Route> */}
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
