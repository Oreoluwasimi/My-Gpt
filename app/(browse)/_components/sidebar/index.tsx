
import { Actions } from "./actions";
import { NewChat } from "./new-chat"
import { Wrapper } from "./wrapper";

export const Sidebar = () => {
    return (
       
            <Wrapper>
                <NewChat />
                <Actions />
            </Wrapper>
            
      
    )
}