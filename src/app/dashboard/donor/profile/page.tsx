"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { ProfileDisplay } from "@/components/donor-profile";
import { prisma } from "@/lib/prisma";
import { UserDetials } from "@/app/user-registeration/page";

interface Donor extends UserDetials {
	donor: {
		bloodType: string | null;
	};
}
export default function ProfilePage() {
	const [donor, setDonor] = useState<Donor>({
		firstname: "",
		lastname: "",
		address: "",
		phone: "",
		DateOfBirth: "",
		role: "",
		donor: {
			bloodType: "",
		},
	});
	const [editUserInfo, setEditUserInfo] = useState<boolean>(false);
	console.log('donor on frontend')
	useEffect(() => {
		const fetchUserInfo = async () => {
			try {
				const res = await axios.get("/api/donors/profile");
				console.log("this is user response data: ", res.data);
				if (res.status === 200) {
					// set the user info
					setDonor(res.data);
				}
			} catch (error) {}
		};
		// fetch the user detail
		fetchUserInfo();
	}, []);

	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-bold text-[#072037]">
				Profile Management
			</h1>
			{editUserInfo ? (
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
								{/* <div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										type="email"
										placeholder="john@example.com"
									/>
								</div> */}
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
								// onClick={() => setIsUserInfoExist(true)}
							>
								Save Changes
							</Button>
						</form>
					</CardContent>
				</Card>
			) : (
				<ProfileDisplay
					setEditUserInfo={setEditUserInfo}
					firstname={donor?.firstname}
					lastname={donor?.lastname}
					address={donor?.address}
					phone={donor.phone}
					bloodType={donor.donor ? donor.donor.bloodType  : ""}
					dateOfBirth={donor.DateOfBirth}
				/>
			)}
		</div>
	);
}
