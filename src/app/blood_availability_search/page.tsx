"use client";

import React, { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface BloodBank {
  id: number;
  name: string;
  address: string;
  contact: {
    phone: string;
    fax: string;
    email: string;
  };
  bloodGroup: string;
  availability: string;
  lastUpdated: string;
}

const BloodBankSearch = () => {
  const allBloodBanks: BloodBank[] = useMemo(
    () => [
      {
        id: 1,
        name: "Indian Red Cross Society NHQ Blood Centre",
        address:
          "1, Red Cross Road, Sansad Marg Area, New Delhi, Delhi",
        contact: {
          phone: "1123711551",
          fax: "01123717454",
          email: "directorbloodbank@indianredcross.org",
        },
        bloodGroup: "O+",
        availability: "5 Units",
        lastUpdated: "2024-11-22",
      },
      {
        id: 2,
        name: "State Bank Demo",
        address:
          "234 test A, 2XYZc, demo bank Blood Bank Sikar, New Delhi, Delhi",
        contact: {
          phone: "9900000000",
          fax: "",
          email: "",
        },
        bloodGroup: "A+",
        availability: "2 Units",
        lastUpdated: "2024-11-22",
      },
      {
        id: 3,
        name: "State Bank Demo",
        address:
          "234 test A, 2XYZc, demo bank Blood Bank Sikar, Pune, Maharashtra",
        contact: {
          phone: "9900000000",
          fax: "",
          email: "",
        },
        bloodGroup: "O-",
        availability: "1 Units",
        lastUpdated: "2024-11-22",
      },
      {
        id: 4,
        name: "Sate Banksa Demo",
        address:
          "234 test A, 2XYZc, demo banka Blood Bank sikar, New Delhi, Delhi",
        contact: {
          phone: "9900000000",
          fax: "",
          email: "",
        },
        bloodGroup: "AB-",
        availability: "1 Units",
        lastUpdated: "2024-11-22",
      },
      {
        id: 5,
        name: "Sate Banksa Demo",
        address:
          "234 test A, 2XYZc, demo banka Blood Bank sikar, New Delhi, Delhi",
        contact: {
          phone: "9900000000",
          fax: "",
          email: "",
        },
        bloodGroup: "AB+",
        availability: "1 Units",
        lastUpdated: "2024-11-22",
      },
    ],
    []
  );

  const [selectedState, setSelectedState] = useState<string>("all");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("all");
  const [selectedBloodType, setSelectedBloodType] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredBloodBanks = useMemo(() => {
    return allBloodBanks.filter((bank) => {
      const stateMatch =
        selectedState === "all" ||
        bank.address.toLowerCase().includes(selectedState.toLowerCase());
      const districtMatch =
        selectedDistrict === "all" ||
        bank.address.toLowerCase().includes(selectedDistrict.toLowerCase());
      const bloodTypeMatch =
        selectedBloodType === "all" || bank.bloodGroup === selectedBloodType;
      return stateMatch && districtMatch && bloodTypeMatch;
    });
  }, [allBloodBanks, selectedState, selectedDistrict, selectedBloodType]);

  const totalPages = Math.ceil(filteredBloodBanks.length / itemsPerPage);
  const paginatedBloodBanks = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredBloodBanks.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredBloodBanks, currentPage]);

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] p-6">
      <div className="mb-8 mt-2">
        <h1 className="text-black text-4xl font-bold mb-4">
          Blood Stock Availability
        </h1>
        <p className="text-gray-400 mb-6">
          Search for the current stock of blood available at various blood banks
        </p>

        <div className="flex gap-4 my-8">
          <Select value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="maharashtra">Maharashtra</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="District" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="New Delhi">New Delhi</SelectItem>
              <SelectItem value="Central Delhi">Central Delhi</SelectItem>
              <SelectItem value="Pune">Pune</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={selectedBloodType}
            onValueChange={setSelectedBloodType}
          >
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Blood type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="O+">O+</SelectItem>
              <SelectItem value="A+">A+</SelectItem>
              <SelectItem value="B+">B+</SelectItem>
              <SelectItem value="AB+">AB+</SelectItem>
              <SelectItem value="O-">O-</SelectItem>
              <SelectItem value="A-">A-</SelectItem>
              <SelectItem value="B-">B-</SelectItem>
              <SelectItem value="AB-">AB-</SelectItem>
            </SelectContent>
          </Select>

          <Button className="gap-2" onClick={handleSearch}>
            <Search className="h-4 w-4" />
            Search
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4">S.No</th>
                <th className="text-left p-4">Blood Bank Name</th>
                <th className="text-left p-4">Blood Group</th>
                <th className="text-left p-4">Availability</th>
                <th className="text-left p-4">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {paginatedBloodBanks.map((bank, index) => (
                <tr
                  key={bank.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="p-4">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="p-4">
                    <div>
                      <p className="font-medium">{bank.name}</p>
                      <p className="text-sm text-gray-400">{bank.address}</p>
                      <p className="text-sm text-gray-400">
                        Phone: {bank.contact.phone}
                        {bank.contact.fax && `, Fax: ${bank.contact.fax}`}
                        {bank.contact.email && `, Email: ${bank.contact.email}`}
                      </p>
                    </div>
                  </td>
                  <td className="p-4">{bank.bloodGroup}</td>
                  <td className="p-4">{bank.availability}</td>
                  <td className="p-4">{bank.lastUpdated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button variant="outline" className="px-4">
            {currentPage} of {totalPages}
          </Button>
          <Button
            variant="outline"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BloodBankSearch;
