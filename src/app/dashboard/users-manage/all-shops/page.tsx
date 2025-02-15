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
import { Search, Plus, MoreVertical, Pencil, Trash, User, Home, Calendar, Flag, Image } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../../../components/ui/dialog";
import { Label } from "../../../../components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../../../../components/ui/hover-card"; // Import HoverCard components

export default function AllShop() {
  const router = usePathname()

  const shops = [
    {
      id: 1,
      name: "Shop 1",
      shopOwner: "John Doe",
      category: "Electronics",
      status: "Active",
      productsCount: 150,
      visitors: 1200,
      shopOwnerDetails: {
        shopsCreated: 5,
        accountType: "Premium",
        subscriptionDaysAgo: 30,
        flag: "green",
        profilePic: "/path/to/john-doe.jpg"
      }
    },
    {
      id: 2, 
      name: "Shop 2",
      shopOwner: "Jane Smith",
      category: "Clothing",
      status: "Active",
      productsCount: 200,
      visitors: 1800,
      shopOwnerDetails: {
        shopsCreated: 3,
        accountType: "Free",
        subscriptionDaysAgo: 90,
        flag: "red",
        profilePic: "/path/to/jane-smith.jpg"
      }
    },
    // Add more shop data as needed
  ]

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
                  <BreadcrumbPage>All Shops</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">All Shops</h1>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Shop
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Shop</DialogTitle>
                  <DialogDescription>
                    Fill in the details to add a new shop.
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
                    <Label htmlFor="shopOwner" className="text-right">
                      Shop Owner
                    </Label>
                    <Input id="shopOwner" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category" className="text-right">
                      Category
                    </Label>
                    <Input id="category" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Add Shop</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <Input
                placeholder="Search shops..."
                className="pl-10"
              />
            </div>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Shop Owner</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Products Count</TableHead>
                  <TableHead>Visitors</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {shops.map((shop) => (
                  <TableRow key={shop.id}>
                    <TableCell className="font-medium">{shop.name}</TableCell>
                    <TableCell>
                      <HoverCard>
                        <HoverCardTrigger>
                          <span className="cursor-pointer hover:underline">{shop.shopOwner}</span>
                        </HoverCardTrigger>
                        <HoverCardContent>
                          <div className="flex items-center w-96 space-x-4">
                            <Image src={shop.shopOwnerDetails.profilePic} alt={`${shop.shopOwner}'s profile`} className="w-8 h-10 rounded-full" />
                            <div className="w-full">
                              <p className="font-semibold">{shop.shopOwner}</p>
                              <p className="text-sm">
                                <User className="inline-block w-4 h-4 mr-1" /> শপ তৈরি করেছেন: {shop.shopOwnerDetails.shopsCreated}
                              </p>
                              <p className="text-sm">
                                <Home className="inline-block w-4 h-4 mr-1" /> অ্যাকাউন্ট ধরণ: {shop.shopOwnerDetails.accountType}
                              </p>
                              <p className="text-sm">
                                <Calendar className="inline-block w-4 h-4 mr-1" /> সাবস্ক্রিপশন: {shop.shopOwnerDetails.subscriptionDaysAgo} দিন আগে
                              </p>
                              <p className="text-sm">
                                <Flag className="inline-block w-4 h-4 mr-1" /> ফ্ল্যাগ: <span className={`inline-block w-4 h-4 rounded-full ${shop.shopOwnerDetails.flag === 'red' ? 'bg-red-500' : shop.shopOwnerDetails.flag === 'blue' ? 'bg-blue-500' : shop.shopOwnerDetails.flag === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                              </p>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </TableCell>
                    <TableCell>{shop.category}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {shop.status}
                      </span>
                    </TableCell>
                    <TableCell>{shop.productsCount}</TableCell>
                    <TableCell>{shop.visitors}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Pencil className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Edit Shop</DialogTitle>
                              <DialogDescription>
                                Edit shop details.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-name" className="text-right">Name</Label>
                                <Input id="edit-name" defaultValue={shop.name} className="col-span-3" />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-shopOwner" className="text-right">Shop Owner</Label>
                                <Input id="edit-shopOwner" defaultValue={shop.shopOwner} className="col-span-3" />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-category" className="text-right">Category</Label>
                                <Input id="edit-category" defaultValue={shop.category} className="col-span-3" />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-productsCount" className="text-right">Products Count</Label>
                                <Input id="edit-productsCount" defaultValue={shop.productsCount} className="col-span-3" />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-visitors" className="text-right">Visitors</Label>
                                <Input id="edit-visitors" defaultValue={shop.visitors} className="col-span-3" />
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
                              <DialogTitle>Delete Shop</DialogTitle>
                              <DialogDescription>
                                Are you sure you want to delete this shop? This action cannot be undone.
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
                            <DropdownMenuItem>Change Password</DropdownMenuItem>
                            <DropdownMenuItem>Disable Account</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
