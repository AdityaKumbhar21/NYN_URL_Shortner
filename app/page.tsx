"use client"
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'sonner'
import { BarChart3, Zap, Shield, TrendingUp, Link2, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

const Page = () => {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [customSlug, setCustomSlug] = useState("")

  const handleSubmit = async(e: React.FormEvent) =>{
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post("/api/shorten", {
        url,customSlug
      })

      if(!res.data.success){
        toast.error(res.data.message)
      }
      setShortUrl(res.data.shortUrl)
      toast.success(res.data.message)
    } catch (error: any) {
      console.log("Error: ", error);
      
      toast.error(error?.response?.data?.message || "Something went wrong")
    }finally{
      setLoading(false)
    }
  }

  const handleCopy = () =>{
    navigator.clipboard.writeText(shortUrl)
    toast.success("Copied to clipboard!")
  }

  const handleViewStats = () => {
    if (shortUrl) {
      const slug = shortUrl.split('/').pop()
      window.open(`/${slug}/stats`, '_blank')
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Free Analytics Included
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Not Your Normal URL Shortener
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Shorten links and get powerful analytics - all for <span className="font-bold text-primary">free</span>. 
            Track clicks, monitor trends, and understand your audience like never before.
          </p>
        </div>

        {/* URL Shortener Card */}
        <div id="shorten" className="max-w-2xl mx-auto mt-12">
          <Card className="shadow-xl border-2">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Shorten Your URL</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="url" className="text-base">Original URL</Label>
                  <Input
                    id="url"
                    type="url"
                    placeholder="https://example.com/your-very-long-url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                    className="mt-2 h-12 text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="slug" className="text-base">Custom Slug (optional)</Label>
                  <Input
                    id="slug"
                    placeholder="my-custom-link"
                    value={customSlug}
                    onChange={(e) => setCustomSlug(e.target.value)}
                    className="mt-2 h-12 text-base"
                  />
                </div>

                <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={loading}>
                  {loading ? "Generating..." : "Shorten URL"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>

              {shortUrl && (
                <Card className="mt-6 bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-muted-foreground">Your shortened URL:</span>
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-lg font-semibold text-primary truncate">{shortUrl}</span>
                      <Button variant="outline" size="sm" onClick={handleCopy}>
                        Copy
                      </Button>
                    </div>
                    <Button variant="secondary" size="sm" className="w-full" onClick={handleViewStats}>
                      <BarChart3 className="w-4 h-4 mr-2" />
                      View Analytics
                    </Button>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose NYNURL?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just another URL shortener. We provide professional-grade analytics for free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Detailed Analytics</h3>
                <p className="text-muted-foreground">
                  Track every click with comprehensive analytics. See daily trends, user agents, and geographic data - all in real-time.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Ultra-fast redirects with minimal latency. Your users won't even notice they're being redirected.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Slugs</h3>
                <p className="text-muted-foreground">
                  Create memorable, branded short links. Use custom slugs to maintain your brand identity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Paste Your URL</h3>
              <p className="text-muted-foreground">
                Enter your long URL and optionally add a custom slug
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Get Short Link</h3>
              <p className="text-muted-foreground">
                Instantly receive your shortened URL ready to share
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Track Analytics</h3>
              <p className="text-muted-foreground">
                Monitor clicks and analyze user behavior with detailed charts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need, completely free
            </p>
          </div>

          <Card className="max-w-md mx-auto border-2 border-primary shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="text-primary font-semibold mb-2">FREE FOREVER</div>
              <CardTitle className="text-4xl font-bold mb-2">$0</CardTitle>
              <p className="text-muted-foreground">No credit card required</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>Unlimited URL shortening</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>Detailed analytics & charts</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>Custom slugs</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>Real-time click tracking</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>No expiration dates</span>
                </li>
              </ul>
              <Button className="w-full h-12 text-base font-semibold" asChild>
                <Link href="#shorten">
                  Get Started Free
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-primary-foreground border-0 shadow-2xl">
            <CardContent className="text-center py-16 px-4">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of users who trust NYNURL for their link shortening and analytics needs.
              </p>
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold" asChild>
                <Link href="#shorten">
                  Create Your First Short Link
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Page