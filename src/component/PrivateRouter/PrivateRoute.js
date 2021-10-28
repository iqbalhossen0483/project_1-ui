import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';
import "./PrivateRoute.css"

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoad } = useAuth();
    if (isLoad) {
        return (
            <div className="h-screen flex justify-center items-center">
                <div className="spinner"></div>
            </div>)
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ?
                children :
                <Redirect
                    to={{
                        pathname: "/log-in",
                        state: { from: location }
                    }}
                />
            }
        />
    );
};

export default PrivateRoute;