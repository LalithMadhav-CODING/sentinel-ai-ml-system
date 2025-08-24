import MatrixBackground from "../components/MatrixBackground";
import ChatWindow from "../components/ChatWindow";

export default function Home() {
  return (
    <div>
      <MatrixBackground />
      <div className="main-container">
        <ChatWindow />
      </div>
    </div>
  );
}
