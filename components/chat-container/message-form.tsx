"use client";
import React, { KeyboardEvent, FormEvent } from 'react';
import { ArrowUp } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Hint } from "../hint";
import { Textarea } from '../ui/textarea';

interface IMessageForm{
    addMessage: () => void
    onChange: (value: string) => void
    textInput: string
}

export const MessageForm = ({ addMessage, onChange, textInput }: IMessageForm) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if(!textInput) return;

        addMessage();
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Prevent default to avoid form submission or textarea default behavior
            const syntheticEvent = new Event('submit', { bubbles: true }) as unknown as FormEvent<HTMLFormElement>;
            handleSubmit(syntheticEvent); // Call handleSubmit function to submit the form
        }
        if (event.key === 'Enter' && event.shiftKey) {
          event.preventDefault(); // Prevent default to avoid form submission or textarea default behavior
          const target = event.target as HTMLTextAreaElement;
          const { selectionStart, selectionEnd } = target;
          
          const newValue = target.value.substring(0, selectionStart) +
            '\n' +
            target.value.substring(selectionEnd);
          
          onChange(newValue);
          
          setTimeout(() => {
            target.selectionStart = selectionStart + 1;
            target.selectionEnd = selectionStart + 1;
          }, 0);
        }
    };

    return (    
        <form className="w-[800px] mb-6 flex relative" onSubmit={handleSubmit}>
            <Textarea 
                onChange={(e) => onChange(e.target.value)} 
                onKeyDown={handleKeyDown}
                value={textInput} 
                placeholder="Talk to my AI Assistant..." 
                className="p-2 w-full border border-gray-100 border-opacity-30 resize-none overflow-auto" 
            />
            <div className="flex items-center absolute top-[10px] right-4">
                <Hint label="Send message" side="top" asChild>
                    <Button type="submit" className="h-auto p-2 bg-gray-400 " variant="ghost">
                        <ArrowUp className="h-4 w-4" />
                    </Button>
                </Hint>
            </div>
        </form>
    )
}
