"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Clock, Video, Globe, User } from "lucide-react"
import { submitConsultationBooking } from "@/lib/database"

interface ConsultationBookingProps {
  onClose: () => void
}

const timeSlots = [
  "9:00am",
  "9:15am",
  "9:30am",
  "9:45am",
  "10:00am",
  "10:15am",
  "10:30am",
  "10:45am",
  "11:00am",
  "11:15am",
  "11:30am",
  "11:45am",
  "1:00pm",
  "1:15pm",
  "1:30pm",
  "1:45pm",
  "2:00pm",
  "2:15pm",
  "2:30pm",
  "2:45pm",
  "3:00pm",
  "3:15pm",
  "3:30pm",
  "3:45pm",
  "4:00pm",
  "4:15pm",
  "4:30pm",
  "4:45pm",
  "5:00pm",
  "5:15pm",
  "5:30pm",
  "5:45pm",
]

const durations = ["15m", "30m", "45m", "60m"]
const timezones = ["Asia/Kolkata", "America/New_York", "Europe/London", "America/Los_Angeles", "Australia/Sydney"]

export default function ConsultationBooking({ onClose }: ConsultationBookingProps) {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    duration: "30m",
    timezone: "Asia/Kolkata",
    meetingType: "Zoom Video",
    projectDetails: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    try {
      await submitConsultationBooking({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        booking_date: selectedDate,
        booking_time: selectedTime,
        duration: formData.duration,
        timezone: formData.timezone,
        meeting_type: formData.meetingType,
        project_details: formData.projectDetails,
      })

      alert("Consultation booked successfully! We'll send you a confirmation email shortly.")
      onClose()
    } catch (error) {
      console.error("Error booking consultation:", error)
      alert("Sorry, there was an error booking your consultation. Please try again.")
    }
  }

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const today = new Date()
    const currentMonth = today.getMonth()
    const currentYear = today.getFullYear()
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day)
      const isToday = date.toDateString() === today.toDateString()
      const isPast = date < today
      days.push({
        day,
        date: date.toISOString().split("T")[0],
        isToday,
        isPast,
        isAvailable: !isPast && day !== 13 && day !== 20 && day !== 27, // Mock unavailable dates
      })
    }

    return days
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const currentDate = new Date()
  const currentMonth = monthNames[currentDate.getMonth()]
  const currentYear = currentDate.getFullYear()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <Card className="w-full max-w-6xl mx-4 bg-gray-900 border border-cyan-400/30 shadow-2xl shadow-cyan-400/20 max-h-[90vh] overflow-y-auto">
        <CardHeader className="border-b border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-black" />
              </div>
              <div>
                <CardTitle className="text-white text-xl">Webloom Team</CardTitle>
                <p className="text-gray-400 text-sm">Let's discuss about your project</p>
              </div>
            </div>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="grid lg:grid-cols-3 min-h-[600px]">
            {/* Left Sidebar - Meeting Details */}
            <div className="bg-gray-800 p-6 border-r border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock className="h-4 w-4 text-cyan-400" />
                  <Select value={formData.duration} onValueChange={(value) => handleInputChange("duration", value)}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      {durations.map((duration) => (
                        <SelectItem key={duration} value={duration} className="text-white hover:bg-gray-600">
                          {duration}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2 text-gray-300">
                  <Video className="h-4 w-4 text-cyan-400" />
                  <span>{formData.meetingType}</span>
                </div>

                <div className="flex items-center space-x-2 text-gray-300">
                  <Globe className="h-4 w-4 text-cyan-400" />
                  <Select value={formData.timezone} onValueChange={(value) => handleInputChange("timezone", value)}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      {timezones.map((tz) => (
                        <SelectItem key={tz} value={tz} className="text-white hover:bg-gray-600">
                          {tz}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {step === 2 && (
                  <div className="mt-6 space-y-4">
                    <h3 className="text-white font-semibold">Your Details</h3>
                    <div className="space-y-3">
                      <div>
                        <Input
                          placeholder="Full Name *"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder="Tell us about your project..."
                          value={formData.projectDetails}
                          onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Center - Calendar */}
            <div className="p-6 bg-gray-900">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {currentMonth} {currentYear}
                  </h3>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                      ←
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                      →
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                    <div key={day} className="text-center text-xs font-medium text-gray-400 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {generateCalendarDays().map((day, index) => (
                    <button
                      key={index}
                      onClick={() => day && day.isAvailable && setSelectedDate(day.date)}
                      disabled={!day || !day.isAvailable}
                      className={`
                        aspect-square flex items-center justify-center text-sm rounded-lg transition-all duration-200
                        ${!day ? "invisible" : ""}
                        ${day && day.isPast ? "text-gray-600 cursor-not-allowed" : ""}
                        ${day && !day.isAvailable && !day.isPast ? "text-gray-500 bg-gray-800 cursor-not-allowed" : ""}
                        ${day && day.isAvailable ? "text-gray-300 hover:bg-gray-700 hover:text-white" : ""}
                        ${day && selectedDate === day.date ? "bg-cyan-500 text-black font-semibold" : ""}
                        ${day && day.isToday && selectedDate !== day.date ? "bg-gray-700 text-cyan-400" : ""}
                      `}
                    >
                      {day?.day}
                    </button>
                  ))}
                </div>
              </div>

              {selectedDate && (
                <div className="text-center">
                  <Button
                    onClick={() => setStep(2)}
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold px-6 py-2 shadow-lg shadow-cyan-400/50"
                  >
                    Book a call
                  </Button>
                </div>
              )}
            </div>

            {/* Right - Time Slots */}
            <div className="p-6 bg-gray-800 border-l border-gray-700">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {selectedDate ? `Sat ${new Date(selectedDate).getDate()}` : "Select a date"}
                </h3>
                <div className="flex space-x-2 text-sm text-gray-400">
                  <span>12h</span>
                  <span>24h</span>
                </div>
              </div>

              {selectedDate && (
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`
                        w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200
                        ${
                          selectedTime === time
                            ? "bg-cyan-500 text-black font-semibold"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              )}

              {step === 2 && selectedTime && (
                <div className="mt-6">
                  <Button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold py-3 shadow-lg shadow-cyan-400/50"
                  >
                    Confirm Booking
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
