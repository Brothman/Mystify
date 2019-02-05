import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const trackSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
            },
        albums: {
            type: Schema.Types.ObjectId,
            ref: "Album"
        }
    },
    { timestamps: true }
);

const track = mongoose.model('Track', trackSchema);
export default track;


