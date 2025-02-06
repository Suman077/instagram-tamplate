import {Home,  Search,Heart,SquarePlus,Compass,MessageCircle,Film  } from "lucide-react"
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/ui/sidebar"
import defaultProfile from "@/app/assets/icon/default-profile.jpg"
import Link from "next/link";


const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Explore",
    url: "/explore",
    icon: Compass ,
  },
  {
    title: "Reels",
    url: "/reels",
    icon: Film ,
  },
  {
    title: "Messages",
    url: "/chats",
    icon: MessageCircle,
  },
  {
    title: "Notification",
    url: "#",
    icon: Heart,
  },
  {
    title: "Create",
    url: "#",
    icon:SquarePlus,
  }
]

export function AppSidebar() {
  return (
    <Sidebar className="w-64 p-4">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="flex items-center gap-4 px-4 py-5 rounded-[8px] transition"
                    asChild>
                    <Link href={item.url}>
                    <item.icon />
                    
                      <span className="text-lg font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
               <SidebarMenuItem >
                  <SidebarMenuButton
                    className="flex items-center gap-4 px-4 py-5 rounded-[8px] transition"
                    asChild>
                    <Link href={"profile"}>
                    <Image
                        className="rounded-full"
                        width={25}
                        height={25}
                        src={defaultProfile}
                        alt="Profile"
                      />
                      <span className="text-lg font-medium">Profile</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
