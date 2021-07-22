import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import "../styles/room.scss";

export const Room = () => {
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>Code</div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>React Room</h1>
          <span>4 Questions</span>
        </div>

        <form>
          <textarea placeholder="What is your question?" />

          <div className="form-footer">
            <span>
              To ask a question, <button>please login</button>
            </span>
            <Button type="submit">Send question</Button>
          </div>
        </form>
      </main>
    </div>
  );
};
