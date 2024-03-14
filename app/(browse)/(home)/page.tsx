import { ChatContainer } from "@/components/chat-container";


export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 bg-accent h-full">
      <ChatContainer />
    </div>
  );
}

