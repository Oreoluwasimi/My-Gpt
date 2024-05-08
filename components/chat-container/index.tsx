"use client";

import React, { useState, useEffect } from "react";
import { MessageForm } from "./message-form";
import { MessageList } from "./message-list";
import { getUserData } from "@/app/authUtils/getUser";
import { IMessage } from "@/app/interfaces/message";
import { fetchGPTResponse } from "@/actions/gpt-action";

interface MessageType {
  user: string;
  text: string;
  picture: string;
}

export const ChatContainer = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const [user, setUser] = useState<any>(null);
  const [textInput, setTextInput] = useState<string>("");
  const [context, setContext] = useState<number[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUserData();
      setUser(data);
    };

    fetchUser();
  }, []);

  const addUserMessages = async () => {
    const newMessage = {
      user: user.username,
      text: textInput,
      picture: user.imageUrl,
    };
    setMessages((prevMessage) => [...prevMessage, newMessage]);
    setTextInput("");
    await getGPTResponse(newMessage.text);
  };

  const getGPTResponse = async (text: string) => {
    // Send to an endpoint to get GPT response
    console.log("This is the user message: ", text);

    await fetchGPTResponse(text, context)
      .then((response) => {
        if (response.status === "success") {
          const gptResponse = response.data?.response as string;
          const context = response.data?.context as number[];
          const message = {
            user: "My-GPT",
            picture:
              "https://static.vecteezy.com/system/resources/thumbnails/021/059/825/small_2x/chatgpt-logo-chat-gpt-icon-on-green-background-free-vector.jpg",
            text: gptResponse,
          };
          setMessages((prevMessages) => [...prevMessages, message]);
          setContext(context);
        } else {
          console.error("Error:", response.error);
        }
      })
      .catch((error) => {
        console.error("An unexpected error occurred:", error);
      });
  };

  const onChange = (input: string) => {
    setTextInput(input);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-y-auto hidden-scrollbar items-center relative">
      <div className=" flex-1 h-full p-4 w-[800px] bg-accent rounded-md my-6">
        <MessageList messages={messages} user={user} />
      </div>
      <div className="fixed bottom-0 w-full bg-accent flex justify-center">
        <MessageForm
          onChange={onChange}
          addMessage={addUserMessages}
          textInput={textInput}
        />
      </div>
    </div>
  );
};
