import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import FeatureCards from "@/components/ui/feature-card";

const Home = async () => {
	const user = await currentUser();
	const username = user?.firstName;

	return (
		<div className="h-screen bg-white ">
			<div className="flex flex-row  items-center ">
				<section className="flex-1 pl-12 pr-8 flex-col  items-start justify-center">
					<h1 className="text-[#0b3052] text-4xl font-bold mb-4 ">
						Save Lives with Every Drop
					</h1>
					<div className="w-[60%] mb-8">
						<span className="text-[#788291] text-lg w-full sm:max-w-[75%] leading-relaxed mt-4">
							Join our mission to ensure a stable blood supply for
							those in need. Your donation can make a difference.
						</span>
					</div>
					<Button
						size="lg"
						className="bg-red-600  hover:bg-red-500 text-white w-80 rounded-lg"
					>
						Donate Now
					</Button>
				</section>
				<section className="flex-1  items-center ">
					<Image
						src="/blood-donor.jpg"
						alt="Blood Donor"
						width={500}
						height={300}
					/>
				</section>
			</div>
			<div className="flex flex-col items-center mt-5">
				<h1 className="text-[#0b3052] text-3xl font-bold mb-4 ">
					Our Features
				</h1>
				<div>
					<FeatureCards />
				</div>
			</div>
		</div>
	);
};

export default Home;
