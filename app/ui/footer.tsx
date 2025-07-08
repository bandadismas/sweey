import Link from "next/link"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Exclusive Section */}
          <div className="lg:col-span-1">
            <Link href={'/'}><h3 className="text-2xl font-semibold mb-4">Sweey</h3></Link>
            <h4 className="text-lg mb-3">Subscribe</h4>
            <p className="text-sm text-gray-300 mb-4">Get 10% off your first order</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-white text-white placeholder:text-gray-400 rounded-r-none"
              />
              <button
                // size="icon"
                className="bg-transparent hover:bg-white hover:text-black rounded-l-none"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>111 Lusaka, Zambia,</p>
              {/* <p>DH 1515, Bangladesh.</p> */}
              <p>info@sweey.com</p>
              <p>+260-0000-0000</p>
            </div>
          </div>

          {/* Account Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Account</h3>
            <nav className="space-y-2">
              <Link href="/user/account" className="block text-sm text-gray-300 hover:text-white transition-colors">
                My Account
              </Link>
              <Link href="/user/login" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Login / Register
              </Link>
              <Link href="/cart" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Cart
              </Link>
              <Link href="/wishlist" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Wishlist
              </Link>
            </nav>
          </div>

          {/* Quick Link Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
            <nav className="space-y-2">
              <Link href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Terms Of Use
              </Link>
              <Link href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Download App Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Download App</h3>
            <p className="text-xs text-gray-400 mb-3">Save $3 with App. New Users Only</p>

            <div className="flex gap-2 mb-4">
              {/* QR Code placeholder */}
              <div className="w-20 h-20 bg-white rounded flex items-center justify-center">
                <div className="w-16 h-16 bg-black rounded grid grid-cols-4 gap-px p-1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className={`bg-white ${Math.random() > 0.5 ? "opacity-100" : "opacity-0"}`} />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {/* Google Play Store */}
                <Link href="#" className="block">
                  <div className="bg-black border border-gray-600 rounded px-3 py-1 flex items-center gap-2 hover:bg-gray-900 transition-colors">
                    <div className="text-xs">
                      <div className="text-gray-400 text-[10px]">GET IT ON</div>
                      <div className="text-white font-semibold">Google Play</div>
                    </div>
                  </div>
                </Link>

                {/* App Store */}
                <Link href="#" className="block">
                  <div className="bg-black border border-gray-600 rounded px-3 py-1 flex items-center gap-2 hover:bg-gray-900 transition-colors">
                    <div className="text-xs">
                      <div className="text-gray-400 text-[10px]">Download on the</div>
                      <div className="text-white font-semibold">App Store</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-sm text-gray-500">© Copyright Rimel {new Date().getFullYear()}. All right reserved</p>
        </div>
      </div>
    </footer>
  )
}
