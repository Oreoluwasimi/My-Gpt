"use server";

import { Button } from "@/components/ui/button";

import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { useEffect, useState } from "react";


export const Actions = async () => {

    const user = await currentUser();


    return(
        <div className="flex items-center justify-start gap-x-2 ml-4 lg:ml-0">
            {!user && (
                <SignInButton>
                    <Button size="sm" variant="primary">
                        Login
                    </Button>
                </SignInButton>
            )}

            {!!user && (
                <div className="flex items-center gap-x-4 p-3">
                    <UserButton afterSignOutUrl="/"/>
                    {user.firstName} {user.lastName} 
                </div>
            )}
        </div>
    );

};
