import React from 'react';
import ReactDOM from 'react-dom';
//globalStyles 
import {GlobalStyles} from './global-styles'
import { App } from './app';
//firebase context
import {FirebaseContext} from './context/firebase';
const config={
  apiKey: "AIzaSyBcnC6XRE-OBS8x_pQNBfpkAcXm5rEX5ko",
  authDomain: "netflix-clone-tutorial-e4dd7.firebaseapp.com",
  projectId: "netflix-clone-tutorial-e4dd7",
  storageBucket: "netflix-clone-tutorial-e4dd7.appspot.com",
  messagingSenderId: "67639899200",
  appId: "1:67639899200:web:27322f9d43143aad14dba5"
};
const firebase=  window.firebase.initializeApp(config);
ReactDOM.render(
<>
<FirebaseContext.Provider value={{firebase:window.firebase}}>
<GlobalStyles/>
<App />
</FirebaseContext.Provider>

</>, document.getElementById("root"));