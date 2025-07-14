"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getContactSubmissions, getQuoteRequests, getCareerApplications, getConsultationBookings } from "@/lib/database"
import type { ContactSubmission, QuoteRequest, CareerApplication, ConsultationBooking } from "@/lib/supabase"
import { Mail, FileText, Users, Calendar, Download } from "lucide-react"
import Navbar from "@/components/navbar"
// redeploy
export default function AdminPage() {
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([])
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>([])
  const [careerApplications, setCareerApplications] = useState<CareerApplication[]>([])
  const [consultationBookings, setConsultationBookings] = useState<ConsultationBooking[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const [contacts, quotes, careers, consultations] = await Promise.all([
        getContactSubmissions(),
        getQuoteRequests(),
        getCareerApplications(),
        getConsultationBookings(),
      ])

      setContactSubmissions(contacts)
      setQuoteRequests(quotes)
      setCareerApplications(careers)
      setConsultationBookings(consultations)
    } catch (error) {
      console.error("Error loading admin data:", error)
    } finally {
      setLoading(false)
    }
  }

  const exportToCSV = (data: any[], filename: string) => {
    const csv = [
      Object.keys(data[0]).join(","),
      ...data.map((row) =>
        Object.values(row)
          .map((val) => `"${val}"`)
          .join(","),
      ),
    ].join("\n")

    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    a.click()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading admin data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-300">Manage form submissions and bookings</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gray-900/50 border border-cyan-400/30">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Mail className="h-8 w-8 text-cyan-400 mr-3" />
                  <div>
                    <p className="text-2xl font-bold text-white">{contactSubmissions.length}</p>
                    <p className="text-gray-400 text-sm">Contact Forms</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border border-purple-400/30">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-purple-400 mr-3" />
                  <div>
                    <p className="text-2xl font-bold text-white">{quoteRequests.length}</p>
                    <p className="text-gray-400 text-sm">Quote Requests</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border border-pink-400/30">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-pink-400 mr-3" />
                  <div>
                    <p className="text-2xl font-bold text-white">{careerApplications.length}</p>
                    <p className="text-gray-400 text-sm">Applications</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border border-green-400/30">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Calendar className="h-8 w-8 text-green-400 mr-3" />
                  <div>
                    <p className="text-2xl font-bold text-white">{consultationBookings.length}</p>
                    <p className="text-gray-400 text-sm">Consultations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Tables */}
          <Tabs defaultValue="contacts" className="space-y-6">
            <TabsList className="bg-gray-900 border border-gray-700">
              <TabsTrigger value="contacts" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black">
                Contact Forms
              </TabsTrigger>
              <TabsTrigger value="quotes" className="data-[state=active]:bg-purple-500 data-[state=active]:text-black">
                Quote Requests
              </TabsTrigger>
              <TabsTrigger value="careers" className="data-[state=active]:bg-pink-500 data-[state=active]:text-black">
                Career Applications
              </TabsTrigger>
              <TabsTrigger
                value="consultations"
                className="data-[state=active]:bg-green-500 data-[state=active]:text-black"
              >
                Consultations
              </TabsTrigger>
            </TabsList>

            <TabsContent value="contacts">
              <Card className="bg-gray-900/50 border border-cyan-400/30">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-cyan-400">Contact Submissions</CardTitle>
                  <Button
                    onClick={() => exportToCSV(contactSubmissions, "contact-submissions.csv")}
                    className="bg-cyan-500 hover:bg-cyan-400 text-black"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export CSV
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactSubmissions.map((submission) => (
                      <div key={submission.id} className="border border-gray-700 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-white">{submission.name}</h3>
                          <Badge className="bg-cyan-500/20 text-cyan-400">{submission.inquiry_type || "General"}</Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{submission.email}</p>
                        <p className="text-gray-400 text-sm mb-2">
                          <strong>Subject:</strong> {submission.subject}
                        </p>
                        <p className="text-gray-300 text-sm">{submission.message}</p>
                        <p className="text-gray-500 text-xs mt-2">
                          {new Date(submission.created_at!).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="quotes">
              <Card className="bg-gray-900/50 border border-purple-400/30">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-purple-400">Quote Requests</CardTitle>
                  <Button
                    onClick={() => exportToCSV(quoteRequests, "quote-requests.csv")}
                    className="bg-purple-500 hover:bg-purple-400 text-black"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export CSV
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {quoteRequests.map((request) => (
                      <div key={request.id} className="border border-gray-700 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-white">{request.project_title}</h3>
                          <Badge className="bg-purple-500/20 text-purple-400">{request.budget}</Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">
                          {request.name} - {request.email}
                        </p>
                        <p className="text-gray-400 text-sm mb-2">
                          <strong>Services:</strong> {request.services.join(", ")}
                        </p>
                        <p className="text-gray-300 text-sm">{request.project_description}</p>
                        <p className="text-gray-500 text-xs mt-2">{new Date(request.created_at!).toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="careers">
              <Card className="bg-gray-900/50 border border-pink-400/30">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-pink-400">Career Applications</CardTitle>
                  <Button
                    onClick={() => exportToCSV(careerApplications, "career-applications.csv")}
                    className="bg-pink-500 hover:bg-pink-400 text-black"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export CSV
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {careerApplications.map((application) => (
                      <div key={application.id} className="border border-gray-700 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-white">{application.name}</h3>
                          <Badge className="bg-pink-500/20 text-pink-400">{application.position}</Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{application.email}</p>
                        <p className="text-gray-400 text-sm mb-2">
                          <strong>Experience:</strong> {application.experience}
                        </p>
                        {application.portfolio_url && (
                          <p className="text-gray-400 text-sm mb-2">
                            <strong>Portfolio:</strong>
                            <a
                              href={application.portfolio_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-pink-400 hover:underline ml-1"
                            >
                              {application.portfolio_url}
                            </a>
                          </p>
                        )}
                        <p className="text-gray-300 text-sm">{application.cover_letter}</p>
                        <p className="text-gray-500 text-xs mt-2">
                          {new Date(application.created_at!).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="consultations">
              <Card className="bg-gray-900/50 border border-green-400/30">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-green-400">Consultation Bookings</CardTitle>
                  <Button
                    onClick={() => exportToCSV(consultationBookings, "consultation-bookings.csv")}
                    className="bg-green-500 hover:bg-green-400 text-black"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export CSV
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {consultationBookings.map((booking) => (
                      <div key={booking.id} className="border border-gray-700 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-white">{booking.name}</h3>
                          <Badge className="bg-green-500/20 text-green-400">
                            {booking.booking_date} at {booking.booking_time}
                          </Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{booking.email}</p>
                        <p className="text-gray-400 text-sm mb-2">
                          <strong>Duration:</strong> {booking.duration} | <strong>Timezone:</strong> {booking.timezone}
                        </p>
                        {booking.project_details && <p className="text-gray-300 text-sm">{booking.project_details}</p>}
                        <p className="text-gray-500 text-xs mt-2">
                          Booked: {new Date(booking.created_at!).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
