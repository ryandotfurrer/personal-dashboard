import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { CalendarCheck, Home, ListTodo, LogOut, MessageCircle, NotebookText, NotepadText } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
]


const comingSoonItems = [
  {
    title: "Socials",
    url: "/socials",
    icon: MessageCircle,
    disabled: true,
    tooltip: "Coming soon",
  },
  {
    title: "Habits",
    url: "/habits",
    icon: CalendarCheck,
    disabled: true,
    tooltip: "Coming soon",
  },
  {
    title: "Tasks",
    url: "/tasks",
    icon: ListTodo,
    disabled: true,
    tooltip: "Coming soon",
  },
  {
    title: "Notes",
    url: "/notes",
    icon: NotepadText,
    disabled: true,
    tooltip: "Coming soon",
  },
  {
    title: "Journal",
    url: "/journal",
    icon: NotebookText,
    disabled: true,
    tooltip: "Coming soon",
  },

]
const footerItems = [
  {
    title: "Log out",
    url: "/account",
    icon: LogOut,
    disabled: true,
    tooltip: "Coming soon",
  },
]

export function NavSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-none">
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (

                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton render={
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  } />
                </SidebarMenuItem>))}
              {comingSoonItems.map((item) => (
                <Tooltip key={item.title} aria-label={`${item.title} is ${item.tooltip}`}>
                  <TooltipTrigger>
                    <SidebarMenuItem>
                      <SidebarMenuButton render={
                        <a href={item.url} aria-disabled={item.disabled}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      } />
                    </SidebarMenuItem>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    {item.tooltip}
                  </TooltipContent>
                </Tooltip>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <ModeToggle />
          </SidebarMenuItem>
          {footerItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton render={
                <a href={item.url} aria-disabled={item.disabled}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              } />
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}