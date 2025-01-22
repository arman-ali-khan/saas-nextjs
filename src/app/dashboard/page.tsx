'use client';
import { AppSidebar } from "../../components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb"
import { Separator } from "../../components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar"
import { DashboardCharts } from "../../components/Admin/Section/DashboardCharts"
import { Activity, CreditCard, DollarSign, Users } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link";


export default function DashboardPage() {

  const router = usePathname()
  console.log(router,'router');
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger title="Show/Hide Sidebar" className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <Link href="/dashboard">
                    Dashboard
                  </Link>
                </BreadcrumbItem>
                {
                  router !== '/dashboard' && <> <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem></>
                }
               
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-4">
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="tracking-tight text-sm font-medium">Total Revenue</h3>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="p-6 pt-0">
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </div>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="tracking-tight text-sm font-medium">Subscriptions</h3>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="p-6 pt-0">
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                </div>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="tracking-tight text-sm font-medium">Sales</h3>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="p-6 pt-0">
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">+19% from last month</p>
                </div>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="tracking-tight text-sm font-medium">Active Now</h3>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="p-6 pt-0">
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">+201 since last hour</p>
                </div>
              </div>
            </div>
            <div className=" flex-1 rounded-xl bg-muted/50 md:min-h-min">
              <DashboardCharts />
            </div>
          </div>
          
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
