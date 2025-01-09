"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ProfileDisplay } from "@/components/donor-profile";

export default function ProfilePage() {
	const [isUsrInfoExist, setIsUserInfoExist] = useState<boolean>(false);
	// write a logic here if user have first name and last name then show user information otherwise display the form to fill the information.
	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-bold text-[#072037]">
				Profile Management
			</h1>
			{!isUsrInfoExist ? (
				<Card>
					<CardHeader>
						<CardTitle className="text-[#072037]">
							Personal Information
						</CardTitle>
					</CardHeader>
					<CardContent>
						<form className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="firstName">
										First Name
									</Label>
									<Input id="firstName" placeholder="John" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="lastName">Last Name</Label>
									<Input id="lastName" placeholder="Doe" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										type="email"
										placeholder="john@example.com"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="phone">Phone</Label>
									<Input
										id="phone"
										type="tel"
										placeholder="+1 234 567 890"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="bloodType">
										Blood Type
									</Label>
									<Input id="bloodType" placeholder="A+" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="dateOfBirth">
										Date of Birth
									</Label>
									<Input id="dateOfBirth" type="date" />
								</div>
							</div>
							<Button
								type="submit"
								className="bg-[#072037]"
								onClick={() => setIsUserInfoExist(true)}
							>
								Save Changes
							</Button>
						</form>
					</CardContent>
				</Card>
			) : (
				<ProfileDisplay firstName={"Emad"} lastName={"Ansari"} email={"ansari@ansari.com"} phone={"89343298324"} bloodType={"A+"} dateOfBirth={"20-10-2002"} />
			)}
		</div>
	);
}
