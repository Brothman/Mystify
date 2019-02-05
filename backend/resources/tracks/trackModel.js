import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const trackSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
            },
        album: {
            type: Schema.Types.ObjectId,
            ref: "Album"
        },
        trackURL: {
            type: String,
            required: true
        },
        trackLength: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const track = mongoose.model('Track', trackSchema);
export default track;


