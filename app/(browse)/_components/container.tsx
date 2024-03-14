"use client";




interface ContainerProps {
    children: React.ReactNode;
};

export const Container = ({children}: ContainerProps) => {
    return(
        <div className="flex-1 ml-60 p-3 bg-accent">
            {children}
        </div>
    )
}