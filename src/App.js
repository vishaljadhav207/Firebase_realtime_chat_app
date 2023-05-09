import { useState, useRef } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Cookies from "universal-cookie";
import Chat from "./components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
const cookies = new Cookies();

function App() {
  const [IsAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [Room, setRoom] = useState(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };
  const RoomInputRef = useRef(null);

  if (!IsAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }
  return (
    <div className="give">
      {Room ? (
        <Chat Room={Room} />
      ) : (
        <div className="room">
          <label>Enter Room Information </label>
          <input placeholder="Enter room ID " ref={RoomInputRef} />
          <button onClick={() => setRoom(RoomInputRef.current.value)}>
            Enter chat
          </button>
        </div>
      )}
      <div className="sign-out">
        <button onClick={signUserOut}>Sign out</button>
      </div>
    </div>
  );
}
export default App;
