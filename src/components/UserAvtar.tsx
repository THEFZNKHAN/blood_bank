import { prisma } from "@/lib/prisma";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export const UserAvtar = async () => {

	const { userId } = await auth();
	if (!userId) {
		redirect("/sign-in");
	}

	const user = await prisma.user.findFirst({
		where: {
			clerkId: userId,
		},
	});

	if (!user) {
		redirect("/");
	}


	return (
		<div className="flex space-x-8 items-center">
			<Link
				href={
					user && user.role === "donor"
						? "/dashboard/donor/profile"
						: "/blood_bank_dashboard"
				}
				className="text-md font-medium text-[#072037] hover:text-red-500"
			>
				Dashboard
			</Link>
			<UserButton />
		</div>
	);
};
