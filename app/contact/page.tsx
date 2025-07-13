"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import { submitContactForm } from "@/lib/database"

const contactMethods = [
  {
    icon: <Mail className="h-8 w-8 text-cyan-400" />,
    title: "Email Us",
    description: "Send us an email and we'll respond within 24 hours",
    contact: "webloompvtltd@gmail.com",
    action: "mailto:webloompvtltd@gmail.com",
    color: "cyan",
  },
  {
    icon: <Phone className="h-8 w-8 text-purple-400" />,
    title: "Call Us",
    description: "Speak directly with our team during business hours",
    contact: "+91 91345 15390",
    action: "tel:+91 91345 15390",
    color: "purple",
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-pink-400" />,
    title: "Live Chat",
    description: "Chat with our AI assistant or request to speak with a human",
    contact: "Available 24/7",
    action: "#",
    color: "pink",
  },
  {
    icon: <MapPin className="h-8 w-8 text-green-400" />,
    title: "Visit Us",
    description: "Schedule an in-person meeting at our office",
    contact: "Chennai, Tamil Nadu",
    action: "#",
    color: "green",
  },
]

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" },
  { day: "Sunday", hours: "Closed" },
]

const inquiryTypes = [
  "General Inquiry",
  "Project Quote",
  "Technical Support",
  "Partnership Opportunity",
  "Career Inquiry",
  "Media/Press",
  "Other",
]

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        inquiry_type: formData.inquiryType,
        subject: formData.subject,
        message: formData.message,
      })

      alert("Message sent successfully! We'll get back to you soon.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        inquiryType: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Sorry, there was an error sending your message. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/5 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/5 left-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-6 py-2 text-lg font-bold border border-cyan-400 shadow-lg shadow-cyan-400/50">
                <Zap className="w-4 h-4 mr-2" />
                Contact Us
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Let's Start a Conversation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Have a question, project idea, or just want to say hello? We'd love to hear from you. Get in touch and
                let's make something amazing together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className={`text-center group hover:shadow-2xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-${method.color}-400/30 hover:shadow-${method.color}-400/50 transform hover:scale-105`}
                >
                  <CardContent className="p-8">
                    <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <h3
                      className={`text-xl font-semibold mb-3 text-white group-hover:text-${method.color}-400 transition-colors`}
                    >
                      {method.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm group-hover:text-gray-200 transition-colors">
                      {method.description}
                    </p>
                    <div className="font-medium text-white mb-4">{method.contact}</div>
                    {method.action !== "#" && (
                      <a href={method.action}>
                        <Button
                          variant="outline"
                          size="sm"
                          className={`group-hover:bg-${method.color}-500/20 bg-transparent border-gray-600 text-gray-300 hover:text-${method.color}-400 hover:border-${method.color}-400`}
                        >
                          Contact
                        </Button>
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/30 shadow-2xl shadow-cyan-400/20">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                          <Input
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Enter your full name"
                            required
                            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                          <Input
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="Enter your phone number"
                            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                          <Input
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            placeholder="Enter your company name"
                            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Inquiry Type *</label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) => handleInputChange("inquiryType", value)}
                        >
                          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type} value={type} className="text-white hover:bg-gray-700">
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                        <Input
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          placeholder="Brief subject line"
                          required
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Tell us more about your inquiry..."
                          rows={6}
                          required
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/70 transition-all duration-300 transform hover:scale-105"
                      >
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info & Map */}
              <div className="space-y-8">
                {/* Office Hours */}
                <Card className="bg-gray-900/50 backdrop-blur-sm border border-purple-400/30 shadow-xl hover:shadow-purple-400/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Clock className="h-6 w-6 text-purple-400 mr-3" />
                      <h3 className="text-2xl font-bold text-white">Office Hours</h3>
                    </div>
                    <div className="space-y-3">
                      {officeHours.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-gray-800 last:border-b-0"
                        >
                          <span className="font-medium text-white">{schedule.day}</span>
                          <span className="text-gray-300">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-purple-500/20 rounded-lg border border-purple-400/30">
                      <p className="text-sm text-purple-300">
                        <strong>Need urgent support?</strong> Use our live chat feature available 24/7 or email us at
                        webloompvtltd@gmail.com for priority response.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Map Placeholder */}
                <Card className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/30 shadow-xl hover:shadow-cyan-400/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Our Location</h3>
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-6 border border-gray-700">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-cyan-400 mx-auto mb-2" />
                        <p className="text-gray-300">Interactive Map</p>
                        <p className="text-sm text-gray-400">Chennai, Tamil Nadu</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-cyan-400 mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium text-white">Chennai</p>
                          <p className="text-gray-300">
                            Veltech university, Avadi,
                            <br />
                            Chennai, Tamil Nadu 600001
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-cyan-400 mr-3" />
                        <p className="text-gray-300">+91 91345 15390</p>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-cyan-400 mr-3" />
                        <p className="text-gray-300">webloompvtltd@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ Quick Links */}
                <Card className="bg-gray-900/50 backdrop-blur-sm border border-pink-400/30 shadow-xl hover:shadow-pink-400/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Quick Questions?</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-white mb-2">How quickly can you start my project?</h4>
                        <p className="text-sm text-gray-300">
                          Most projects can begin within 1-2 weeks of contract signing, depending on our current
                          workload and project complexity.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Do you work with international clients?</h4>
                        <p className="text-sm text-gray-300">
                          Yes! We work with clients worldwide and have experience managing projects across different
                          time zones.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">What's included in your quotes?</h4>
                        <p className="text-sm text-gray-300">
                          Our quotes include detailed project scope, timeline, deliverables, and transparent pricing
                          with no hidden fees.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <Chatbot />
      </div>
    </div>
  )
}
