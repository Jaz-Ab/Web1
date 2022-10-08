
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import {getAuth} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAGbIYracJQXZj8wFrclfmlxFzpBlXl-B4",
    authDomain: "mi-pagina-web-5c063.firebaseapp.com",
    projectId: "mi-pagina-web-5c063",
    storageBucket: "mi-pagina-web-5c063.appspot.com",
    messagingSenderId: "569747631429",
    appId: "1:569747631429:web:8df9313a91cca0050e622c",
    measurementId: "G-76QMRTHTWQ"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)