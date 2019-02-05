import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            index: true,
            unique: true
        },
        bio: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const artist = mongoose.model('Artist', artistSchema);
export default artist;

