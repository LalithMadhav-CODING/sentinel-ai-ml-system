import MatrixBackground from "../components/MatrixBackground";
import ChatWindow from "../components/ChatWindow";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <MatrixBackground />
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <ChatWindow />
      </div>
    </div>
  );
}
