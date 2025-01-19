'use client'

import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex">
            <a href="/" className="flex items-center font-bold text-xl">
              SaaS Logo
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
            <Button asChild variant="ghost">
              <Link href="/auth/login">Sign in</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/register">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-gray-900"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="flex flex-col space-y-4 pt-4 border-t">
                    <Button asChild variant="ghost">
                      <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                        Sign in
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href="/auth/register" onClick={() => setIsOpen(false)}>
                        Get Started
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;