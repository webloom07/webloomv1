"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Palette, Smartphone, Search, Megaphone, Settings, Zap } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

const services = [
  {
    icon: <Globe className="h-12 w-12 text-cyan-400" />,
    title: "Website Development",
    description: "Custom websites that convert visitors into customers",
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "CMS Integration",
      "Performance Optimization",
      "SEO-Ready Structure",
    ],
    technologies: ["React", "Next.js", "WordPress", "Shopify"],
    startingPrice: "₹ 19,999",
    color: "cyan",
  },
  {
    icon: <Palette className="h-12 w-12 text-purple-400" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that users love",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
    startingPrice: "₹ 9,999",
    color: "purple",
  },
  {
    icon: <Smartphone className="h-12 w-12 text-pink-400" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
    features: [
      "iOS & Android Apps",
      "Cross-platform Solutions",
      "App Store Optimization",
      "Push Notifications",
      "Analytics Integration",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    startingPrice: "₹ 24,999",
    color: "pink",
  },
  {
    icon: <Search className="h-12 w-12 text-green-400" />,
    title: "SEO Optimization",
    description: "Boost your search rankings and organic traffic",
    features: ["Keyword Research", "On-page Optimization", "Technical SEO", "Content Strategy", "Performance Tracking"],
    technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Search Console"],
    startingPrice: "₹ 9,999",
    color: "green",
  },
  {
    icon: <Megaphone className="h-12 w-12 text-yellow-400" />,
    title: "Branding & Marketing",
    description: "Build a strong brand that stands out",
    features: [
      "Brand Identity Design",
      "Marketing Strategy",
      "Social Media Management",
      "Content Creation",
      "Campaign Management",
    ],
    technologies: ["Adobe Creative Suite", "Canva", "Hootsuite", "Mailchimp"],
    startingPrice: "₹ 9,999",
    color: "yellow",
  },
  {
    icon: <Settings className="h-12 w-12 text-blue-400" />,
    title: "Custom Software Solutions",
    description: "Tailored software solutions for your business",
    features: ["Custom Development", "API Integration", "Database Design", "Cloud Solutions", "Maintenance & Support"],
    technologies: ["Node.js", "Python", "AWS", "Docker"],
    startingPrice: "₹ 49,999",
    color: "blue",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start by understanding your business goals, target audience, and project requirements through detailed consultation.",
    color: "cyan",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "Our team develops a comprehensive strategy and project roadmap tailored to your specific needs and objectives.",
    color: "purple",
  },
  {
    step: "03",
    title: "Design",
    description:
      "We create stunning designs and prototypes that align with your brand and provide exceptional user experience.",
    color: "pink",
  },
  {
    step: "04",
    title: "Development",
    description: "Our expert developers bring the designs to life using cutting-edge technologies and best practices.",
    color: "green",
  },
  {
    step: "05",
    title: "Testing",
    description:
      "Rigorous testing ensures your solution is bug-free, secure, and performs optimally across all devices.",
    color: "yellow",
  },
  {
    step: "06",
    title: "Launch",
    description: "We handle the deployment and launch, ensuring everything runs smoothly from day one.",
    color: "blue",
  },
]

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-2000"></div>
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
                Our Services
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Digital Solutions That Drive Growth
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                From concept to launch, we provide comprehensive digital services that help your business thrive in the
                modern world.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-${service.color}-400/30 hover:shadow-${service.color}-400/50 transform hover:scale-105`}
                >
                  <CardContent className="p-8">
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <h3
                      className={`text-2xl font-bold text-white mb-3 group-hover:text-${service.color}-400 transition-colors`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                            <div className={`w-1.5 h-1.5 bg-${service.color}-400 rounded-full mr-2`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            className={`text-xs bg-${service.color}-500/20 text-${service.color}-400 border border-${service.color}-400/30`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-400">Starting at</span>
                        <div className={`text-2xl font-bold text-${service.color}-400`}>{service.startingPrice}</div>
                      </div>
                      <Link href="/quote">
                        <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/70 transition-all duration-300 transform hover:scale-105">
                          Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery every time
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <Card
                  key={index}
                  className={`relative group hover:shadow-2xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-${step.color}-400/30 hover:shadow-${step.color}-400/50 transform hover:scale-105`}
                >
                  <CardContent className="p-8">
                    <div
                      className={`text-4xl font-bold text-${step.color}-400/30 mb-4 group-hover:text-${step.color}-400/50 transition-colors`}
                    >
                      {step.step}
                    </div>
                    <h3
                      className={`text-xl font-semibold text-white mb-3 group-hover:text-${step.color}-400 transition-colors`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{step.description}</p>
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Get Started?</h2>
                <p className="text-xl mb-8 text-gray-300">
                  Let's discuss your project and create a custom solution that fits your needs and budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/quote">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold px-8 py-4 text-lg shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/70 transition-all duration-300 transform hover:scale-105"
                    >
                      Request Quote <ArrowRight className="ml-2 h-5 w-5" />
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
