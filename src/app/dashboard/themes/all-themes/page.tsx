'use client';

import { AppSidebar } from "../../../../components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Search, Plus, MoreVertical, Pencil, Trash, Eye } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../../../components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";

export default function AllThemes() {
  const router = usePathname()
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    // Simulate fetching themes from an API or local source
    const initialThemes = [
      {
        id: 1,
        name: "Theme 1",
        preview: "https://via.placeholder.com/150",
        settings: {
          color: "blue",
          font: "Arial"
        }
      },
      {
        id: 2, 
        name: "Theme 2",
        preview: "https://via.placeholder.com/150",
        settings: {
          color: "green",
          font: "Times New Roman"
        }
      },
      // Add more theme data as needed
    ];
    setThemes(initialThemes);
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger title="Show/Hide Sidebar" className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>All Themes</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">All Themes</h1>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Theme
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Theme</DialogTitle>
                  <DialogDescription>
                    Fill in the details to add a new theme.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="preview" className="text-right">
                      Preview URL
                    </Label>
                    <Input id="preview" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="color" className="text-right">
                      Color
                    </Label>
                    <Input id="color" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="font" className="text-right">
                      Font
                    </Label>
                    <Input id="font" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Add Theme</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <Input
                placeholder="Search themes..."
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {themes.map((theme) => (
              <Card key={theme.id}>
                <CardHeader>
                  <CardTitle>{theme.name}</CardTitle>
                  <CardDescription>
                    <img src={theme.preview} alt={`${theme.name} Preview`} className="w-full h-48 object-cover rounded-md mb-2" />
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Color: {theme.settings.color}</p>
                  <p>Font: {theme.settings.font}</p>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Preview Theme</DialogTitle>
                        <DialogDescription>
                          Preview the theme details.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right">Name</Label>
                          <p className="col-span-3">{theme.name}</p>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right">Preview URL</Label>
                          <p className="col-span-3">{theme.preview}</p>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right">Color</Label>
                          <p className="col-span-3">{theme.settings.color}</p>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right">Font</Label>
                          <p className="col-span-3">{theme.settings.font}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Pencil className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Theme</DialogTitle>
                        <DialogDescription>
                          Edit theme details.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="edit-name" className="text-right">Name</Label>
                          <Input id="edit-name" defaultValue={theme.name} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="edit-preview" className="text-right">Preview URL</Label>
                          <Input id="edit-preview" defaultValue={theme.preview} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="edit-color" className="text-right">Color</Label>
                          <Input id="edit-color" defaultValue={theme.settings.color} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="edit-font" className="text-right">Font</Label>
                          <Input id="edit-font" defaultValue={theme.settings.font} className="col-span-3" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save Changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Trash className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Delete Theme</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to delete this theme? This action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button variant="destructive">Delete</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Change Settings</DropdownMenuItem>
                      <DropdownMenuItem>Disable Theme</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
