import mongoose from "mongoose";


const clickSchema = new mongoose.Schema({
    urlId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "URL",
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    },
    userAgent: {
        type: String,
        required: true
    },
     createdAt: {
        type: Date,
        default: Date.now,
        expires :"10d"
    }
});

const Click = mongoose.models.Click || mongoose.model("Click", clickSchema);

export default Click;
