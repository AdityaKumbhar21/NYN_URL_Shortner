"use client"
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import { ArrowLeft, Copy, ExternalLink, TrendingUp, BarChart3, Clock, Share2 } from 'lucide-react';
import Link from 'next/link';

// Recharts imports
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, AreaChart } from "recharts";

interface DailyStats {
  _id: string;
  count: number;
}

interface UserAgentStats {
  _id: string;
  count: number;
}

interface StatsData {
  slug: string;
  url: string;
  totalClicks: number;
  daily: DailyStats[];
  userAgents?: UserAgentStats[];
}

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg shadow-lg p-3">
        <p className="font-semibold text-foreground">{label}</p>
        <p className="text-primary font-medium">
          Clicks: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

const Page = () => {
  const [data, setData] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { slug } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/stats/${slug}`);
        const result = await response.json();

        console.log('API Response:', result); // Debug log

        if (result.success) {
          const statsData = {
            slug: result.slug,
            url: result.url,
            totalClicks: result.totalClicks,
            daily: result.daily || [],
            userAgents: result.userAgents || []
          };
          console.log('Setting data:', statsData); // Debug log
          setData(statsData);
        } else {
          toast.error('Failed to fetch analytics data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const handleCopyAnalyticsLink = () => {
    const analyticsUrl = typeof window !== 'undefined' ? window.location.href : '';
    navigator.clipboard.writeText(analyticsUrl);
    toast.success("Analytics page link copied!");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Card className="max-w-md mx-4">
          <CardContent className="text-center py-12">
            <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">No Data Available</h2>
            <p className="text-muted-foreground mb-6">
              We couldn't find analytics for this short link.
            </p>
            <Button onClick={() => router.push('/')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const shortUrl = typeof window !== 'undefined' ? `${window.location.origin}/${data.slug}` : `/${data.slug}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">Link Analytics</h1>
              <p className="text-muted-foreground">Detailed insights for your shortened URL</p>
            </div>
            <Button variant="outline" onClick={handleCopyAnalyticsLink} className="w-full sm:w-auto">
              <Share2 className="w-4 h-4 mr-2" />
              Share Analytics Page
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Short URL Card */}
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Short URL</p>
                  <p className="font-mono font-semibold text-primary break-all">/{data.slug}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1" onClick={() => handleCopy(shortUrl)}>
                  <Copy className="w-4 h-4 mr-1" />
                  Copy
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Total Clicks Card */}
          <Card className="border-2 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Total Clicks</p>
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <p className="text-4xl font-bold text-primary">{data.totalClicks}</p>
              <p className="text-xs text-muted-foreground mt-2">All time</p>
            </CardContent>
          </Card>

          {/* Days Active Card */}
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Days Active</p>
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <p className="text-4xl font-bold">{data.daily.length}</p>
              <p className="text-xs text-muted-foreground mt-2">With recorded clicks</p>
            </CardContent>
          </Card>
        </div>

        {/* Original URL Card */}
        <Card className="mb-8 border-2">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div className="flex-1 mr-4">
                <p className="text-sm text-muted-foreground mb-2">Original URL</p>
                <p className="font-medium break-all">{data.url}</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => handleCopy(data.url)}>
                <Copy className="w-4 h-4 mr-1" />
                Copy
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Charts Section */}
        <div className="grid grid-cols-1 gap-8">
          {/* Daily Clicks Area Chart */}
          {data.daily.length > 0 ? (
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                  Daily Click Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={data.daily} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="_id" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickLine={false}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="count" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      fill="url(#colorClicks)"
                      name="Clicks"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-2">
              <CardContent className="text-center py-12">
                <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Click Data Yet</h3>
                <p className="text-muted-foreground">
                  Start sharing your link to see analytics appear here!
                </p>
              </CardContent>
            </Card>
          )}

          {/* User Agent Stats Bar Chart */}
          {data.userAgents && data.userAgents.length > 0 && (
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                  Top User Agents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={data.userAgents.slice(0, 10)} margin={{ top: 10, right: 30, left: 0, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="_id" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={11}
                      angle={-45}
                      textAnchor="end"
                      height={100}
                      tickLine={false}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar 
                      dataKey="count" 
                      fill="hsl(var(--primary))"
                      radius={[8, 8, 0, 0]}
                      name="Clicks"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Daily Stats Table */}
        {data.daily.length > 0 && (
          <Card className="mt-8 border-2">
            <CardHeader>
              <CardTitle>Daily Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Date</th>
                      <th className="text-right py-3 px-4 font-semibold">Clicks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.daily.map((day, index) => (
                      <tr key={day._id} className={index % 2 === 0 ? 'bg-muted/30' : ''}>
                        <td className="py-3 px-4">{day._id}</td>
                        <td className="py-3 px-4 text-right font-semibold text-primary">{day.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export default Page;
