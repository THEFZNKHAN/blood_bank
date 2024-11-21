import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const userId = authenticateUser(req);

    const donor = await prisma.donor.findUnique({
      where: { clerkId: userId },
    });

    if (!donor) {
      return NextResponse.json({ error: "Donor not found" }, { status: 404 });
    }

    return NextResponse.json(donor, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const userId = authenticateUser(req);

    const { name, email, phone, bloodType, address } = await req.json();

    const updatedDonor = await prisma.donor.update({
      where: { clerkId: userId },
      data: { name, email, phone, bloodType, address },
    });

    return NextResponse.json(updatedDonor, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
