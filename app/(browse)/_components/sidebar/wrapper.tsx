"use client";

interface WrapperProps {
    children: React.ReactNode;
};

export const Wrapper = ({children}: WrapperProps) => {

    

    return(
        <aside className="fixed left-0 flex flex-col justify-between w-60 h-full bg-background z-50 ">          
                {children}                 
        </aside>
     
    )
}