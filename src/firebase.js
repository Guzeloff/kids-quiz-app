import firebase from 'firebase'



const firebaseApp  = firebase.initializeApp( {
    apiKey: "AIzaSyD6IVF3BfDw7aRnMkKUqdHkcwywoNEcjf8",
    authDomain: "kids-quiz-game-ecbae.firebaseapp.com",
    databaseURL: "https://kids-quiz-game-ecbae.firebaseio.com",
    projectId: "kids-quiz-game-ecbae",
    storageBucket: "kids-quiz-game-ecbae.appspot.com",
    messagingSenderId: "718036439386",
    appId: "1:718036439386:web:8a68bda63588af81166363",
    measurementId: "G-6FLY6DZKLG"
  });

  const db = firebaseApp.firestore(); //getting from db
  
  const auth =firebase.auth(); //getting the AUTH

  export {db , auth};