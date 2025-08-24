import MatrixBackground from "../components/MatrixBackground";
import ChatWindow from "../components/ChatWindow";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <MatrixBackground />
      <ChatWindow />
    </div>
  );
}
