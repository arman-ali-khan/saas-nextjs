"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import {
  AudioWaveform,
  Banknote,
  BoltIcon,
  BookOpen,
  Bot,
  CircleDollarSign,
  CircleParkingIcon,
  Command,
  Frame,
  GalleryVerticalEnd,
  LucideUsersRound,
  Map,
  Newspaper,
  PanelsTopLeft,
  PieChart,
  PrinterCheckIcon,
  Settings2,
  SquareTerminal,
  StickyNote,
  UsersIcon,
  UserX2Icon,
  Wallet,
  Wallet2,
} from "lucide-react"

import { NavMain } from "../components/nav-main"
import { NavProjects } from "../components/nav-projects"
import { NavUser } from "../components/nav-user"
import { TeamSwitcher } from "../components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "./ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Admin Role Manage",
      url: "#",
      icon: LucideUsersRound,
      items: [
        {
          title: "All Admin",
          url: "/dashboard/admin-role-manage/all-admin",
        },
        {
          title: "Add New Admin",
          url: "/dashboard/admin-role-manage/add-new-admin",
        },
        {
          title: "All Admin Role",
          url: "/dashboard/admin-role-manage/all-admin-role",
        },
      ],
    },
    {
      title: "Users Manage",
      url: "#",
      icon: UsersIcon,
      items: [
        {
          title: "All Users",
          url: "/dashboard/users-manage/all-users",
        },
        {
          title: "All Shops",
          url: "/dashboard/users-manage/all-shops",
        },
        {
          title: "Add New",
          url: "/dashboard/users-manage/add-new-user",
        },
        {
          title: "Activity Log",
          url: "/dashboard/users-manage/activity-log",
        },
        {
          title: "Account Settings",
          url: "/dashboard/users-manage/account-settings",
        },
        {
          title: "Failed Shops",
          url: "/dashboard/users-manage/failed-shop",
        },
      ],
    },
    {
      title: "Pages",
      url: "#",
      icon: StickyNote,
      items: [
        {
          title: "All Pages",
          url: "/dashboard/pages/all-pages",
        },
        {
          title: "New Page",
          url: "/dashboard/pages/add-page",
        },
      ],
    },
    {
      title: "Themes",
      url: "#",
      icon: PanelsTopLeft,
      items: [
        {
          title: "All Themes",
          url: "/dashboard/themes/all-themes",
        },
        {
          title: "Themes Settings",
          url: "/dashboard/themes/themes-settings",
        },
      ],
    },
    {
      title: "Price Plan",
      url: "#",
      icon: CircleDollarSign,
      items: [
        {
          title: "All Price Plan",
          url: "#",
        },
        {
          title: "New Price Plan",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Package Order Manage",
      url: "#",
      icon: Banknote,
      items: [
        {
          title: "All Order",
          url: "#",
        },
        {
          title: "Success Order Page",
          url: "#",
        },
        {
          title: "Cancel Order Page",
          url: "#",
        },
        {
          title: "Order Page Manage",
          url: "#",
        },
        {
          title: "Order Report",
          url: "#",
        },
        {
          title: "All Payment Logs",
          url: "#",
        },
        {
          title: "Payment Report",
          url: "#",
        },
        {
          title: "Invoice Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Wallet Manage",
      url: "#",
      icon: Wallet2,
      items: [
        {
          title: "All Wallet",
          url: "#",
        },
        {
          title: "Wallet History",
          url: "#",
        },
        {
          title: "Wallet Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Newsletter Manage",
      url: "#",
      icon: Newspaper,
      items: [
        {
          title: "All Subscribers",
          url: "#",
        },
        {
          title: "Send Mail to All",
          url: "#",
        }
      ],
    },
    {
      title: "Plugins Manage",
      url: "#",
      icon: BoltIcon,
      items: [
        {
          title: "All Plugins",
          url: "#",
        },
        {
          title: "Add New Plugin",
          url: "#",
        },
        {
          title: "Enable Plugins Store",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Page Settings",
          url: "#",
        },
        {
          title: "Site Identity",
          url: "#",
        },
        {
          title: "Basic Settings",
          url: "#",
        },
        {
          title: "Themes Settings",
          url: "#",
        },
        {
          title: "SEO Settings",
          url: "#",
        },
        {
          title: "Smtp Settings",
          url: "#",
        },
        {
          title: "SSL Settings",
          url: "#",
        },
        {
          title: "GDPR Settings",
          url: "#",
        },
        {
          title: "Cache Settings",
          url: "#",
        },
        {
          title: "License Settings",
          url: "#",
        },
        {
          title: "Check Update",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  const updatedNavMain = data.navMain.map((section) => ({
    ...section,
    isActive: section.items.some((item) => pathname.startsWith(item.url)),
    items: section.items.map((item) => ({
      ...item,
      isActive: pathname === item.url,
    })),
  }))

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="mt-14">
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={updatedNavMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
