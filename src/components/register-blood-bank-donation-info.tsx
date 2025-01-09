
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

const RegisterBloodBankDonationInfo = () => {
	return (
		<TabsContent value="donation">
			<form className="space-y-6">
				<Card>
					<CardContent className="p-6">
						<div className="space-y-8">
							{/* Donor Type Section */}
							<div className="space-y-4">
								<h2 className="text-xl font-semibold flex items-center">
									Donor Type
									<span className="text-[#C41E3A] ml-1">
										*
									</span>
								</h2>
								<div className="grid grid-cols-2 gap-4 border rounded-lg p-4">
									<div className="flex items-center space-x-2">
										<Checkbox id="voluntary" />
										<Label htmlFor="voluntary">
											Voluntary
										</Label>
									</div>
									<div className="flex items-center space-x-2">
										<Checkbox id="family" />
										<Label htmlFor="family">Family</Label>
									</div>
								</div>
							</div>

							{/* Donation Type Section */}
							<div className="space-y-4">
								<h2 className="text-xl font-semibold flex items-center">
									Donation Type
									<span className="text-[#C41E3A] ml-1">
										*
									</span>
								</h2>
								<div className="border rounded-lg p-4">
									<div className="flex items-center space-x-2">
										<Checkbox id="wholeBlood" />
										<Label htmlFor="wholeBlood">
											Whole Blood
										</Label>
									</div>
								</div>
							</div>

							{/* Component Type Section */}
							<div className="space-y-4">
								<h2 className="text-xl font-semibold">
									Component Type
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4 border rounded-lg p-4">
									<div className="flex items-center space-x-2">
										<Checkbox id="prbc" />
										<Label htmlFor="prbc">
											Packed Red Blood Cells (PRBC)
										</Label>
									</div>
									<div className="flex items-center space-x-2">
										<Checkbox id="ffp" />
										<Label htmlFor="ffp">
											Fresh Frozen Plasma (FFP)
										</Label>
									</div>
									<div className="flex items-center space-x-2">
										<Checkbox id="platelet" />
										<Label htmlFor="platelet">
											Platelet Concentrate
										</Label>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<div className="flex justify-end gap-4">
					<button
						type="button"
						className="px-4 py-2 border rounded-md hover:bg-gray-100"
					>
						Back
					</button>
					<button
						type="submit"
						className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
					>
						Save & Continue
					</button>
				</div>
			</form>
		</TabsContent>
	);
};

export default RegisterBloodBankDonationInfo;
