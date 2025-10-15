"use client"
import Link from 'next/link'
import { Button } from './ui/button'
import { BarChart3, Link2 } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground">
              <Link2 className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">
              Not Your Normal URL Shortener
            </span>
            <span className="font-bold text-xl sm:hidden">
              NYNURL
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button variant="default" size="sm" className="font-semibold" asChild>
              <Link href="#shorten">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
