import mongoose from "mongoose";


const urlSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    url : {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const URL = mongoose.models.URL || mongoose.model("URL", urlSchema);

export default URL;