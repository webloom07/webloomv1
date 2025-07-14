"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Star, Users, ChevronLeft, ChevronRight, Calendar, Zap } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import ConsultationBooking from "@/components/consultation-booking"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    content: "Webloom transformed our digital presence completely. Their team delivered beyond expectations!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Chen",
    company: "GrowthCorp",
    content: "Professional, timely, and innovative. Webloom is our go-to partner for all digital solutions.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Emily Rodriguez",
    company: "BrandForward",
    content: "The UI/UX design they created for us increased our conversion rate by 40%. Incredible work!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

const clients = [
  { name: "TechStart", logo: "/placeholder.svg?height=40&width=120" },
  { name: "GrowthCorp", logo: "/placeholder.svg?height=40&width=120" },
  { name: "BrandForward", logo: "/placeholder.svg?height=40&width=120" },
  { name: "InnovateLab", logo: "/placeholder.svg?height=40&width=120" },
  { name: "DigitalEdge", logo: "/placeholder.svg?height=40&width=120" },
]

const caseStudies = [
  {
    title: "E-commerce Platform Redesign",
    client: "RetailPro",
    result: "300% increase in sales",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Web Development", "UI/UX"],
  },
  {
    title: "Mobile App Development",
    client: "FitTracker",
    result: "50K+ downloads in 3 months",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Mobile App", "UI/UX"],
  },
  {
    title: "Brand Identity & Website",
    client: "GreenTech Solutions",
    result: "200% boost in brand recognition",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Branding", "Web Development"],
  },
]

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [showConsultation, setShowConsultation] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-6 py-2 text-lg font-bold border border-cyan-400 shadow-lg shadow-cyan-400/50">
                  <Zap className="w-4 h-4 mr-2" />
                  We Build, You Bloom
                </Badge>
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 tracking-tight">
                  Transform Your
                  <br />
                  <span >
                    Digital Vision
                   
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  From stunning websites to powerful mobile apps, we connect talented freelancers with ambitious clients
                  to create digital experiences that drive growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/quote">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold px-8 py-4 text-lg border border-cyan-400 shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/70 transition-all duration-300 transform hover:scale-105"
                    >
                      Hire Us <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button
                    onClick={() => setShowConsultation(true)}
                    size="lg"
                    className="bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 text-lg shadow-lg shadow-purple-400/50 hover:shadow-purple-400/70 transition-all duration-300 transform hover:scale-105"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Consultation
                  </Button>
                  <Link href="/careers">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg bg-transparent shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all duration-300"
                    >
                      Join Our Team <Users className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>


          

            {/* Hero Video/Animation */}

            <div
              className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl p-1 shadow-2xl shadow-cyan-400/50">
                  <div className="bg-black rounded-xl p-8 flex items-center justify-center h-64 md:h-96 border border-gray-800">
                    <div className="text-center">
                      <div className="relative">
                        <Play className="h-16 w-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
                        <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-30 animate-ping"></div>
                      </div>
                      <p className="text-gray-300 text-lg">Experience Our Digital Universe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
         

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                  10+
                </div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
                  3+
                </div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-pink-400 mb-2 group-hover:text-pink-300 transition-colors">
                  5+
                </div>
                <div className="text-gray-400">Team Members</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                  90%
                </div>
                <div className="text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive digital solutions to help your business thrive in the modern world
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Website Development",
                  icon: "🌐",
                  desc: "Custom websites that convert visitors into customers",
                  color: "cyan",
                },
                {
                  title: "UI/UX Design",
                  icon: "🎨",
                  desc: "Beautiful, intuitive designs that users love",
                  color: "purple",
                },
                {
                  title: "Mobile App Development",
                  icon: "📱",
                  desc: "Native and cross-platform mobile applications",
                  color: "pink",
                },
                {
                  title: "SEO Optimization",
                  icon: "🔍",
                  desc: "Boost your search rankings and organic traffic",
                  color: "green",
                },
                {
                  title: "Branding & Marketing",
                  icon: "🚀",
                  desc: "Build a strong brand that stands out",
                  color: "yellow",
                },
                {
                  title: "Custom Software",
                  icon: "⚙️",
                  desc: "Tailored software solutions for your business",
                  color: "blue",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-300 border-0 bg-gray-900/50 backdrop-blur-sm  border-gray-800 hover:border-${service.color}-400 hover:shadow-${service.color}-400/50 transform hover:scale-105`}
                >
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all duration-300"
                >
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
{/* 
        {/* Case Studies 
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Success Stories</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Real results for real businesses. See how we've helped our clients achieve their goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-purple-400 hover:shadow-purple-400/50 transform hover:scale-105"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {study.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          className="text-xs bg-cyan-500/20 text-cyan-400 border border-cyan-400/30"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 mb-2">Client: {study.client}</p>
                    <p className="text-green-400 font-semibold">{study.result}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/clients">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent shadow-lg shadow-purple-400/30 hover:shadow-purple-400/50 transition-all duration-300"
                >
                  View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
 */}

{/*
        {/* Testimonials 
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
            </div>

            <div className="relative">
              <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 shadow-2xl shadow-cyan-400/20">
                <CardContent className="p-8 md:p-12 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-300 mb-8 italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-cyan-400"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                      <div className="text-gray-400">{testimonials[currentTestimonial].company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 border border-cyan-400 rounded-full p-2 shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 border border-cyan-400 rounded-full p-2 shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Client Logos 
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-white mb-8">Trusted by Leading Companies</h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
                {clients.map((client, index) => (
                  <img
                    key={index}
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    className="h-8 md:h-10 filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
*/}
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl p-1 shadow-2xl shadow-cyan-400/50">
              <div className="bg-black rounded-3xl p-12 border border-gray-800">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Bloom?</h2>
                <p className="text-xl mb-8 text-gray-300">
                  Let's turn your digital dreams into reality. Get started with a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/quote">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold px-8 py-4 text-lg shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/70 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 text-lg bg-transparent shadow-lg shadow-purple-400/30 hover:shadow-purple-400/50 transition-all duration-300"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <Chatbot />
        {showConsultation && <ConsultationBooking onClose={() => setShowConsultation(false)} />}
      </div>
    </div>
  )
}
