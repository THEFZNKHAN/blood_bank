import { Search, LogIn, BookPlus } from "lucide-react";
import Link from "next/link";

const FeatureCards = () => {
	const features = [
		{
			href: "1",
			title: "Blood Availability Search",
			description:
				"Quick search for available blood types across registered blood banks",
			icon: <Search className="w-6 h-6" />,
		},
		{
			href: "2",
			title: "Find Your Nearest Blood Bank",
			description: "Locate the closest blood bank centers in your area",
			icon: <Search className="w-6 h-6" />,
		},
		{
			href: "3",
			title: "Donor Login",
			description: "Access your donor profile and donation history",
			icon: <LogIn className="w-6 h-6" />,
		},
		{
			href: "4",
			title: "Register New Blood Bank",
			description: "Register your blood bank facility in our network",
			icon: <BookPlus className="w-6 h-6" />,
		},
	];

	return (
		<div className=" p-8">
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{features.map((feature, index) => (
					<Link
						href={feature.href}
						key={index}
						className="group relative rounded-lg border-2 p-6 border-[#e7eef2] transition-all duration-300 cursor-pointer"
					>
						<div className="flex flex-col items-start space-y-4">
							<div className="p-2 rounded-full text-[#0b3052] bg-[#d7dfef] group-hover:bg-[#f1f6ff] transition-colors">
								{feature.icon}
							</div>
							<h3 className="text-xl font-semibold text-[#0b3052] ">
								{feature.title}
							</h3>
							<p className="text-[#788291] text-sm">
								{feature.description}
							</p>
						</div>
						<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-800/5 to-indigo-800/5 opacity-0 group-hover:opacity-100 transition-opacity" />
					</Link>
				))}
			</div>
		</div>
	);
};

export default FeatureCards;
