"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { UserCircle, Calendar, Clock, FileText } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const pathname = usePathname()
  
  const routes = [
    {
      label: "Profile",
      icon: UserCircle,
      href: "/dashboard/donor/profile",
    },
    {
      label: "Medical History",
      icon: FileText,
      href: "/dashboard/donor/medical-history",
    },
    {
      label: "Donation History",
      icon: Clock,
      href: "/dashboard/donor/donation-history",
    },
    {
      label: "Book Appointment",
      icon: Calendar,
      href: "/dashboard/donor/appointments",
    },
  ]

  return (
    <div className="flex flex-col w-64 border-r bg-gray-50/50">
      <div className="p-6">
        <h1 className="text-xl text-[#072037] font-bold">Donor Dashboard</h1>
      </div>
      <nav className="flex-1 p-4">
        {routes.map((route) => (
          <Button
            key={route.href}
            variant={pathname === route.href ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start gap-2 mb-1",
              pathname === route.href && "bg-primary/10"
            )}
            asChild
          >
            <Link href={route.href}>
              <route.icon className="h-4 w-4" />
              {route.label}
            </Link>
          </Button>
        ))}
      </nav>
    </div>
  )
}

