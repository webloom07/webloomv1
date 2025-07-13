import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Zap } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold text-xl px-3 py-1 rounded-lg inline-block mb-4 border border-cyan-400 shadow-lg shadow-cyan-400/50">
              <Zap className="inline w-4 h-4 mr-1" />
              Webloom
            </div>
            <p className="text-gray-400 mb-4">
              We Build, You Bloom. Transforming digital visions into reality through innovative solutions and
              exceptional talent.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-gray-500 hover:text-cyan-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-gray-500 hover:text-cyan-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-gray-500 hover:text-cyan-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-gray-500 hover:text-cyan-400 cursor-pointer transition-colors" />
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-gray-400 hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Web Development</span>
              </li>
              <li>
                <span className="text-gray-400">UI/UX Design</span>
              </li>
              <li>
                <span className="text-gray-400">Sales and advertising</span>
              </li>
              <li>
                <span className="text-gray-400">Marketing</span>
              </li>
              <li>
                <span className="text-gray-400">Branding</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-cyan-400" />
                <span className="text-gray-400">webloompvtltd@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-cyan-400" />
                <span className="text-gray-400">+91 91345 15390</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-cyan-400" />
                <span className="text-gray-400">Chennai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">© 2025 Webloom. All rights reserved. Founded by Prince, Shashank, and Rohit.</p>
        </div>
      </div>
    </footer>
  )
}
