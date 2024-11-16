"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-black dark:text-white">AI Fashion Assistant</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/products"
              className={pathname === "/products" ? "text-black dark:text-white" : "text-gray-600 dark:text-gray-400"}
            >
              商品一覧
            </Link>
            <Link
              href="/chat"
              className={pathname === "/chat" ? "text-black dark:text-white" : "text-gray-600 dark:text-gray-400"}
            >
              AIチャット
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-6 w-6 text-black dark:text-white" />
            <span className="sr-only">カート</span>
          </Button>
        </div>
      </div>
    </header>
  );
}