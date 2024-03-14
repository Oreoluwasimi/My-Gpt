import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { 
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";



const avatarSizes = cva(
    "",
    {
      variants: {
        size: {
          default: "h-8 w-8",
          lg: "h-14 w-14",
        },
      },
      defaultVariants: {
        size: "default",
      },
    },
  );

interface UserAvatarProps
extends VariantProps<typeof avatarSizes> {
  username: string;
  imageUrl: string;
};

export const UserAvatar = ({username,
    imageUrl,
    size,
  }: UserAvatarProps) => {


    return (
        <div className="relative">
            <Avatar className={cn(avatarSizes({ size }))}>
                <AvatarImage src={imageUrl} className="object-cover" />
                <AvatarFallback> {username[0]} {username[username.length - 1]}
                </AvatarFallback>
            </Avatar> 

        </div>
    );
};