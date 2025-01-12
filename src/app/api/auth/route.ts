import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
	try {
		const { userId } = await auth();
		const {
			firstname,
			lastname,
			phone,
			DateOfBirth,
			role,
			address
		} = await req.json();
	
		const dateOfBirth = new Date(DateOfBirth);
		// Validate the incoming data
		if (!userId) {
			console.error("User Id is Missing!!", );
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
			address
		  },
		});

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
		if (!userId) {
			console.error("User Id is Missing!!", );
			return NextResponse.json(
				{ error: "User Id is Missing!!" },
				{ status: 400 }
			);
		}
        
		// Create User in the database
		const user = await prisma.user.findFirst({
			where : {
				clerkId: userId
			}
		});

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