"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Zap } from "lucide-react"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Bloom, your AI assistant. How can I help you explore our digital universe today? ⚡",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes("service") || lowerInput.includes("what do you do")) {
      return "We offer cutting-edge web development, UI/UX design, mobile app development, SEO optimization, branding, and custom software solutions. Which service sparks your interest? ⚡"
    } else if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("quote")) {
      return "Our pricing is tailored to each project's unique requirements. I'd recommend getting a personalized quote through our advanced project analyzer. Shall I guide you there? 🚀"
    } else if (lowerInput.includes("job") || lowerInput.includes("career") || lowerInput.includes("hire")) {
      return "Excellent! We're building a team of digital pioneers - freelancers, interns, and full-time innovators. Check out our careers portal to join our mission! 🌟"
    } else if (lowerInput.includes("contact") || lowerInput.includes("reach")) {
      return "Connect with us at hello@webloom.com or +1 (555) 123-4567. You can also schedule a consultation through our quantum booking system. How would you prefer to connect? 📡"
    } else if (lowerInput.includes("time") || lowerInput.includes("how long")) {
      return "Project timelines vary based on complexity. Simple websites: 2-4 weeks, complex applications: 2-6 months. What type of digital experience are you envisioning? ⏱️"
    } else {
      return "Thanks for reaching out! For detailed information about our services or to discuss your project, I'd recommend connecting with our human experts. Would you like me to set up a consultation? 🤖"
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black rounded-full p-4 shadow-2xl shadow-cyan-400/50 hover:shadow-cyan-400/70 transition-all duration-300 transform hover:scale-110 border border-cyan-400"
        size="lg"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 h-96 shadow-2xl bg-gray-900 border border-cyan-400/30 shadow-cyan-400/20">
          <CardHeader className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-t-lg border-b border-gray-700 flex items-center justify-between relative">
            <CardTitle className="text-lg flex items-center">
              <Zap className="w-5 h-5 mr-2 text-cyan-400" />
              Chat with Bloom ⚡
            </CardTitle>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-white hover:bg-red-500 text-gray-800 hover:text-white transition-colors duration-200 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-full bg-gray-900">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.isBot
                        ? "bg-gray-800 text-gray-200 border border-cyan-400/30"
                        : "bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-medium"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700 bg-gray-800">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black shadow-lg shadow-cyan-400/50"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
