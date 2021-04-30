import {
  db,
  googleAuthProvider,
  firebase
} from "./config/firebase";

function App() {
  const signInWithGoogle = async () => {
    firebase.auth().useDeviceLanguage();


     try {
       await firebase.auth().signInWithPopup(googleAuthProvider);
     }catch (e) {
       console.error(e.message);
     }
  };




  return (
    <div></div>
  );   
}

export default App;
