import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { clerkId, email } = await req.json();

    // Validate the incoming data
    if (!clerkId || !email) {
      console.error("Missing required fields:", { clerkId, email });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create donor in the database
    const donor = await prisma.donor.create({
      data: {
        clerkId,
        email,
        name: "John Doe", // Example static data
        phone: "1234567890",
        bloodType: "O+",
        address: "123 Main St",
      },
    });

    console.log("Donor created:", donor);
    return NextResponse.json(donor, { status: 201 });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Failed to register donor" },
      { status: 500 }
    );
  }
}
