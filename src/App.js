import { signInWithGoogle, signOut } from "./login";
import { useAuthState } from "./hooks";
import { db, googleAuthProvider, firebase } from "./config/firebase";
import {Button, Channel} from "./components";
 

function App() {
  const signInWithGoogle = async () => {
    firebase.auth().useDeviceLanguage();

try {
      await firebase.auth().signInWithPopup(googleAuthProvider);
    } catch (e) {
      console.error(e.message);
    }
  };
  const { user, initializing} = useAuthState(firebase.auth());

  const renderLoading = () => {
    if (initializing) {
      return <div>
      <h1>Loading ...</h1>
      </div>
    }

  }

  return (
    <div>
    { renderLoading()}
    {
      user ? (
        <>
          <Button onClick={signOut}> Salir</Button>
          <p>Bienvenidos al CHAT!</p>
          <Channel user= {user} />
        </>
      ) : <Button onClick={signInWithGoogle}> Sing in with Google </Button>

      }

    </div>
  );
}

export default App;
