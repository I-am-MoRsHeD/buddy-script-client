import {
  BoltIcon,
  BookOpenIcon,
  ChevronDownIcon,
  Layers2Icon,
  LogOutIcon,
  PinIcon,
  UserPenIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IUser } from "@/interface/user.interface"
import { getUserInfo } from "@/services/auth/getUser"
import { useEffect, useState } from "react"
import { logoutUser } from "@/services/auth/logout"
import { redirect } from "next/navigation"
import { toast } from "sonner"

export default function UserDropdown() {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    (async () => {
      const userInfo = await getUserInfo();
      setUser(userInfo);
    })();
  }, []);

  const handleLogout = async () => {
    const result = await logoutUser();
    if (result?.success) {
      toast.success("Logged out successfully")
      redirect('/login');
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Avatar>
            <AvatarImage src="/images/img3.png" alt="Profile image" />
          </Avatar>
          <h1>{user?.firstName + " " + user?.lastName}</h1>
          <ChevronDownIcon
            size={16}
            className="opacity-60"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-medium text-foreground">
            {user?.firstName + " " + user?.lastName}
          </span>
          <span className="truncate text-xs font-normal text-muted-foreground">
            {user?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
