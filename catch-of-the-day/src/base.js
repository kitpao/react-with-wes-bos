import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAp50dno-VMvMqoGa3lQxLhm3o0J_CU9C0",
  authDomain: "catch-of-the-day-kitzia.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-kitzia-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

//base export
export default base;
