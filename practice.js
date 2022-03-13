const firebaseConfig = {
    apiKey: "AIzaSyAIEMenG9rgqra57N4ekZHopzh6dkaRCFE",
    authDomain: "kwitter-419ec.firebaseapp.com",
    databaseURL: "https://kwitter-419ec-default-rtdb.firebaseio.com",
    projectId: "kwitter-419ec",
    storageBucket: "kwitter-419ec.appspot.com",
    messagingSenderId: "854665629215",
    appId: "1:854665629215:web:049772634781bee29a8f2a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function add_user() {
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}