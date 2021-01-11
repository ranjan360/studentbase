import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { createStore, combineReducers } from 'redux'
import {
  firebaseReducer
} from 'react-redux-firebase'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createFirestoreInstance, firestoreReducer} from 'redux-firestore'

const fbConfig = {
    apiKey: "AIzaSyBk914VYydfMZ-PvIG2jJ1N6PIp548Qhyw",
    authDomain: "studentbase-a4217.firebaseapp.com",
    projectId: "studentbase-a4217",
    storageBucket: "studentbase-a4217.appspot.com",
    messagingSenderId: "954434949101",
    appId: "1:954434949101:web:2962b9370d370e629d21e4",
    measurementId: "G-QPPYCH4J8E"
}

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

firebase.firestore()

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState, composeWithDevTools())

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch, 
  createFirestoreInstance // <- needed if using firestore
}

export default store;