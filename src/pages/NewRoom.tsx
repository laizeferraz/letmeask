import { Link } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";

import "../styles/auth.scss";

export const NewRoom = () => {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Questions and Answers illustration." />
        <strong>Create live Q&amp;A rooms</strong>
        <p>Answers room questions in real time.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Create a new room</h2>
          <form>
            <input type="text" placeholder="Room name" />

            <Button>Create room</Button>
          </form>
          <p>
            <Link to="/">Click here</Link>
            to enter in an existent room.
          </p>
        </div>
      </main>
    </div>
  );
};
