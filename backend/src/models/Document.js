import mongoose from "mongoose";

const versionSchema = new mongoose.Schema({
    versionNumber: Number,
    fileUrl: String,
    uploadedAt: { type: Date, default: Date.now},
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
})

const documentSchema = new mongoose.Schema({
    name: String,
    type: String,
    tags: [String],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    permissions : {
        viewers : [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        editors : [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
    },
    versions: [versionSchema],
    isStarred: { type: Boolean, default: false },
    isTrashed: { type: Boolean, default: false },
}, { timestamps: true }
);

export default mongoose.model("Document", documentSchema);