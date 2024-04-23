'use server'

import { Inter_Tight } from "next/font/google";

interface RequestBody {
    model: string;
    prompt: string;
    stream: boolean;
    context: number[];
  }
  
export interface OllamaResponse{
    model: string
    response: string
    done: boolean
    context: number[];
}

  interface APIResponse {
    status: string;
    data?: OllamaResponse;
    error?: string;
  }
  
  export const fetchGPTResponse = async (text: string, context: number[]): Promise<APIResponse> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const requestBody: RequestBody = {
      model: "llama3:8b",
      prompt: text,
      stream: false,
      context: context
    };
  
    const raw = JSON.stringify(requestBody);
  
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
  
    try {
      const response = await fetch("http://localhost:11434/api/generate", requestOptions);
  
      if (!response.ok) {
        const errorData = await response.text();
        return { status: 'error', error: errorData };
      }
  
      const data = await response.text();
      const parsed_data = JSON.parse(data)
      return { status: 'success', data: parsed_data};
    } catch (error) {
      console.error('An error occurred:', error);
      return { status: 'error', error: (error as Error).message };
    }
  };