import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";


// get donor Profile Info
export async function GET(req: NextRequest) {
  try {
    console.log('route hit....')
    const userId = authenticateUser(req);
    if (!userId) { 
      return NextResponse.json({ error: "UnAuthorized" }, { status: 401 });

    }
    console.log('this is user id: ', userId)
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
            bloodType: true
          }
        }
      }
    });
    console.log('this is donor: ', donor);
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

// export async function PUT(req: NextRequest) {
//   try {
//     const userId = authenticateUser(req);

//     const { name, email, phone, bloodType, address } = await req.json();

//     const updatedDonor = await prisma.donor.update({
//       where: { clerkId: userId },
//       data: { name, email, phone, bloodType, address },
//     });

//     return NextResponse.json(updatedDonor, { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       {
//         error:
//           error instanceof Error ? error.message : "An unknown error occurred",
//       },
//       { status: 500 }
//     );
//   }
// }
