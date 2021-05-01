import { signInWithGoogle, signOut } from "./login";
import { useAuthState } from "./hooks";
import { db, googleAuthProvider, firebase } from "./config/firebase";
import Button from "./components/Button";

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
      user ? (
        <>
          <Button onClick={signOut}> Salir</Button>
          <p>Bienvenidos al CHAT!</p>
        </>
      ) : <Button onClick={signInWithGoogle}> Sing in with Google </Button>
     }
    </div>
  );
}

export default App;
