"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, DollarSign, Users, Coffee, Laptop, Heart, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import { submitCareerApplication } from "@/lib/database"

const jobs = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    type: "Full-time",
    location: "Remote",
    salary: "₹ 20,000 - ₹ 35,000",
    description:
      "Join our core development team to build scalable web applications using React, Node.js, and modern technologies.",
    requirements: ["2+ years experience", "React/Node.js expertise", "Database design", "API development"],
    tags: ["React", "Node.js", "MongoDB", "AWS"],
    color: "cyan",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Hybrid",
    salary: "₹ 10,000 - ₹ 25,000",
    description:
      "Create beautiful, user-centered designs for web and mobile applications. Work closely with clients and development teams.",
    requirements: ["1+ years experience", "Figma/Adobe XD", "User research", "Prototyping"],
    tags: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    color: "purple",
  },
  {
    id: 3,
    title: "Frontend Developer",
    type: "Freelance",
    location: "Remote",
    salary: "₹ 10,000 - ₹ 20,000",
    description:
      "Build responsive, interactive user interfaces for client projects. Flexible hours and project-based work.",
    requirements: ["1+ years experience", "React/Vue.js", "Responsive design", "Git workflow"],
    tags: ["React", "Vue.js", "CSS", "JavaScript"],
    color: "pink",
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    type: "Internship",
    location: "Remote",
    salary: "₹ 9,999 - ₹ 20,000",
    description:
      "Learn digital marketing strategies while working on real client campaigns. Great opportunity for students and career changers.",
    requirements: ["Marketing knowledge", "Social media savvy", "Content creation", "Analytics tools"],
    tags: ["SEO", "Social Media", "Content Marketing", "Analytics"],
    color: "green",
  },
  {
    id: 5,
    title: "Mobile App Developer",
    type: "Full-time",
    location: "Remote",
    salary: "₹ 30,000 - ₹ 60,000",
    description:
      "Develop native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
    requirements: ["1+ years mobile dev", "React Native/Flutter", "App Store deployment", "API integration"],
    tags: ["React Native", "Flutter", "iOS", "Android"],
    color: "yellow",
  },
  {
    id: 6,
    title: "Project Manager",
    type: "Full-time",
    location: "Hybrid",
    salary: "₹ 30,000 - ₹ 70,000",
    description:
      "Lead client projects from inception to delivery. Coordinate with teams, manage timelines, and ensure quality delivery.",
    requirements: ["PMP certification preferred", "Agile methodology", "Client communication", "Team leadership"],
    tags: ["Project Management", "Agile", "Scrum", "Leadership"],
    color: "blue",
  },
]

const perks = [
  {
    icon: <Laptop className="h-8 w-8 text-cyan-400" />,
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours and a healthy work-life balance.",
    color: "cyan",
  },
  {
    icon: <Users className="h-8 w-8 text-purple-400" />,
    title: "Collaborative Team",
    description: "Join a diverse, talented team that supports each other's growth and success.",
    color: "purple",
  },
  {
    icon: <Zap className="h-8 w-8 text-pink-400" />,
    title: "Growth Opportunities",
    description: "Continuous learning, skill development, and career advancement opportunities.",
    color: "pink",
  },
  {
    icon: <Coffee className="h-8 w-8 text-green-400" />,
    title: "Great Benefits",
    description: "Competitive salary, health insurance, paid time off, and professional development budget.",
    color: "green",
  },
  {
    icon: <Heart className="h-8 w-8 text-red-400" />,
    title: "Meaningful Work",
    description: "Work on projects that make a real impact for clients and their customers.",
    color: "red",
  },
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    coverLetter: "",
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
      await submitCareerApplication({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experience: formData.experience,
        portfolio_url: formData.portfolio,
        cover_letter: formData.coverLetter,
      })

      alert("Application submitted successfully! We'll be in touch soon.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        portfolio: "",
        coverLetter: "",
      })
    } catch (error) {
      console.error("Error submitting application:", error)
      alert("Sorry, there was an error submitting your application. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/5 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
          <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/5 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-2000"></div>
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
                Join Our Team
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Build Your Career With Webloom
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Join a team of passionate creators, innovators, and problem-solvers. Whether you're a freelancer,
                intern, or looking for full-time opportunities, we have a place for you.
              </p>
            </div>
          </div>
        </section>

        {/* Perks Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Work With Us?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We believe in creating an environment where talent thrives and careers flourish
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {perks.slice(0, 3).map((perk, index) => (
                <Card
                  key={index}
                  className={`text-center group hover:shadow-2xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-${perk.color}-400/30 hover:shadow-${perk.color}-400/50 transform hover:scale-105`}
                >
                  <CardContent className="p-8">
                    <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {perk.icon}
                    </div>
                    <h3
                      className={`text-xl font-semibold mb-3 text-white group-hover:text-${perk.color}-400 transition-colors`}
                    >
                      {perk.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{perk.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
              {perks.slice(3).map((perk, index) => (
                <Card
                  key={index + 3}
                  className={`text-center group hover:shadow-2xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-${perk.color}-400/30 hover:shadow-${perk.color}-400/50 transform hover:scale-105`}
                >
                  <CardContent className="p-8">
                    <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {perk.icon}
                    </div>
                    <h3
                      className={`text-xl font-semibold mb-3 text-white group-hover:text-${perk.color}-400 transition-colors`}
                    >
                      {perk.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{perk.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Find your perfect role and join our growing team of digital innovators
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {jobs.map((job) => (
                <Card
                  key={job.id}
                  className={`group hover:shadow-2xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-${job.color}-400/30 hover:shadow-${job.color}-400/50 transform hover:scale-105`}
                >
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3
                          className={`text-2xl font-bold text-white mb-2 group-hover:text-${job.color}-400 transition-colors`}
                        >
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge
                            className={`flex items-center bg-${job.color}-500/20 text-${job.color}-400 border border-${job.color}-400/30`}
                          >
                            <Clock className="h-3 w-3 mr-1" />
                            {job.type}
                          </Badge>
                          <Badge
                            className={`flex items-center bg-${job.color}-500/20 text-${job.color}-400 border border-${job.color}-400/30`}
                          >
                            <MapPin className="h-3 w-3 mr-1" />
                            {job.location}
                          </Badge>
                          <Badge
                            className={`flex items-center bg-${job.color}-500/20 text-${job.color}-400 border border-${job.color}-400/30`}
                          >
                            <DollarSign className="h-3 w-3 mr-1" />
                            {job.salary}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">{job.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-sm text-gray-300 flex items-center">
                            <div className={`w-1.5 h-1.5 bg-${job.color}-400 rounded-full mr-2`}></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs border-gray-600 text-gray-400">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => setSelectedJob(job.id)}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/70 transition-all duration-300 transform hover:scale-105"
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Apply Now</h2>
              <p className="text-xl text-gray-300">
                Ready to join our team? Fill out the application form below and we'll get back to you soon.
              </p>
            </div>

            <Card className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/30 shadow-2xl shadow-cyan-400/20">
              <CardContent className="p-8">
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
                      <label className="block text-sm font-medium text-gray-300 mb-2">Position *</label>
                      <Select value={formData.position} onValueChange={(value) => handleInputChange("position", value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          {jobs.map((job) => (
                            <SelectItem key={job.id} value={job.title} className="text-white hover:bg-gray-700">
                              {job.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Years of Experience *</label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => handleInputChange("experience", value)}
                    >
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="0-1" className="text-white hover:bg-gray-700">
                          0-1 years
                        </SelectItem>
                        <SelectItem value="2-3" className="text-white hover:bg-gray-700">
                          2-3 years
                        </SelectItem>
                        <SelectItem value="4-5" className="text-white hover:bg-gray-700">
                          4-5 years
                        </SelectItem>
                        <SelectItem value="6-10" className="text-white hover:bg-gray-700">
                          6-10 years
                        </SelectItem>
                        <SelectItem value="10+" className="text-white hover:bg-gray-700">
                          10+ years
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Portfolio/LinkedIn URL</label>
                    <Input
                      value={formData.portfolio}
                      onChange={(e) => handleInputChange("portfolio", e.target.value)}
                      placeholder="Link to your portfolio or LinkedIn profile"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Cover Letter *</label>
                    <Textarea
                      value={formData.coverLetter}
                      onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      rows={6}
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400"
                    />
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold px-12 py-4 text-lg shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/70 transition-all duration-300 transform hover:scale-105"
                    >
                      Submit Application
                    </Button>
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
