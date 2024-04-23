'use client';

import React, { useState, useEffect } from 'react';
// import { SignInButton, currentUser } from "@clerk/nextjs";
import { getUserData } from '@/app/authUtils/getUser';
import { ChatMessage } from "./message"
import { Button } from "../ui/button";
import { IMessage } from '@/app/interfaces/message';

interface MessageListProps{
    messages: IMessage[]
    user: any
}

export const MessageList = ({ messages, user}: MessageListProps) => {

    if (!user) {
        return (
            
            <div className="flex flex-col flex-1  w-full h-auto items-center justify-center">
            
                <p className="text-sm text-muted-foreground">
                    Please Login to continue
                </p>
            </div>
        )

    }

    return (
        <div className="flex flex-1 flex-col w-full h-auto">
        {messages.map((message) => (
             <ChatMessage 
            imageUrl={message.picture} name={message.user} text={message.text}
             />
        ))}         
    </div>
    )
}