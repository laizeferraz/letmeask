import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleImg from "../assets/images/google-icon.svg";

import "../styles/auth.scss";
export const Home = () => {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Questions and Answers illustration." />
        <strong>Create live Q&amp;A rooms</strong>
        <p>Answers room questions in real time.</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="Letmeask" />
          <button>
            <img src={googleImg} alt="Google logo" />
            Create your room with Google
          </button>
          <div>or get inside of a room</div>
          <form>
            <input type="text" placeholder="type the room number" />
            <button type="submit">Get inside</button>
          </form>
        </div>
      </main>
    </div>
  );
};
