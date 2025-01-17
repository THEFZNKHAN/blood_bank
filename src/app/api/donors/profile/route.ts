import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";

// get donor Profile Info
export async function GET(req: NextRequest) {
	try {
		const userId = authenticateUser(req);
		if (!userId) {
			return NextResponse.json(
				{ error: "UnAuthorized" },
				{ status: 401 }
			);
		}

		const donor = await prisma.user.findUnique({
			where: { clerkId: userId },
			select: {
				firstname: true,
				lastname: true,
				phone: true,
				address: true,
				DateOfBirth: true,
				donor: {
					select: {
						bloodType: true,
					},
				},
			},
		});

		if (!donor) {
			return NextResponse.json(
				{ error: "Donor not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json(donor, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error:
					error instanceof Error
						? error.message
						: "An unknown error occurred",
			},
			{ status: 500 }
		);
	}
}

export async function PUT(req: NextRequest) {
	try {
		const userId = authenticateUser(req);

		const { firstname, lastname, phone, DateOfBirth, bloodType, address } =
			await req.json();
		console.log(
			"donor updated data from frontend: ",
			firstname,
			lastname,
			phone,
			DateOfBirth,
			bloodType,
			address
		);
		const dateOfBirth = new Date(DateOfBirth);
		const updatedDonor = await prisma.user.update({
			where: {
				clerkId: userId,
			},
			data: {
				firstname,
				lastname,
				phone,
				address,
				DateOfBirth: dateOfBirth,
				donor: {
					update: {
						bloodType,
					},
				},
			},
		});

		return NextResponse.json(updatedDonor, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				error:
					error instanceof Error
						? error.message
						: "UPDATED DONOR ERROR",
			},
			{ status: 500 }
		);
	}
}
