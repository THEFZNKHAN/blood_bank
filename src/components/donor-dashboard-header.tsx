"use client"
import { Bell, ChevronLeft, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export function Header() {
	return (
		<header className="border-b">
			<div className="flex h-16 items-center px-6">
				<Button variant="ghost" className="text-PRIMARY hover:text-foreground" onClick = {() => redirect('/')}>
					<ChevronLeft className="h-5 w-5" />
					<span className="">Go Back</span>
				</Button>

				<div className="ml-auto flex items-center space-x-4">
					<Button variant="ghost" size="icon">
						<Bell className="h-5 w-5" />
						<span className="sr-only">Notifications</span>
					</Button>
					<Button variant="ghost" size="icon">
						<Settings className="h-5 w-5" />
						<span className="sr-only">Settings</span>
					</Button>
				</div>
			</div>
		</header>
	);
}
