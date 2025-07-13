"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, FileText, DollarSign, Users, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import { submitQuoteRequest } from "@/lib/database"

const services = [
  { id: "web-dev", name: "Website Development", price: "Starting at ₹ 19,999" },
  { id: "ui-ux", name: "UI/UX Design", price: "Starting at ₹ 9,999" },
  { id: "mobile-app", name: "Mobile App Development", price: "Starting at ₹ 24,999" },
  { id: "seo", name: "SEO Optimization", price: "Starting at ₹ 9,999" },
  { id: "branding", name: "Branding & Marketing", price: "Starting at ₹ 9,999" },
  { id: "custom-software", name: "Custom Software Solutions", price: "Starting at ₹ 49,999" },
]

const budgetRanges = [
  "Under ₹ 5,000",
  "₹ 5,000 - ₹ 10,000",
  "₹ 10,000 - ₹ 25,000",
  "₹ 25,000 - ₹ 50,000",
  "₹ 50,000 - ₹ 100,000",
  "Over ₹ 100,000",
]

const timelines = ["ASAP (Rush job)", "1-2 weeks", "1 month", "2-3 months", "3-6 months", "6+ months"]

export default function QuotePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    // Contact Info
    name: "",
    email: "",
    phone: "",
    company: "",

    // Project Details
    services: [] as string[],
    projectTitle: "",
    projectDescription: "",
    budget: "",
    timeline: "",

    // Additional Info
    hasExistingWebsite: "",
    existingWebsiteUrl: "",
    targetAudience: "",
    competitors: "",
    additionalRequirements: "",

    // Files
    files: [] as File[],
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked ? [...prev.services, serviceId] : prev.services.filter((s) => s !== serviceId),
    }))
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setFormData((prev) => ({ ...prev, files: [...prev.files, ...files] }))
  }

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await submitQuoteRequest({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        services: formData.services,
        project_title: formData.projectTitle,
        project_description: formData.projectDescription,
        budget: formData.budget,
        timeline: formData.timeline,
        has_existing_website: formData.hasExistingWebsite === "yes",
        existing_website_url: formData.existingWebsiteUrl,
        target_audience: formData.targetAudience,
        competitors: formData.competitors,
        additional_requirements: formData.additionalRequirements,
      })

      alert("Quote request submitted successfully! We'll get back to you within 24 hours.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        services: [],
        projectTitle: "",
        projectDescription: "",
        budget: "",
        timeline: "",
        hasExistingWebsite: "",
        existingWebsiteUrl: "",
        targetAudience: "",
        competitors: "",
        additionalRequirements: "",
        files: [],
      })
    } catch (error) {
      console.error("Error submitting quote request:", error)
      alert("Sorry, there was an error submitting your request. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(168,85,247,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute top-2/5 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/3 left-3/5 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-2000"></div>
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
                Get Your Quote
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Let's Build Something Amazing Together
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Tell us about your project and we'll provide you with a detailed quote tailored to your specific needs
                and budget.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center bg-gray-900/50 backdrop-blur-sm border border-cyan-400/30 shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="bg-cyan-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">
                    <FileText className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">1. Tell Us About Your Project</h3>
                  <p className="text-gray-300">Share your vision, requirements, and goals with our team.</p>
                </CardContent>
              </Card>

              <Card className="text-center bg-gray-900/50 backdrop-blur-sm border border-purple-400/30 shadow-lg hover:shadow-purple-400/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-purple-400/30">
                    <DollarSign className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">2. Get Your Custom Quote</h3>
                  <p className="text-gray-300">
                    Receive a detailed proposal with pricing and timeline within 24 hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center bg-gray-900/50 backdrop-blur-sm border border-pink-400/30 shadow-lg hover:shadow-pink-400/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="bg-pink-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-pink-400/30">
                    <Users className="h-8 w-8 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">3. Start Your Project</h3>
                  <p className="text-gray-300">Once approved, we'll assign your dedicated team and begin work.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/30 shadow-2xl shadow-cyan-400/20">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
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
                  </div>

                  {/* Services Selection */}
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Services Needed *</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className="flex items-start space-x-3 p-4 border border-gray-700 rounded-lg hover:bg-gray-800/50 transition-colors"
                        >
                          <Checkbox
                            id={service.id}
                            checked={formData.services.includes(service.id)}
                            onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                            className="border-gray-600 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                          />
                          <div className="flex-1">
                            <label htmlFor={service.id} className="font-medium text-white cursor-pointer">
                              {service.name}
                            </label>
                            <p className="text-sm text-gray-400">{service.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Project Title *</label>
                        <Input
                          value={formData.projectTitle}
                          onChange={(e) => handleInputChange("projectTitle", e.target.value)}
                          placeholder="Give your project a name"
                          required
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Project Description *</label>
                        <Textarea
                          value={formData.projectDescription}
                          onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                          placeholder="Describe your project in detail. What are your goals? What features do you need? What problems are you trying to solve?"
                          rows={6}
                          required
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range *</label>
                          <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                              <SelectValue placeholder="Select your budget range" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-gray-700">
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range} className="text-white hover:bg-gray-700">
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Timeline *</label>
                          <Select
                            value={formData.timeline}
                            onValueChange={(value) => handleInputChange("timeline", value)}
                          >
                            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                              <SelectValue placeholder="When do you need this completed?" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-gray-700">
                              {timelines.map((timeline) => (
                                <SelectItem key={timeline} value={timeline} className="text-white hover:bg-gray-700">
                                  {timeline}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Additional Information</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Do you have an existing website?
                        </label>
                        <Select
                          value={formData.hasExistingWebsite}
                          onValueChange={(value) => handleInputChange("hasExistingWebsite", value)}
                        >
                          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="yes" className="text-white hover:bg-gray-700">
                              Yes
                            </SelectItem>
                            <SelectItem value="no" className="text-white hover:bg-gray-700">
                              No
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {formData.hasExistingWebsite === "yes" && (
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Existing Website URL</label>
                          <Input
                            value={formData.existingWebsiteUrl}
                            onChange={(e) => handleInputChange("existingWebsiteUrl", e.target.value)}
                            placeholder="https://yourwebsite.com"
                            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400"
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Target Audience</label>
                        <Textarea
                          value={formData.targetAudience}
                          onChange={(e) => handleInputChange("targetAudience", e.target.value)}
                          placeholder="Describe your target audience (age, demographics, interests, etc.)"
                          rows={3}
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Competitors or Inspiration
                        </label>
                        <Textarea
                          value={formData.competitors}
                          onChange={(e) => handleInputChange("competitors", e.target.value)}
                          placeholder="List any competitors or websites/apps you admire and why"
                          rows={3}
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Additional Requirements</label>
                        <Textarea
                          value={formData.additionalRequirements}
                          onChange={(e) => handleInputChange("additionalRequirements", e.target.value)}
                          placeholder="Any other requirements, preferences, or information you'd like to share"
                          rows={4}
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Project Files (Optional)</h2>
                    <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-cyan-400 transition-colors bg-gray-800/30">
                      <Upload className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                      <p className="text-gray-400 mb-4">
                        Upload any relevant files (wireframes, designs, documents, etc.)
                      </p>
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.gif,.sketch,.fig"
                      />
                      <label htmlFor="file-upload">
                        <Button
                          type="button"
                          variant="outline"
                          className="cursor-pointer bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700"
                        >
                          Choose Files
                        </Button>
                      </label>
                    </div>

                    {formData.files.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-medium text-white mb-2">Uploaded Files:</h4>
                        <div className="space-y-2">
                          {formData.files.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between bg-gray-800 p-3 rounded border border-gray-700"
                            >
                              <span className="text-sm text-gray-300">{file.name}</span>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFile(index)}
                                className="text-red-400 hover:text-red-300 hover:bg-red-500/20"
                              >
                                Remove
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-8">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold px-12 py-4 text-lg shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/70 transition-all duration-300 transform hover:scale-105"
                    >
                      Submit Quote Request
                    </Button>
                    <p className="text-sm text-gray-400 mt-4">
                      We'll review your request and get back to you within 24 hours with a detailed quote.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
        <Chatbot />
      </div>
    </div>
  )
}
