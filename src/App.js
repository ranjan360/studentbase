import './App.css';
import Navbar from "./components/common/Navbar";
import Students from './components/students/Students'
import StudentForm from './components/students/StudentForm'
import Student from './components/students/Student'
import Login from './components/page/Login'
import PrivateRoute from './components/students/PrivateRoute'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store, {rrfProps} from './store'
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'

function App() {
  return (
    <Provider store={store}>
     <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
          <div className="app">
            <PrivateRoute component={Navbar} />
            <Switch>
              <Route exact path="/" component={Students} />
              <Route exact path="/student/:id" component={Student} />
              <Route exact path="/studentform/:id?" component={StudentForm} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
     </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
