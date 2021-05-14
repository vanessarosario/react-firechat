import { signInWithGoogle, signOut } from "./login";
import { useAuthState } from "./hooks";
import { db, googleAuthProvider, firebase } from "./config/firebase";
import {Button, Channel} from "./components";
 

function App() {
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
          <Button estilos="salir" onClick={signOut}> Logout Google </Button>
          <p>Bienvenidos al CHAT!</p>
          <Channel user= {user} />
        </>
      ) : <Button onClick={signInWithGoogle} >Sign in with Google</Button>

      
    }

  
    </div>
  );
}

export default App;
