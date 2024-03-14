'use server'
import { currentUser } from "@clerk/nextjs";

export const getUserData = async () => {
  const user = await currentUser();
  const username = user?.firstName ? `${user.firstName} ${user.lastName}` : 'Guest';
  const imageUrl = user?.imageUrl;

  return { 
    "username": username, 
    "imageUrl": imageUrl 
  };
};