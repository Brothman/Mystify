import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const albumSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
            },
        artist: {
            type: Schema.Types.ObjectId,
            ref: "Artist",
        },
        releaseDate: {
            type: String,
            required: true
        },
        imageURL: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

const album = mongoose.model('Album', albumSchema);
export default album;