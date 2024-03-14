
import { Hint } from "../hint";
import { CopyButton } from "./copy-button";
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/dark.css'
import React from "react";

interface ChatMessageProps {
   imageUrl: string;
   name: string;
   text: string;
};

  
export const ChatMessage = ({imageUrl, name, text}: ChatMessageProps) => {

    if(name === "Chat-GPT") {
        return (
            <div className="flex flex-col p-6 pb-10 gap-4 bg-accent" >
            <div className="flex justify-between">
                <div className="flex gap-3">
                    <img src={imageUrl} alt="alt" className="w-6 h-6 rounded-full"/>
                    <span>{name}</span>
                </div>           
                <div>
                <Hint label="Copy" side="top" asChild>
                    <CopyButton value={text || ""}/>
                </Hint>
                </div>
            </div>
            <div>
                <ReactMarkdown
                    children={text}
                    rehypePlugins={[rehypeHighlight]}
                />
            </div>
            </div>
        )
       
    }

    return (
        <div className="flex flex-col p-6 pb-10 gap-4 bg-accent" >
        <div className="flex gap-3">
            <img src={imageUrl} alt="alt" className="w-6 h-6 rounded-full"/>
            <span>{name}</span>
        </div>
        <div>
            <p>
                {text}
            </p>
        </div>
        </div>
    )
}