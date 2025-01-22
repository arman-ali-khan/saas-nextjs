'use client';

import { AppSidebar } from "../../../../components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb"
import { Separator } from "../../../../components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../../../components/ui/sidebar"
import { Button } from "../../../../components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table"
import { Input } from "../../../../components/ui/input"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Search, Plus, MoreVertical, Pencil, Trash } from "lucide-react"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../../../components/ui/dialog"
import { Label } from "../../../../components/ui/label"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";

export default function AdminRoleManagePage() {
  const router = usePathname()

  const roles = [
    {
      id: 1,
      name: "Super Admin",
      permissions: ["All Access"],
      totalAdmins: 2,
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      name: "Admin",
      permissions: ["Limited Access"],
      totalAdmins: 5,
      createdAt: "2024-01-10"
    },
    {
      id: 3,
      name: "Moderator",
      permissions: ["Basic Access"],
      totalAdmins: 8,
      createdAt: "2024-01-05"
    }
  ]

  return (
    <SidebarProvider>
          <SidebarInset>
          
      <div className="grid grid-cols-[auto_1fr]">
        <AppSidebar />
        <div className="flex flex-col gap-8 p-8">
          <div className="flex flex-col gap-4">
            <Breadcrumb>
              <BreadcrumbList>
              <SidebarTrigger />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard/admin-role-manage">Admin Role Manage</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>All Admin Roles</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Admin Roles</h1>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Role
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Role</DialogTitle>
                    <DialogDescription>
                      Create a new admin role with specific permissions
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="role-name">Role Name</Label>
                      <Input id="role-name" placeholder="Enter role name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="permissions">Permissions</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select permissions" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Access</SelectItem>
                          <SelectItem value="limited">Limited Access</SelectItem>
                          <SelectItem value="basic">Basic Access</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Create Role</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <Separator />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search roles..." className="pl-8" />
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Role Name</TableHead>
                    <TableHead>Permissions</TableHead>
                    <TableHead>Total Admins</TableHead>
                    <TableHead>Created Date</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {roles.map((role) => (
                    <TableRow key={role.id}>
                      <TableCell className="font-medium">{role.name}</TableCell>
                      <TableCell>{role.permissions.join(", ")}</TableCell>
                      <TableCell>{role.totalAdmins}</TableCell>
                      <TableCell>{role.createdAt}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="ghost" className="w-full flex items-center justify-start">
                                  <Pencil className="mr-2 h-4 w-4" />
                                  Edit
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Edit Role</DialogTitle>
                                  <DialogDescription>
                                    Make changes to the role here. Click save when you're done.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                  <div className="grid gap-2">
                                    <Label htmlFor="name">Role Name</Label>
                                    <Input id="name" defaultValue={role.name} />
                                  </div>
                                  <div className="grid gap-2">
                                    <Label htmlFor="permissions">Permissions</Label>
                                    <Select>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select permissions" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="all">All Access</SelectItem>
                                        <SelectItem value="limited">Limited Access</SelectItem>
                                        <SelectItem value="basic">Basic Access</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button type="submit">Save changes</Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>

                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="ghost" className="w-full flex items-center justify-start text-red-600">
                                  <Trash className="mr-2 h-4 w-4" />
                                  Delete
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Delete Role</DialogTitle>
                                  <DialogDescription>
                                    Are you sure you want to delete this role? This action cannot be undone.
                                  </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                <DialogClose asChild>
                                <Button type="button" variant="outline">Cancel</Button>
          </DialogClose>
                                  
                                  <Button variant="destructive">Delete</Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    
      </SidebarInset>
    </SidebarProvider>
  )
}
