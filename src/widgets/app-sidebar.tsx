"use client"
import Image from "next/image"; 
import {CreateIcon, ExploreActiveIcon, ExploreIcon, HomeIcon,  HomeIconActive,  InstagramLogoIcon,  MessageActiveIcon,  MessageIcon,  NotificationActiveIcon,  NotificationIcon,  ReelsActiveIcon,  ReelsIcon,  SearchIconActive} from "@/shared/ui/svg"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/ui/sidebar"
import defaultProfile from "@/app/assets/icon/default-profile.jpg";
import Link from "next/link";
import { usePathname } from "next/navigation";     
const items = [
  {
   url: "/",
    icon:< InstagramLogoIcon  />,
  },
  {
    title: "Home",
    url: "/",
    icon:<HomeIcon />,
    activeIcon: <HomeIconActive />
  },
  {
    title: "Search",
    url: "#",
    icon:  <SearchIconActive />,
  },
  {
    title: "Explore",
    url: "/explore",
    icon: <ExploreIcon />,
    activeIcon: <ExploreActiveIcon />
  },
  {
    title: "Reels",
    url: "/reels",
    icon: <ReelsIcon/> ,
    activeIcon: <ReelsActiveIcon />
  },
  {
    title: "Messages",
    url: "/chats",
    icon: <MessageIcon  />,
    activeIcon: < MessageActiveIcon/>
  },
  {
    title: "Notification",
    url: "#",
    icon:<NotificationIcon/>,
    activeIcon: < NotificationActiveIcon/>
  },
  {
    title: "Create",
    url: "#",
    icon:<CreateIcon/>,
  }, 
  ]

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar className="w-64 p-4">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="flex items-center gap-4 px-4 py-5 rounded-[8px] transition"asChild>
                    <Link href={item.url}>
                     {pathname == item.url ? item.activeIcon : item.icon} 
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
                        alt="Profile" />
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
