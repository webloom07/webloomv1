"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight, TrendingUp, Users, Globe, Zap } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    client: "RetailPro",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Complete redesign and development of a modern e-commerce platform with improved user experience and mobile optimization.",
    results: ["300% increase in online sales", "50% reduction in bounce rate", "40% improvement in page load speed"],
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    testimonial:
      "Webloom transformed our online presence completely. The new platform is not only beautiful but also incredibly functional.",
    clientLogo: "/placeholder.svg?height=40&width=120",
    color: "cyan",
  },
  {
    id: 2,
    title: "Mobile Fitness App",
    client: "FitTracker",
    category: "Mobile App",
    image: "/placeholder.svg?height=400&width=600",
    description: "Native mobile app for fitness tracking with social features, workout plans, and progress analytics.",
    results: ["50K+ downloads in 3 months", "4.8 star rating on app stores", "85% user retention rate"],
    technologies: ["React Native", "Firebase", "Redux", "Stripe"],
    testimonial: "The app exceeded our expectations. Users love the intuitive design and powerful features.",
    clientLogo: "/placeholder.svg?height=40&width=120",
    color: "purple",
  },
  {
    id: 3,
    title: "Brand Identity & Website",
    client: "GreenTech Solutions",
    category: "Branding",
    image: "/placeholder.svg?height=400&width=600",
    description: "Complete brand identity design and corporate website for a sustainable technology startup.",
    results: [
      "200% boost in brand recognition",
      "150% increase in lead generation",
      "90% improvement in brand perception",
    ],
    technologies: ["WordPress", "Adobe Creative Suite", "SEO"],
    testimonial: "Webloom helped us establish a strong brand presence that truly represents our values and mission.",
    clientLogo: "/placeholder.svg?height=40&width=120",
    color: "pink",
  },
  {
    id: 4,
    title: "SaaS Dashboard Platform",
    client: "DataInsights Pro",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
    description: "Complex data visualization dashboard with real-time analytics and customizable reporting features.",
    results: [
      "60% increase in user engagement",
      "45% reduction in support tickets",
      "35% improvement in user onboarding",
    ],
    technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    testimonial:
      "The dashboard is exactly what we needed. Our users can now easily understand their data and make informed decisions.",
    clientLogo: "/placeholder.svg?height=40&width=120",
    color: "green",
  },
  {
    id: 5,
    title: "Restaurant Chain Website",
    client: "Taste Buds",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Multi-location restaurant website with online ordering, reservation system, and loyalty program integration.",
    results: ["400% increase in online orders", "250% boost in table reservations", "180% growth in loyalty signups"],
    technologies: ["Next.js", "Tailwind CSS", "Sanity CMS", "Stripe"],
    testimonial:
      "Our online presence has never been stronger. The website perfectly captures our brand and drives real business results.",
    clientLogo: "/placeholder.svg?height=40&width=120",
    color: "yellow",
  },
  {
    id: 6,
    title: "Educational Platform",
    client: "LearnSmart",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Interactive online learning platform with video courses, quizzes, and progress tracking for students and educators.",
    results: ["10K+ active students", "95% course completion rate", "4.9 star average rating"],
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    testimonial:
      "The platform has revolutionized how we deliver education. Both students and teachers love the user experience.",
    clientLogo: "/placeholder.svg?height=40&width=120",
    color: "blue",
  },
]

const clientLogos = [
  { name: "RetailPro", logo: "/placeholder.svg?height=40&width=120" },
  { name: "FitTracker", logo: "/placeholder.svg?height=40&width=120" },
  { name: "GreenTech", logo: "/placeholder.svg?height=40&width=120" },
  { name: "DataInsights", logo: "/placeholder.svg?height=40&width=120" },
  { name: "TasteBuds", logo: "/placeholder.svg?height=40&width=120" },
  { name: "LearnSmart", logo: "/placeholder.svg?height=40&width=120" },
  { name: "TechStart", logo: "/placeholder.svg?height=40&width=120" },
  { name: "InnovateLab", logo: "/placeholder.svg?height=40&width=120" },
]

const stats = [
  { number: "150+", label: "Projects Completed", icon: <Globe className="h-8 w-8 text-cyan-400" />, color: "cyan" },
  { number: "50+", label: "Happy Clients", icon: <Users className="h-8 w-8 text-purple-400" />, color: "purple" },
  { number: "98%", label: "Success Rate", icon: <TrendingUp className="h-8 w-8 text-green-400" />, color: "green" },
  { number: "4.9", label: "Average Rating", icon: <Star className="h-8 w-8 text-yellow-400" />, color: "yellow" },
]

export default function ClientsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/6 right-1/6 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/5 left-1/6 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/6 right-2/5 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-2000"></div>
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
                Our Work
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Success Stories That Inspire
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Discover how we've helped businesses transform their digital presence and achieve remarkable growth
                through innovative solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className={`text-center bg-gray-900/50 backdrop-blur-sm border border-${stat.color}-400/30 shadow-lg hover:shadow-${stat.color}-400/50 transition-all duration-300 transform hover:scale-105`}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-3">{stat.icon}</div>
                    <div className={`text-3xl font-bold text-${stat.color}-400 mb-1`}>{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Real projects, real results. See how we've helped our clients achieve their goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {portfolioItems.map((item) => (
                <Card
                  key={item.id}
                  className={`group hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-${item.color}-400/30 hover:shadow-${item.color}-400/50 transform hover:scale-105`}
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge
                        className={`bg-${item.color}-500/20 text-${item.color}-400 border border-${item.color}-400/30`}
                      >
                        {item.category}
                      </Badge>
                      <img
                        src={item.clientLogo || "/placeholder.svg"}
                        alt={item.client}
                        className="h-6 filter brightness-0 invert opacity-60"
                      />
                    </div>

                    <h3
                      className={`text-2xl font-bold text-white mb-2 group-hover:text-${item.color}-400 transition-colors`}
                    >
                      {item.title}
                    </h3>
                    <p className={`text-${item.color}-400 font-semibold mb-4`}>Client: {item.client}</p>
                    <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors">{item.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {item.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="text-sm text-gray-300 flex items-center">
                            <TrendingUp className={`h-4 w-4 text-${item.color}-400 mr-2`} />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs border-gray-600 text-gray-400">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <blockquote className={`border-l-4 border-${item.color}-400 pl-4 italic text-gray-300 mb-6`}>
                      "{item.testimonial}"
                    </blockquote>

                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">5.0 rating</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-white mb-8">Trusted by Leading Companies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
                {clientLogos.map((client, index) => (
                  <div key={index} className="flex justify-center">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      className="h-8 md:h-10 max-w-full filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  company: "RetailPro",
                  content:
                    "Webloom didn't just build us a website; they built us a growth engine. Our online sales have tripled since the launch.",
                  rating: 5,
                  image: "/placeholder.svg?height=60&width=60",
                  color: "cyan",
                },
                {
                  name: "Michael Chen",
                  company: "FitTracker",
                  content:
                    "The mobile app they developed for us is incredible. The user experience is seamless and our retention rates are through the roof.",
                  rating: 5,
                  image: "/placeholder.svg?height=60&width=60",
                  color: "purple",
                },
                {
                  name: "Emily Rodriguez",
                  company: "GreenTech Solutions",
                  content:
                    "From branding to website development, Webloom understood our vision and brought it to life perfectly. Highly recommended!",
                  rating: 5,
                  image: "/placeholder.svg?height=60&width=60",
                  color: "pink",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-sm border border-${testimonial.color}-400/30 shadow-xl hover:shadow-${testimonial.color}-400/50 transition-all duration-300 transform hover:scale-105`}
                >
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-300 mb-6 italic">"{testimonial.content}"</blockquote>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className={`w-12 h-12 rounded-full mr-4 border-2 border-${testimonial.color}-400`}
                      />
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-gray-400 text-sm">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl p-1 shadow-2xl shadow-cyan-400/50">
              <div className="bg-black rounded-3xl p-12 border border-gray-800">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Join Our Success Stories?</h2>
                <p className="text-xl mb-8 text-gray-300">
                  Let's create something amazing together. Your success story could be next.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/quote">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold px-8 py-4 text-lg shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/70 transition-all duration-300 transform hover:scale-105"
                    >
                      Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 text-lg bg-transparent shadow-lg shadow-purple-400/30 hover:shadow-purple-400/50 transition-all duration-300"
                    >
                      Schedule Consultation
                    </Button>
                  </Link>
                </div>
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
