import { useParams } from "react-router";

import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";
// import { useAuth } from "../hooks/useAuth";
import { useRoom } from "../hooks/useRoom";
// import { database } from "../services/firebase";

import logoImg from "../assets/images/logo.svg";
import deleteImg from "../assets/images/delete.svg";

import "../styles/room.scss";
import { database } from "../services/firebase";

type RoomParams = {
  id: string;
};

export const AdminRoom = () => {
  // const { user } = useAuth();
  const params = useParams<RoomParams>();

  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Are you sure you want to delete this question?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Close Room</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>{title}</h1>
          {questions.length > 0 && <span>{questions.length} Question(s)</span>}
        </div>
        <div className="questions-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="delete question" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
};
