import React, { useState, useRef } from 'react';
import { Volume2,  VolumeX } from 'lucide-react';

export const SpeechIcon = ({textToRead} : {textToRead:string}) => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);


    const speakText = () => {
        const speech = new SpeechSynthesisUtterance(textToRead);
        utteranceRef.current = speech;
        speechSynthesis.speak(speech);
        setIsSpeaking(true);
    };

    const stopSpeaking = () => {
        if (utteranceRef.current) {
            speechSynthesis.cancel();
            setIsSpeaking(false);
        }
    };

    return (
        <div>
            <button onClick={isSpeaking ? stopSpeaking : speakText}>
                {isSpeaking ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
        </div>
    );
};

