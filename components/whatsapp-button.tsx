"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "+919045876777" // MayFair Fitness phone number, 264, Dohra Road, near alice green lawn, Suresh Sharma Nagar, Bareilly, Uttar Pradesh 243006
  const message = "Hi! I'm interested in joining MayFair Fitness at 264, Dohra Road, near alice green lawn, Suresh Sharma Nagar, Bareilly, Uttar Pradesh 243006. Can you provide more information?"

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  )
}
