import artistModel from '../resources/artists/artistModel';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/mystify', { useNewUrlParser: true });

const artists = [
    { 
        name: "NF",
        bio: "Nathan John Feuerstein, known professionally as NF, is an American rapper, singer and songwriter. NF has credited Eminem as his prime influence in hip-hop, claiming that at one point that was all he listened to.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg",
    },
    {
        name: "Leonard Cohen",
        bio: "Leonard Cohen was a Canadian singer-songwriter, poet and novelist. His work explored religion, politics, isolation, sexuality and romantic relationships.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/LeonardCohen.jpg",
    },
];

const saveArtists = async () => {
    for (const artist of artists) {
        const newArtist = new artistModel(artist);
        try {
         await newArtist.save();
        }
        catch(e) {
            console.log(e);
        }
    }
    mongoose.connection.close();
}

saveArtists();
