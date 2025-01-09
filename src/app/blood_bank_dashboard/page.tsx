import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Droplet, Users, TruckIcon, Clock } from "lucide-react";

const BloodBankDashboard = () => {
  const inventoryData = [
    { type: "A+", units: 50, processing: 5, expiring: 3 },
    { type: "O-", units: 30, processing: 2, expiring: 1 },
    { type: "B+", units: 45, processing: 3, expiring: 2 },
  ];

  const donorData = [
    { id: "D001", name: "John Doe", date: "2025-01-10", status: "Completed" },
    { id: "D002", name: "Jane Smith", date: "2025-01-10", status: "Screening" },
    {
      id: "D003",
      name: "Bob Wilson",
      date: "2025-01-10",
      status: "Processing",
    },
  ];

  const distributionData = [
    {
      id: "H001",
      hospital: "City Hospital",
      type: "A+",
      units: 5,
      status: "In Transit",
    },
    {
      id: "H002",
      hospital: "Metro Clinic",
      type: "O-",
      units: 3,
      status: "Delivered",
    },
    {
      id: "H003",
      hospital: "Emergency Care",
      type: "B+",
      units: 2,
      status: "Emergency",
    },
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">
          Blood Bank Dashboard
        </h1>
        <Badge variant="outline" className="gap-1">
          <Clock className="w-4 h-4" />
          Live Updates
        </Badge>
      </div>

      <Tabs defaultValue="inventory" className="space-y-6">
        <TabsList>
          <TabsTrigger value="inventory" className="gap-2">
            <Droplet className="w-4 h-4" />
            Inventory
          </TabsTrigger>
          <TabsTrigger value="donors" className="gap-2">
            <Users className="w-4 h-4" />
            Donors
          </TabsTrigger>
          <TabsTrigger value="distribution" className="gap-2">
            <TruckIcon className="w-4 h-4" />
            Distribution
          </TabsTrigger>
        </TabsList>

        <TabsContent value="inventory" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Total Stock</CardTitle>
                <CardDescription>Current blood units available</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">125</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Processing</CardTitle>
                <CardDescription>Units under processing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">10</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Expiring Soon</CardTitle>
                <CardDescription>Units expiring in 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600">6</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Inventory Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Blood Type</TableHead>
                    <TableHead>Available Units</TableHead>
                    <TableHead>Processing</TableHead>
                    <TableHead>Expiring Soon</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventoryData.map((item) => (
                    <TableRow key={item.type}>
                      <TableCell className="font-medium">{item.type}</TableCell>
                      <TableCell>{item.units}</TableCell>
                      <TableCell>{item.processing}</TableCell>
                      <TableCell>
                        <span className="text-red-600">{item.expiring}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="donors" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Today&apos;s Donors</CardTitle>
                <CardDescription>Scheduled donations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">15</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Screenings</CardTitle>
                <CardDescription>Pending health screenings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Processing</CardTitle>
                <CardDescription>Donations being processed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">5</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Donors</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Donor ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {donorData.map((donor) => (
                    <TableRow key={donor.id}>
                      <TableCell className="font-medium">{donor.id}</TableCell>
                      <TableCell>{donor.name}</TableCell>
                      <TableCell>{donor.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            donor.status === "Completed"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {donor.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="distribution" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Pending Requests</CardTitle>
                <CardDescription>Hospital blood requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">7</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>In Transit</CardTitle>
                <CardDescription>Current deliveries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency</CardTitle>
                <CardDescription>Emergency requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600">2</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Distribution Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Request ID</TableHead>
                    <TableHead>Hospital</TableHead>
                    <TableHead>Blood Type</TableHead>
                    <TableHead>Units</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {distributionData.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">
                        {request.id}
                      </TableCell>
                      <TableCell>{request.hospital}</TableCell>
                      <TableCell>{request.type}</TableCell>
                      <TableCell>{request.units}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            request.status === "Emergency"
                              ? "destructive"
                              : request.status === "Delivered"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {request.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BloodBankDashboard;
