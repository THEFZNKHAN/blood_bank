"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { ProfileDisplay } from "@/components/donor-profile";

import { UserDetials } from "@/app/user-registeration/page";
import { CircleX, Loader } from "lucide-react";

interface Donor extends UserDetials {
	donor: {
		bloodType: string | null;
	};
}
export default function ProfilePage() {
	const [loading, setLoading] = useState<boolean>(false);

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


	useEffect(() => {
		const fetchUserInfo = async () => {
			try {
				const res = await axios.get("/api/donors/profile");

				if (res.status === 200) {
					// set the user info
					setDonor(res.data);
				}
			} catch (error) {}
		};
		// fetch the user detail
		fetchUserInfo();
	}, []);

	const handleUpdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (name === "donor") {
			setDonor((prevDonor) => {
				return {
					...prevDonor,
					donor: {
						bloodType: e.target.value,
					},
				};
			});
		} else {
			setDonor((prevState) => ({
				...prevState,
				[name]: value,
			}));
		}
	};
	

	const updateDonorInfo = async () => {
		setLoading(true);
		try {
			const res = await axios.put("/api/donors/profile", donor);
			if (res.status === 200) {
				setEditUserInfo(false);
				setDonor(res.data);
				setLoading(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-bold text-PRIMARY">
				Hi, {donor.firstname}
			</h1>
			{editUserInfo ? (
				<Card>
					<CardHeader>
						<CardTitle className="text-PRIMARY flex flex-row items-center gap-3 justify-between">
							Personal Information
							<Button
								className="rounded-full"
								variant={"ghost"}
								size={"icon"}
								onClick={() => setEditUserInfo(false)}
							>
								<CircleX className="h-12 w-12 " />
							</Button>
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="firstname">
										First Name
									</Label>
									<Input
										id="firstname"
										name="firstname"
										placeholder="John"
										value={donor.firstname}
										onChange={handleUpdateChange}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="lastname">Last Name</Label>
									<Input
										id="lastname"
										name="lastname"
										placeholder="Doe"
										value={donor.lastname}
										onChange={handleUpdateChange}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="phone">Phone</Label>
									<Input
										id="phone"
										name="phone"
										type="tel"
										placeholder="+1 234 567 890"
										value={donor.phone}
										onChange={handleUpdateChange}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="bloodType">
										Blood Type
									</Label>
									<Input
										id="bloodType"
										placeholder="A+"
										name="donor"
										type="text"
										value={
											donor.donor &&
											donor.donor.bloodType !== null
												? donor.donor.bloodType
												: ""
										}
										onChange={handleUpdateChange}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="DateOfBirth">
										Date of Birth
									</Label>
									<Input
										id="DateOfBirth"
										name="DateOfBirth"
										type="date"
										value={donor.DateOfBirth}
										onChange={handleUpdateChange}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="address">Address</Label>
									<Input
										id="address"
										name="address"
										placeholder=""
										value={donor.address}
										onChange={handleUpdateChange}
									/>
								</div>
							</div>
							<Button
								type="submit"
								className="bg-[#072037]"
								onClick={() => updateDonorInfo()}
							>
								{loading && <Loader className="animate-spin" />}
								Save Changes
							</Button>
						</div>
					</CardContent>
				</Card>
			) : (
				<ProfileDisplay
					setEditUserInfo={setEditUserInfo}
					firstname={donor?.firstname}
					lastname={donor?.lastname}
					address={donor?.address}
					phone={donor.phone}
					bloodType={donor.donor ? donor.donor.bloodType : ""}
					dateOfBirth={donor.DateOfBirth}
				/>
			)}
		</div>
	);
}
