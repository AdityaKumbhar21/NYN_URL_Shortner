import { dbConnect } from "@/lib/connectDB"
import URL from "@/models/URL"

export async function POST(req: Request){
    await dbConnect()
    const {url, customSlug} = await req.json()

    try {
        const slug = customSlug || Math.random().toString(36).substring(2,8).toLowerCase()

        const existing = await URL.findOne({slug})

        if(existing){
            return Response.json({
                success: false,
                message: "Slug already taken"
            } ,{status: 400})
        }

        const link = await URL.create({
            slug,
            url
        })
        const shortUrl = `${process.env.NEXT_API_BASE_URL}/${slug}`

        return Response.json({
                success: true,
                message: "URL shorten successfully",
                shortUrl
            } ,{status: 200})

    } catch (error) {
        console.log("Error in shorting the url: ", error);
        return Response.json({
                success: false,
                message: "Internal Server error",
            } ,{status: 500})
        
    }
}