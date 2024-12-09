import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext) 
    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }

    //User check
    if(user){
        return children
    }


    return (
       <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;