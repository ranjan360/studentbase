import React from 'react'
import { isEmpty } from 'react-redux-firebase'
import {Route, Redirect} from 'react-router-dom'
import {isLoaded} from 'react-redux-firebase'
import {useSelector} from 'react-redux'

const PrivateRoute = ({component:Component, ...rest}) => {
    const auth = useSelector((state) => state.firebase.auth);

    if(!isLoaded(auth)){
        return <h1>Loading...</h1>
    }
    return !isEmpty(auth) ? (
    <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
    ):(
    <Redirect to="/login" />
    )
}
export default PrivateRoute