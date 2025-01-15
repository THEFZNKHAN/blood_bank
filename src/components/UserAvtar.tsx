"use client"

import { prisma } from "@/lib/prisma";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from 'axios'
import { UserDetials } from "@/app/user-registration/page";

export const UserAvtar = ({ userId}: { userId: string | null}) => {
    const [user, setUser] = useState<UserDetials>();

    useEffect(() => {
       
        if (userId){
            const fetchUser = async () => {
                const res = await axios.get('/api/auth')
                console.log('this is comming', res.data);
                setUser(res.data)
            }
            fetchUser();
            
        }

    }, [])

	return (
		<div className="flex space-x-8 items-center">
			<Link
            
				href={
					user && user.role === "donor"
						? "/dashboard/donor/profile"
						: "/blood_bank_dashboard"
				}
				className="text-md font-medium text-[#072037] hover:text-red-500"
			>
				Dashboard
			</Link>
			<UserButton />
		</div>
	);
};
