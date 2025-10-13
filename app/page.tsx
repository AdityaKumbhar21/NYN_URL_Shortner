"use client"
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'sonner'


const page = () => {
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
      toast.error(error?.response?.data?.message || "Something went wrong")
    }finally{
      setLoading(false)
    }
  }

  const handleCopy = () =>{
    navigator.clipboard.writeText(shortUrl)
    toast.success("Copied to clipboard!")
  }
 return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader>
          <CardTitle className="text-center">Shorten Your URL</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="url">Original URL</Label>
              <Input
                id="url"
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="slug">Custom Slug (optional)</Label>
              <Input
                id="slug"
                placeholder="my-custom-link"
                value={customSlug}
                onChange={(e) => setCustomSlug(e.target.value)}
              />
            </div>

            <Button type="submit" variant="outline" className="w-full" disabled={loading}>
              {loading ? "Generating..." : "Generate"}
            </Button>
          </form>

          {shortUrl && (
            <Card className="mt-6 bg-muted/50">
              <CardContent className="flex justify-between items-center py-4">
                <span className="text-sm font-medium">{shortUrl}</span>
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  Copy
                </Button>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  )
}


export default page