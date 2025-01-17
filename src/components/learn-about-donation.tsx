import Image from "next/image"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


const compatibilityData = [
  { bloodType: "A+", donateTo: "A+ AB+", receiveFrom: "A+ A- O+ O-" },
  { bloodType: "O+", donateTo: "O+ A+ B+ AB+", receiveFrom: "O+ O-" },
  { bloodType: "B+", donateTo: "B+ AB+", receiveFrom: "B+ B- O+ O-" },
  { bloodType: "AB+", donateTo: "AB+", receiveFrom: "Everyone" },
  { bloodType: "A-", donateTo: "A+ A- AB+ AB-", receiveFrom: "A- O-" },
  { bloodType: "O-", donateTo: "Everyone", receiveFrom: "O-" },
  { bloodType: "B-", donateTo: "B+ B- AB+ AB-", receiveFrom: "B- O-" },
  { bloodType: "AB-", donateTo: "AB+ AB-", receiveFrom: "AB- A- B- O-" },
]

export function LearnAboutDonation() {
  return (
    <section className="relative py-12 mt-14">
      <h1 className="text-3xl font-bold text-center text-[#072037] absolute top-0 left-0 right-0 z-10">
        Learn About Donation
      </h1>
      
      <div className="container mx-auto max-w-7xl mt-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section with Image and Text */}
          <div className="relative">
            <div className=" p-6 rounded-lg">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/learn-about-donation.png"
                  alt="One blood donation can save three lives"
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="mt-6 space-y-4">
                <p className="text-lg text-gray-700">
                  After donating blood, the body works to replenish the blood loss. 
                  This stimulates the production of new blood cells and in turn, 
                  helps in maintaining good health.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section with Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-[#f1f6ff] text-[0b3052] p-4">
              <h3 className="text-xl font-semibold">
                Compatible Blood Type Donors
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Blood Type</TableHead>
                    <TableHead>Donate Blood To</TableHead>
                    <TableHead>Receive Blood From</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {compatibilityData.map((row) => (
                    <TableRow key={row.bloodType}>
                      <TableCell className="font-medium text-[#C41E3A]">
                        {row.bloodType}
                      </TableCell>
                      <TableCell>{row.donateTo}</TableCell>
                      <TableCell>{row.receiveFrom}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

