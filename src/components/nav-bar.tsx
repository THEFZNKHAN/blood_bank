import Link from "next/link";
import Logo from "./logo";
import {
	ClerkProvider,
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

const NavBar = async () => {
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
		<header className="bg-[#f1f6ff] h-16 flex items-center  justify-between shadow-md">
			<div className="w-40 pl-2  h-full">
				<Logo />
			</div>
			<nav className={"flex-1 items-center space-x-4 lg:space-x-6"}>
				{routes.map((route) => (
					<Link
						key={route.href}
						href={route.href}
						className="text-[#072037] hover:text-red-500"

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
			<div className="flex text-black h-full items-center pr-4">
				<SignInButton>
					<Button
						variant="outline"
						className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
					>
						Sign In
					</Button>
				</SignInButton>
			</div>
		</header>
	);
};

export default NavBar;
