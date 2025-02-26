/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { Facebook, Instagram, Send, Phone, Mail, MapPin } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<{
    message: string;
    type: 'success' | 'error' | null;
  }>({ message: '', type: null })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ message: 'Sending...', type: null })

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (!response.ok) throw new Error(data.error)

      setStatus({ message: data.message, type: 'success' })
      setEmail("")
    } catch (error) {
      setStatus({
        message: 'Failed to subscribe. Please try again.',
        type: 'error'
      })
    }
  }

  return (
    <footer className="bg-customLightGreen">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 text-[20px] lg:grid-cols-2 xl:grid-cols-4 gap-8">


          {/* About PGTC Section */}
          <div className="space-y-4">
            <h3 className="text-customGreen font-semibold text-xl">About PGTC</h3>
            <ul className="md:space-y-2 text-[#393939] grid grid-cols-2 lg:grid-cols-1">
              {[
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
                { name: "Home", href: "/" },
                { name: "Privacy Policy", href: "/privacy" },
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="hover:text-customGreen transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking Policy Section */}
          <div className="space-y-4">
            <h3 className="text-customGreen font-semibold text-xl">Golf Locations</h3>
            <ul className="md:space-y-2 text-[#393939] grid grid-cols-2 lg:grid-cols-1">
              {[
                { name: "Colombo", href: "/locations/colombo-gc" },
                { name: "Kandy", href: "/locations/victoria-gc" },
                { name: "Nuwara Eliya", href: "/locations/nuwaraeliya-gc" },
                { name: "Hambantota", href: "/locations/shangrila-gr" },
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="hover:text-customGreen transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-customGreen font-semibold text-xl">Contact Us</h3>
            <ul className="space-y-2 text-customGray">
              {[
                { icon: <Phone fill='#F8EBC6' className="h-[12px] w-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-customBeige" />, text: "+94 773 938 932" },
                { icon: <Mail className="h-[12px] w-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-customBeige" />, text: "info@paradisegolftours.com" },
                { icon: <MapPin className="h-[12px] w-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-customBeige" />, text: "Colombo/Sri Lanka" },
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className='w-[22px] h-[22px] rounded-full bg-customGreen relative '>{item.icon}</div>
                  <span className="text-[#393939]">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="flex space-x-2 pt-4">
              <SocialLink href="#" icon={<Facebook className="w-4 h-4" />} />
              <SocialLink href="#" icon={<Instagram className="w-4 h-4" />} />
              <SocialLink href="#" icon={
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              } />
            </div>
          </div>

          {/* Logo and Description Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="lg:h-24 w-12 h-12 rounded-lg lg:w-20 bg-white overflow-hidden">
                <Image
                  src="/logo12.png"
                  width={300}
                  height={300}
                  alt="Paradise Golf Tours Logo"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
            <p className="text-[#393939] text-[20px]">
              Subscribe for travel tips, exclusive offers, discounts, and destination inspiration straight to your inbox!
            </p>
            <div className="space-y-2">
              <h3 className="text-customGreen font-semibold">Subscribe Us</h3>
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Send your Email"
                    className="flex-1 px-4 py-2 bg-white text-customGray placeholder-customGray rounded-l-md focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-customGreen text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                {status.message && (
                  <p className={`text-sm ${status.type === 'success' ? 'text-green-600' :
                      status.type === 'error' ? 'text-red-600' :
                        'text-gray-600'
                    }`}>
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-customGreen text-white py-4">
        <div className="container mx-auto flex justify-between px-4 text-center">
          <p>Copyrights @semantixlabs</p>
          <p>2025 All right reserved </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="w-8 h-8 flex items-center justify-center rounded-[6px] bg-customGreen text-white hover:bg-opacity-90 shadow-xl transition-colors"
    >
      {icon}
    </Link>
  )
}

