"use client";

import { Button } from "@/components/ui/button";
import { NewchatBtn } from "./new-chat-btn";
import { PackageOpen} from "lucide-react"


export const NewChat = () => {
    return (
        <div >
            <div className="m-3 p-1 flex items-center justify-between hover:bg-accent w-[220px] h-10 rounded-md " >
                <div className=" flex items-center">
                    <PackageOpen className="w-6 h-6"/>
                    <span className="text-sm pl-2">
                        New chat
                    </span>
                </div >
                <div>
                <NewchatBtn />
                </div>               
            </div>
        </div>
      
    )

}