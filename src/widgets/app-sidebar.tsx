import { Calendar, Home,  Search, Settings,Heart,CircleUser,SquarePlus,Compass,MessageCircle,Film  } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/ui/sidebar"


const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Explore",
    url: "#",
    icon: Compass ,
  },
  {
    title: "Reels",
    url: "#",
    icon: Film ,
  },
  {
    title: "Messages",
    url: "#",
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
  },
  {
    title: "Profile",
    url: "#",
    icon: CircleUser ,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}