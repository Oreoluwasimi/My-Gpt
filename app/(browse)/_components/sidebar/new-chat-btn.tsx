import { Hint } from "@/components/hint"
import { Button } from "@/components/ui/button"
import { SquarePen } from "lucide-react"


export const NewchatBtn = () => {
    return (
        <div className="p-3 flex items-center w-full">
        <Hint label="New chat" side="right" asChild>
        <Button onClick={() => {}} className="h-auto p-2 ml-auto flex items-center" variant="ghost" >
            <SquarePen className="h-4 w-4"/>
        </Button>
        </Hint>
      
    </div>
    )
}