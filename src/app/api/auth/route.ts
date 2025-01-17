import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
	try {
		const { userId } = await auth();
		const { firstname, lastname, phone, DateOfBirth, role, address } =
			await req.json();

		const dateOfBirth = new Date(DateOfBirth);
		// Validate the incoming data
		if (!userId) {
			console.error("User Id is Missing!!");
			return NextResponse.json(
				{ error: "User Id is Missing!!" },
				{ status: 400 }
			);
		}

		// Create User in the database
		const user = await prisma.user.create({
			data: {
				clerkId: userId,
				firstname,
				lastname,
				role,
				DateOfBirth: dateOfBirth,
				phone,
				address,
			},
		});
		if (user) {
			// create the specific user based on the role
			if (user.role === "donor") {
				const donor = await prisma.donor.create({
					data: {
						userId: user.id,
						bloodType: "",
					},
				});
			} else {
				// means the role is staff
				const staff = await prisma.staff.create({
					data: {
						userId: user.id,
						bloodBankId: ""
					},
				});
			}
		}

		console.log("User created:", user);
		return NextResponse.json(user, { status: 201 });
	} catch (error) {
		console.error("Error in API route:", error);
		return NextResponse.json(
			{ error: "Failed to register donor" },
			{ status: 500 }
		);
	}
}

export async function GET(req: NextRequest) {
	try {
		const { userId } = await auth();

		// Validate the incoming data
		console.log("this is user id in auth route before condition: ", userId);
		if (!userId) {
			console.error("User Id is Missing!!");
			return NextResponse.json(
				{ error: "User Id is Missing!!" },
				{ status: 400 }
			);
		}
		console.log("this is user id in auth route : ", userId);
		// Create User in the database
		const user = await prisma.user.findFirst({
			where: {
				clerkId: userId,
			},
		});
		if (!user) {
			console.log("No user found for clerkId:", userId);
			return NextResponse.json(
				{ error: "User not found" },
				{ status: 404 }
			);
		}

		console.log("User created:", user);
		return NextResponse.json(user, { status: 200 });
	} catch (error) {
		console.log("AUTH_FETCH_USER:", error);
		return NextResponse.json(
			{ error: "Failed to fetch the user info" },
			{ status: 500 }
		);
	}
}
