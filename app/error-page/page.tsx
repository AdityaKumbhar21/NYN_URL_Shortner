"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-red-500 text-xl">Invalid or Expired Link</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600">
            The link you followed does not exist or has already been removed.
          </p>
          <Link href="/">
            <Button variant="default">Go Back Home</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
