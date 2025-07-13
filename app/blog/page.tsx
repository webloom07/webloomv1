"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Zap, ArrowRight, User } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import { subscribeToNewsletter } from "@/lib/database"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development.",
    content:
      "From AI-powered development tools to serverless architectures, discover what's next in web development...",
    author: "Prince Kumar",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "AI", "Serverless", "Web3"],
    color: "cyan",
  },
  {
    id: 2,
    title: "UI/UX Design Principles That Drive Conversions",
    excerpt: "Learn how to create user interfaces that not only look great but also convert visitors into customers.",
    content:
      "Understanding user psychology and applying proven design principles can dramatically improve your conversion rates...",
    author: "Shashank Sharma",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Design",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["UI/UX", "Conversion", "Psychology", "Design"],
    color: "purple",
  },
  {
    id: 3,
    title: "Mobile-First Development: Why It Matters More Than Ever",
    excerpt: "With mobile traffic dominating the web, mobile-first development isn't just a trend—it's a necessity.",
    content:
      "Statistics show that over 60% of web traffic comes from mobile devices. Here's how to optimize for mobile...",
    author: "Rohit Patel",
    date: "2024-01-05",
    readTime: "5 min read",
    category: "Mobile Development",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Mobile", "Responsive", "Performance", "UX"],
    color: "pink",
  },
  {
    id: 4,
    title: "SEO in 2024: Advanced Strategies for Better Rankings",
    excerpt: "Stay ahead of the competition with these advanced SEO techniques and algorithm updates.",
    content: "Search engines are constantly evolving. Here are the latest SEO strategies that actually work...",
    author: "Prince Kumar",
    date: "2023-12-28",
    readTime: "10 min read",
    category: "SEO",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["SEO", "Google", "Rankings", "Content"],
    color: "green",
  },
  {
    id: 5,
    title: "Building Scalable Applications with Modern Architecture",
    excerpt: "Learn how to design and build applications that can handle millions of users without breaking a sweat.",
    content: "Scalability is crucial for growing businesses. Here's how to architect applications for scale...",
    author: "Shashank Sharma",
    date: "2023-12-20",
    readTime: "12 min read",
    category: "Architecture",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Scalability", "Architecture", "Performance", "Cloud"],
    color: "blue",
  },
  {
    id: 6,
    title: "The Art of Digital Branding in the Modern Era",
    excerpt: "Discover how to create a compelling digital brand that resonates with your target audience.",
    content:
      "Digital branding goes beyond just a logo. It's about creating a cohesive experience across all touchpoints...",
    author: "Rohit Patel",
    date: "2023-12-15",
    readTime: "7 min read",
    category: "Branding",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Branding", "Marketing", "Identity", "Strategy"],
    color: "yellow",
  },
]

const categories = ["All", "Web Development", "Design", "Mobile Development", "SEO", "Architecture", "Branding"]

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(blogPosts)
    } else {
      setFilteredPosts(blogPosts.filter((post) => post.category === selectedCategory))
    }
  }, [selectedCategory])

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail) return

    setIsSubscribing(true)
    try {
      await subscribeToNewsletter(newsletterEmail)
      alert("Successfully subscribed to our newsletter!")
      setNewsletterEmail("")
    } catch (error) {
      console.error("Error subscribing to newsletter:", error)
      alert("Sorry, there was an error subscribing. Please try again.")
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,215,0,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/5 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/5 left-2/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-2000"></div>
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
                Blog & Insights
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Digital Insights & Trends
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Stay ahead of the curve with our latest thoughts on web development, design, and digital innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold border border-cyan-400 shadow-lg shadow-cyan-400/50"
                      : "bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-cyan-400 hover:text-cyan-400"
                  } transition-all duration-300`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Featured Article</h2>
              </div>
              <Card
                className={`overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-${filteredPosts[0].color}-400/30 shadow-2xl hover:shadow-${filteredPosts[0].color}-400/50 transition-all duration-300 transform hover:scale-105`}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                    <img
                      src={filteredPosts[0].image || "/placeholder.svg"}
                      alt={filteredPosts[0].title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge
                        className={`bg-${filteredPosts[0].color}-500/20 text-${filteredPosts[0].color}-400 border border-${filteredPosts[0].color}-400/30`}
                      >
                        {filteredPosts[0].category}
                      </Badge>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(filteredPosts[0].date).toLocaleDateString()}
                      </div>
                      <div className="text-gray-400 text-sm">{filteredPosts[0].readTime}</div>
                    </div>
                    <h3
                      className={`text-2xl lg:text-3xl font-bold text-white mb-4 hover:text-${filteredPosts[0].color}-400 transition-colors`}
                    >
                      {filteredPosts[0].title}
                    </h3>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">{filteredPosts[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-400 text-sm">{filteredPosts[0].author}</span>
                      </div>
                      <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/70 transition-all duration-300 transform hover:scale-105">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Latest Articles</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover insights, tutorials, and industry trends from our team of experts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <Card
                  key={post.id}
                  className={`group hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-${post.color}-400/30 hover:shadow-${post.color}-400/50 transform hover:scale-105`}
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge
                        className={`bg-${post.color}-500/20 text-${post.color}-400 border border-${post.color}-400/30 text-xs`}
                      >
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <h3
                      className={`text-xl font-bold text-white mb-3 group-hover:text-${post.color}-400 transition-colors line-clamp-2`}
                    >
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs border-gray-600 text-gray-400">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-3 w-3 text-gray-400 mr-1" />
                        <span className="text-gray-400 text-xs">{post.author}</span>
                      </div>
                      <div className="text-gray-400 text-xs">{post.readTime}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">No articles found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl p-1 shadow-2xl shadow-cyan-400/50">
              <div className="bg-black rounded-3xl p-12 border border-gray-800">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Stay Updated</h2>
                <p className="text-xl mb-8 text-gray-300">
                  Subscribe to our newsletter and never miss the latest insights, tutorials, and industry trends.
                </p>
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
                >
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                  />
                  <Button
                    type="submit"
                    disabled={isSubscribing}
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold px-6 py-3 shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/70 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                  >
                    {isSubscribing ? "Subscribing..." : "Subscribe"}
                  </Button>
                </form>
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
