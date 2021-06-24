import React from 'react';
import ReactDOM from 'react-dom';
//globalStyles 
import {GlobalStyles} from './global-styles'
import { App } from './app';
//firebase context
import {FirebaseContext} from './context/firebase';
const firebaseConfig={
  apiKey: "AIzaSyDETaEXQ5dE8N2zV_l-lJvATXlheVT-FYs",
    authDomain: "netflix-clone-c7aa6.firebaseapp.com",
    projectId: "netflix-clone-c7aa6",
    storageBucket: "netflix-clone-c7aa6.appspot.com",
    messagingSenderId: "621236581256",
    appId: "1:621236581256:web:b5433ff7bcae143ab1c03d"
   
};

const firebase=window.firebase.initializeApp(firebaseConfig);
ReactDOM.render(
<>
<FirebaseContext.Provider value={{firebase:window.firebase}}>
<GlobalStyles/>
<App />
</FirebaseContext.Provider>

</>, document.getElementById("root"));