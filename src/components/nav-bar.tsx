import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { useAuth } from '@clerk/clerk-react';
import Logo from "./logo";
import {
	ClerkProvider,
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

import { Separator } from "./ui/separator";
import { prisma } from "@/lib/prisma";

const NavBar = async () => {
	const {userId} = await auth();
	console.log('this is user :', userId);
	// fetch the role of the user and based on the role navigate the user on there respective dashboard
	if (!userId ){ // take a look on it
		return
	}
	const user = await prisma.user.findFirst({
		where: {
			clerkId: userId,
		}
	})

	

	const routes = [
		{
			href: `1`,
			label: "Why to Donate",
			// active: pathName === `/${params.storeId}`,
		},
		{
			href: `2`,
			label: "Donate",
			// active: pathName === `/${params.storeId}/billboards`,
		},
		{
			href: `3`,
			label: "About Us",
			// active: pathName === `/${params.storeId}/settings`,
		},
	];

	return (
		<header className="bg-[#f1f6ff] h-20 flex items-center  justify-between shadow-sm">
			<Link href={"/"} className="w-40 pl-10 flex items-center h-full">
				<Logo />
			</Link>
			<nav className={"flex-1 items-center space-x-4 lg:space-x-6"}>
				{routes.map((route) => (
					<Link
						key={route.href}
						href={route.href}
						className="text-[#072037] hover:text-red-500 font-medium"

						// className={
						// 	"text-xs font-semibold transition-colors hover:text-primary",
						// 	route.active
						// 		? "text-black dark:text-white"
						// 		: "text-muted-foreground"
						// )}
					>
						{route.label}
					</Link>
				))}
			</nav>
			<div className="flex h-full items-center pr-12">
				{userId ? (
					<div className="flex space-x-8 items-center">
						<Link
							href={user && user.role === 'donor' ? "/dashboard/donor/profile": "/blood_bank_dashboard"}
							className="text-md font-medium text-[#072037] hover:text-red-500"
						>
							Dashboard
						</Link>
						<UserButton />
					</div>
				) : (
					<div className="flex gap-3  h-9 items-center">
						<SignInButton>
							<Button
								variant="outline"
								className="border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white"
							>
								Sign In
							</Button>
						</SignInButton>

						<Separator
							orientation="vertical"
							className="bg-red-300"
						/>

						<SignUpButton>
							<Button
								variant="outline"
								className="border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white"
							>
								Register
							</Button>
						</SignUpButton>
					</div>
				)}
			</div>
		</header>
	);
};

export default NavBar;
