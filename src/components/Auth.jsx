import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import "../styles/Auth.css"


import Cookies from "universal-cookie";
const cookies = new Cookies();

const Auth = (props) => {
  const {setIsAuth}=props;

  const signInwithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth">
      <p>Sign in with google to continue</p>
      <button onClick={signInwithGoogle}>Sign in</button>
    </div>
  );
};

export default Auth;
