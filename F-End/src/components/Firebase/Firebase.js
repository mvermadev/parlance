import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBfPRdurJDBq6JbUK0JazFXbEjwZep6rJI",
    authDomain: "recruiting-monk.firebaseapp.com",
    databaseURL: "https://recruiting-monk.firebaseio.com",
    projectId: "recruiting-monk",
    storageBucket: "recruiting-monk.appspot.com",
    messagingSenderId: "673351104514",
    appId: "1:673351104514:web:4d512b8c2c92374c2f4f1b",
    measurementId: "G-8FTVY97BKM"
  };


  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);

      this.auth = app.auth();

    }

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
  }
  
  export default Firebase;
