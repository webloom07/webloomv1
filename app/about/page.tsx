"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Eye, Award, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

const founders = [
  {
    name: "Shashank",
    role: "Co-Founder & CTO",
    bio: "Technical architect and innovation expert. Shashank leads our development teams and ensures we deliver cutting-edge solutions using the latest technologies.",
    image: "/shashank.jpeg?height=300&width=300",
    skills: ["Full-Stack Development", "System Architecture", "Team Leadership"],
  },
  {
    name: "Prince",
    role: "Co-Founder & CEO",
    bio: "Visionary leader with 8+ years in tech entrepreneurship. Prince drives strategic growth and client relationships, ensuring Webloom stays ahead of industry trends.",
    image: "/prince.jpeg?height=300&width=300",
    skills: ["Strategic Planning", "Business Development", "Client Relations"],
  },
  {
    name: "Rohit",
    role: "Co-Founder & COO",
    bio: "Operations mastermind who ensures seamless project delivery. Rohit manages our talent network and maintains the high-quality standards Webloom is known for.",
    image: "/rohit.jpeg?height=300&width=300",
    skills: ["Project Management", "Quality Assurance", "Operations"],
  },
]

const values = [
  {
    icon: <Target className="h-8 w-8 text-cyan-400" />,
    title: "Excellence",
    description: "We strive for perfection in every project, ensuring our clients receive nothing but the best.",
    color: "cyan",
  },
  {
    icon: <Users className="h-8 w-8 text-purple-400" />,
    title: "Collaboration",
    description: "We believe in the power of teamwork, bringing together diverse talents to create amazing results.",
    color: "purple",
  },
  {
    icon: <Eye className="h-8 w-8 text-pink-400" />,
    title: "Innovation",
    description: "We stay ahead of the curve, constantly exploring new technologies and creative solutions.",
    color: "pink",
  },
  {
    icon: <Award className="h-8 w-8 text-green-400" />,
    title: "Integrity",
    description: "We build trust through transparency, honesty, and delivering on our promises.",
    color: "green",
  },
]

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,255,255,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-2000"></div>
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
                About Webloom
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                We Build, You Bloom
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Founded by three passionate entrepreneurs, Webloom connects exceptional talent with ambitious clients to
                create digital experiences that drive real growth.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/30 shadow-2xl shadow-cyan-400/20 hover:shadow-cyan-400/40 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-cyan-400 mb-4">Our Mission</h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    To democratize access to world-class digital talent and empower businesses of all sizes to achieve
                    their digital transformation goals. We bridge the gap between innovative ideas and exceptional
                    execution.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-sm border border-purple-400/30 shadow-2xl shadow-purple-400/20 hover:shadow-purple-400/40 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-purple-400 mb-4">Our Vision</h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    To become the global leader in connecting businesses with top-tier freelance talent, creating a
                    thriving ecosystem where creativity meets commerce and every project blooms into success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Our Founders</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Three visionaries who came together with a shared dream of transforming the digital landscape through
                exceptional talent and innovative solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {founders.map((founder, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-cyan-400 hover:shadow-cyan-400/50 transform hover:scale-105"
                >
                  <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {founder.name}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-4">{founder.role}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{founder.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {founder.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          className="text-xs bg-purple-500/20 text-purple-400 border border-purple-400/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do and shape our culture
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className={`text-center group hover:shadow-2xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-${value.color}-400/30 hover:shadow-${value.color}-400/50 transform hover:scale-105`}
                >
                  <CardContent className="p-8">
                    <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3
                      className={`text-xl font-semibold mb-3 text-white group-hover:text-${value.color}-400 transition-colors`}
                    >
                      {value.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Webloom?</h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Curated Talent Network",
                  description:
                    "We handpick the top 5% of freelancers and professionals, ensuring you work with only the best talent in the industry.",
                  color: "cyan",
                },
                {
                  title: "End-to-End Solutions",
                  description:
                    "From initial concept to final deployment and ongoing support, we handle every aspect of your digital project.",
                  color: "purple",
                },
                {
                  title: "Agile Methodology",
                  description:
                    "Our proven project management approach ensures timely delivery, transparent communication, and flexibility to adapt to your needs.",
                  color: "pink",
                },
                {
                  title: "Quality Guarantee",
                  description:
                    "We stand behind our work with comprehensive quality assurance processes and ongoing support to ensure your success.",
                  color: "green",
                },
                {
                  title: "Scalable Solutions",
                  description:
                    "Whether you're a startup or enterprise, our solutions grow with your business and adapt to changing requirements.",
                  color: "blue",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-sm border border-${item.color}-400/30 shadow-lg hover:shadow-${item.color}-400/50 transition-all duration-300 transform hover:scale-105`}
                >
                  <CardContent className="p-8">
                    <h3 className={`text-2xl font-semibold text-${item.color}-400 mb-3`}>{item.title}</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <Chatbot />
      </div>
    </div>
  )
}
