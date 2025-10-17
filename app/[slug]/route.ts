import { dbConnect } from "@/lib/connectDB"
import Click from "@/models/Click"
import URL from "@/models/URL"
import { NextResponse } from "next/server"


export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
    await dbConnect()

    const { slug } = await params
    const link = await URL.findOne({slug})
    

    if(!link){
        return NextResponse.redirect(`${process.env.NEXT_API_BASE_URL}/error-page`)
    }

    link.clicks += 1
    await link.save()

    await Click.create({
        urlId: link._id,
        userAgent: req.headers.get("user-agent") || "Unknown",
    })
    
    return NextResponse.redirect(link.url)

}