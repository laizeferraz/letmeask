import { useHistory } from "react-router-dom";
import { FormEvent } from "react";
import { useState } from "react";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleImg from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

import "../styles/auth.scss";

export const Home = () => {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  }

  async function handleJoinRoom(e: FormEvent) {
    e.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Room does not exists.");
      return;
    }

    if (roomRef.val().closedAt) {
      alert("Room already closed.");
      return;
    }
    history.push(`/rooms/${roomCode}`);
  }
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Questions and Answers illustration." />
        <strong>Create liveeeee Q&amp;A rooms</strong>
        <p>Answers room questions in real time.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleImg} alt="Google logo" />
            Create your room with Google
          </button>
          <div className="separator">or enter a room</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Type the room code"
              onChange={(e) => setRoomCode(e.target.value)}
              value={roomCode}
            />

            <Button>Get inside</Button>
          </form>
        </div>
      </main>
    </div>
  );
};
