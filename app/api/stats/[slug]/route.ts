import { dbConnect } from "@/lib/connectDB";
import Click from "@/models/Click";
import URL from "@/models/URL";

export async function GET(req:Request, {params}: {params: {slug: string}}) {
    await dbConnect()

    try {
        const {slug} = await params
        const link = await URL.findOne({slug})

        if(!link){
            return Response.json({
                success: false,
                message: "No url found"
            }, {status: 400})
        }

        const stats = await Click.aggregate([
            {"$match":{urlId: link._id}},
            {
                $group:{
                    _id: {$dateToString: {format: "%Y-%m-%d", date: "$timeStamp"}},
                    count: {$sum: 1}
                }
            },
            {
                $sort: {_id: -1}
            }
        ])

        return Response.json({
                success: true,
                message: "stats fetched successfully",
                totalClicks: link.totalClicks,
                daily: stats
            }, {status: 200})

    } catch (error) {
        console.log("Error in getting stats: ", error);
        return Response.json({
                success: false,
                message: "Internal Server error",
            } ,{status: 500})
    }
}