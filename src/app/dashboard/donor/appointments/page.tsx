import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function AppointmentsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Book Appointment</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Schedule New Donation</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="location">Donation Center</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="center1">Blood Bank Center 1</SelectItem>
                    <SelectItem value="center2">Blood Bank Center 2</SelectItem>
                    <SelectItem value="center3">Blood Bank Center 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Preferred Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Preferred Time</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9">9:00 AM</SelectItem>
                    <SelectItem value="10">10:00 AM</SelectItem>
                    <SelectItem value="11">11:00 AM</SelectItem>
                    <SelectItem value="12">12:00 PM</SelectItem>
                    <SelectItem value="13">1:00 PM</SelectItem>
                    <SelectItem value="14">2:00 PM</SelectItem>
                    <SelectItem value="15">3:00 PM</SelectItem>
                    <SelectItem value="16">4:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit">Book Appointment</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Blood Bank Center 1</h3>
                    <p className="text-sm text-muted-foreground">
                      March 15, 2024 - 10:00 AM
                    </p>
                  </div>
                  <Button variant="destructive" size="sm">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

