import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {  TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const RegisterBloodBankInfo = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Form submitted")
      }
	return (
		<TabsContent value="blood-bank">
			<form onSubmit={handleSubmit} className="space-y-6">
				<Card>
					<CardContent className="p-6">
						<h2 className="text-xl font-semibold mb-6">
							Blood Bank Address
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="space-y-2">
								<Label htmlFor="state">
									State
									<span className="text-[#C41E3A]">*</span>
								</Label>
								<Select required>
									<SelectTrigger>
										<SelectValue placeholder="Select State" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="state1">
											State 1
										</SelectItem>
										<SelectItem value="state2">
											State 2
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="space-y-2">
								<Label htmlFor="district">
									District
									<span className="text-[#C41E3A]">*</span>
								</Label>
								<Select required>
									<SelectTrigger>
										<SelectValue placeholder="Select District" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="district1">
											District 1
										</SelectItem>
										<SelectItem value="district2">
											District 2
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="space-y-2">
								<Label htmlFor="city">City</Label>
								<Input
									id="city"
									placeholder="Enter city name"
								/>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardContent className="p-6">
						<h2 className="text-xl font-semibold mb-6">
							Blood Bank Details
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="space-y-2">
								<Label htmlFor="bloodBankName">
									Blood Bank Name
									<span className="text-[#C41E3A]">*</span>
								</Label>
								<Input id="bloodBankName" required />
							</div>
							<div className="space-y-2">
								<Label htmlFor="parentHospital">
									Parent Hospital Name
								</Label>
								<Input id="parentHospital" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="shortName">Short Name</Label>
								<Input id="shortName" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="category">
									Category
									<span className="text-[#C41E3A]">*</span>
								</Label>
								<Select required>
									<SelectTrigger>
										<SelectValue placeholder="Select type" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="type1">
											Type 1
										</SelectItem>
										<SelectItem value="type2">
											Type 2
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="space-y-2">
								<Label htmlFor="contactPerson">
									Contact Person
									<span className="text-[#C41E3A]">*</span>
								</Label>
								<Input id="contactPerson" required />
							</div>
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input id="email" type="email" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="contactNo">
									Contact No.
									<span className="text-[#C41E3A]">*</span>
								</Label>
								<Input id="contactNo" required />
							</div>
							<div className="space-y-2">
								<Label htmlFor="registrationDate">
									First Registration Date
									<span className="text-[#C41E3A]">*</span>
								</Label>
								<Input
									id="registrationDate"
									type="date"
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="licenseNo">License No.</Label>
								<Input id="licenseNo" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="fromDate">From Date</Label>
								<Input id="fromDate" type="date" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="toDate">To Date</Label>
								<Input id="toDate" type="date" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="helplineNo">Helpline No.</Label>
								<Input id="helplineNo" />
							</div>
						</div>
					</CardContent>
				</Card>

				<div className="flex justify-end gap-4">
					<Button variant="outline" type="button">
						Cancel
					</Button>
					<Button className="bg-red-500" type="submit">
						Save & Continue
					</Button>
				</div>
			</form>
		</TabsContent>
	);
};
export default RegisterBloodBankInfo;
