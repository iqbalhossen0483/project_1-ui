import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import NotFoundPage from './component/Appointment/NotFoundPage/NotFoundPage';
import ContactUs from './component/ContactUs/ContactUs';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import LogIn from './component/LogIn/LogIn';
import PrivateRoute from './component/PrivateRouter/PrivateRoute';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import SignUp from './component/SignUp/SignUp';
import Desboard from './Deshboard/Desboard';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
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
