"use client"
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

interface DailyStats{
    _id: string;
    count: number;
}


interface StatsData{
    slug: string;
    url: string;
    totalClicks: number;
    daily: DailyStats[];
}
const page = ({ params }: { params: { slug: string } }) => {
    const [data, setData] = useState<StatsData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/stats/${params.slug}`);
                const result = await response.json();
                
                if(result.success){
                    setData(result.data);
                } else {
                    toast.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [params.slug]);

    const handleCopy = () => {
    if (!data) return;
    navigator.clipboard.writeText(data.url);
    toast.success("Copied original URL to clipboard!");
  };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>No data available</div>;
    }
  return (
    <div className="flex justify-center items-start min-h-screen p-4">
      <Card className="w-full max-w-md shadow-md mt-6">
        <CardHeader>
          <CardTitle className="text-center">Analytics for /{data.slug}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <p className="font-medium">Original URL:</p>
            <div className="flex justify-between items-center mt-1">
              <span className="truncate">{data.url}</span>
              <Button variant="outline" size="sm" onClick={handleCopy}>
                Copy
              </Button>
            </div>
          </div>

          <div className="mb-4">
            <p className="font-medium">Total Clicks: {data.totalClicks}</p>
          </div>

          <div>
            <p className="font-medium mb-2">Daily Clicks:</p>
            <ul className="space-y-1 max-h-64 overflow-y-auto">
              {data.daily.map((d) => (
                <li key={d._id} className="flex justify-between border-b py-1">
                  <span>{d._id}</span>
                  <span>{d.count}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default page